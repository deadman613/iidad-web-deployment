require('dotenv/config');
const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  try {
    const blog = await prisma.blog.findFirst({
      select: { id: true, slug: true, tags: true, keywords: true },
    });
    console.log('PRISMA_OK', blog);
  } catch (error) {
    console.error('PRISMA_ERROR', error.code || '', error.message);
    process.exitCode = 1;
  }
}

main();
