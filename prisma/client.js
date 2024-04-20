const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient();
};

global.prismaGlobal = global.prismaGlobal || prismaClientSingleton();

module.exports = global.prismaGlobal;

if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = global.prismaGlobal || prismaClientSingleton();
}
