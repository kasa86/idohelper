// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Uruchamiam seeding...');

  // Usuń istniejące dane (opcjonalnie)
  console.log('🧹 Czyszczę bazę danych...');
  await prisma.translation.deleteMany({});
  await prisma.description.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.companyLimits.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.company.deleteMany({});

  // Utwórz 10 firm
  console.log('🏢 Tworzę firmy...');
  const companies = [];
  
  for (let i = 1; i <= 10; i++) {
    const company = await prisma.company.create({
      data: {
        name: `Firma ${i}`,
        status: 'ACTIVE',
      },
    });
    
    companies.push(company);
    
    // Utwórz limity dla firmy
    await prisma.companyLimits.create({
      data: {
        companyId: company.id,
        aiLimit: 100 + i * 10,
        aiUsed: Math.floor(Math.random() * (50 + i * 5)),
        storageLimit: 5 + i,
        storageUsed: Math.floor(Math.random() * (3 + i * 0.5)),
      },
    });
  }

  // Utwórz użytkowników dla każdej firmy
  console.log('👥 Tworzę użytkowników...');
  const roles = ['SUPERADMIN', 'ADMIN', 'CREATOR', 'REVIEWER', 'APPROVER', 'USER'];
  const hashedPassword = await bcrypt.hash('Password123!', 10);
  
  for (const company of companies) {
    for (const role of roles) {
      await prisma.user.create({
        data: {
          name: `${role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()} ${company.name}`,
          email: `${role.toLowerCase()}@${company.name.toLowerCase().replace(/\s+/g, '')}.com`,
          password: hashedPassword,
          role: role,
          status: 'ACTIVE',
          companyId: company.id,
        },
      });
    }
  }

  // Utwórz 5 produktów dla każdej firmy
  console.log('📦 Tworzę produkty...');
  const languages = ['pl', 'en', 'de', 'fr', 'es'];
  
  for (const company of companies) {
    for (let i = 1; i <= 5; i++) {
      // Używamy nanoid lub unikatowego timestampu dla pewności unikalności ID
      const timestamp = Date.now();
      const randomSuffix = Math.floor(Math.random() * 10000);
      const productId = `PROD-${timestamp}-${randomSuffix}-${i}`;
      
      const product = await prisma.product.create({
        data: {
          id: productId,
          name: `Produkt ${i} (${company.name})`,
          description: `Domyślny opis produktu ${i} dla firmy ${company.name}`,
          companyId: company.id,
        },
      });
      
      // Utwórz opis dla produktu
      await prisma.description.create({
        data: {
          id: `DESC-${timestamp}-${randomSuffix}-${i}`,
          content: `Szczegółowy opis produktu ${i} dla firmy ${company.name}. Ten produkt oferuje wiele funkcji i korzyści.`,
          productId: product.id,
        },
      });
      
      // Utwórz tłumaczenia dla produktu
      for (const lang of languages) {
        await prisma.translation.create({
          data: {
            id: `TRANSL-${timestamp}-${randomSuffix}-${i}-${lang}`,
            productId: product.id,
            language: lang,
            name: `Product ${i} (${company.name}) - ${lang.toUpperCase()}`,
            shortDesc: `Krótki opis w języku ${lang}`,
            longDesc: `Długi opis produktu w języku ${lang}. Ten produkt jest idealny dla klientów, którzy szukają jakości i niezawodności.`,
            seoTitle: `SEO Title - ${lang.toUpperCase()}`,
            seoDesc: `SEO Description - ${lang.toUpperCase()}`,
            seoKeywords: `product,${lang},${i}`,
          },
        });
      }
    }
  }

  console.log('✅ Seeding zakończony pomyślnie!');
}

main()
  .catch((e) => {
    console.error('❌ Błąd podczas seedowania:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });