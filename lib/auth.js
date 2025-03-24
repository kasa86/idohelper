// lib/auth.js
import { jwtVerify } from 'jose';
import prisma from '@/lib/prisma';

export async function verifyAuth(request) {
  const token = request.cookies.get('auth_token')?.value;

  if (!token) {
    return { isAuthenticated: false };
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    const user = await prisma.user.findUnique({
      where: { id: payload.userId }
    });

    if (!user || !user.isActive) {
      return { isAuthenticated: false };
    }

    return {
      isAuthenticated: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        companyId: user.companyId
      }
    };
  } catch (error) {
    console.error('Błąd weryfikacji tokenu:', error);
    return { isAuthenticated: false };
  }
}

export async function checkSuperAdminPermission(request) {
  const authResult = await verifyAuth(request);
  if (!authResult.isAuthenticated) return false;
  return authResult.user.role === 'SUPERADMIN';
}
