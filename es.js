import readlineSync from 'readline-sync';

const nome = readlineSync.question('Digite seu nome: ');

console.log(`Olá, ${nome}!`);