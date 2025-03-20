import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" }, // Blokuje osadzanie w iframe
          { key: "X-XSS-Protection", value: "1; mode=block" }, // Zapobiega XSS
          { key: "X-Content-Type-Options", value: "nosniff" }, // Blokuje sniffing MIME
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // Ogranicza referrer
          { key: "Content-Security-Policy", value: "default-src 'self'; img-src *; script-src 'self' 'unsafe-inline'" }, // CSP
        ],
      },
    ];
  },
};

export default nextConfig;