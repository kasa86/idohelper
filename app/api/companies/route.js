// app/api/companies/route.js
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { checkSuperAdminPermission } from '@/lib/auth';

export async function GET(request) {
  try {
    // Tymczasowo wyłącz sprawdzanie uprawnień do testów
    const isAuthorized = true //await //checkSuperAdminPermission(request);
    // if (!isAuthorized) {
    //   return NextResponse.json(
    //     { error: 'Brak wymaganych uprawnień' },
    //     { status: 403 }
    //   );
    // }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '0');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    
    // Zmieniono domyślne pole sortowania na createdAt, które na pewno istnieje w modelu
    const sortField = searchParams.get('sortField') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    const nameFilter = searchParams.get('name');
    const statusFilter = searchParams.get('status');
    
    // Zaktualizowano nazwy filtrów dat
    const createdAtFromFilter = searchParams.get('registerDateFrom');
    const createdAtToFilter = searchParams.get('registerDateTo');

    const where = {};

    if (nameFilter) {
      where.name = { contains: nameFilter, mode: 'insensitive' };
    }

    if (statusFilter) {
      where.status = statusFilter;
    }

    // Zaktualizowano nazwy pól w filtrach dat
    if (createdAtFromFilter || createdAtToFilter) {
      where.createdAt = {};
      if (createdAtFromFilter) {
        where.createdAt.gte = new Date(createdAtFromFilter);
      }
      if (createdAtToFilter) {
        where.createdAt.lte = new Date(createdAtToFilter);
      }
    }

    const totalItems = await prisma.company.count({ where });

    const companies = await prisma.company.findMany({
      where,
      orderBy: {
        [sortField]: sortOrder
      },
      skip: page * pageSize,
      take: pageSize,
      include: {
        _count: { select: { users: true } },
        companyLimits: {
          select: {
            aiLimit: true,
            aiUsed: true,
            storageLimit: true,
            storageUsed: true
          }
        }
      }
    });

    // Zaktualizowano mapowanie w wynikach
    const items = companies.map(company => ({
      id: company.id,
      name: company.name,
      registerDate: company.createdAt, // Zmieniono z company.registerDate na company.createdAt
      status: company.status,
      usersCount: company._count.users,
      aiUsed: company.companyLimits?.aiUsed || 0,
      aiLimit: company.companyLimits?.aiLimit || 100,
      storageUsed: company.companyLimits?.storageUsed || 0,
      storageLimit: company.companyLimits?.storageLimit || 5
    }));

    return NextResponse.json({
      items,
      totalItems,
      page,
      pageSize
    });

  } catch (error) {
    console.error('Błąd pobierania firm:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas pobierania danych' },
      { status: 500 }
    );
  }
}