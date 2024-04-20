// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// declare global {
//   var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
// }

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient();
};

global.prismaGlobal = global.prismaGlobal || prismaClientSingleton();

module.exports = global.prismaGlobal;

if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = global.prismaGlobal || prismaClientSingleton();
}
