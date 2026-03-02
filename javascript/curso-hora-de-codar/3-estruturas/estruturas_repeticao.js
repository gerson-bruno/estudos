// while
let p = 0;
while (p < 5) {
    console.log(`Repetindo ${p}`);
    p++;
}


console.log("-------------------------------------------"); 

// loop infinito (bug)
/*
let x = 10;
while (x > 5;) {
    console.log(`Repetindo ${x}`);
    x++;
}
Isso fará com que ele fique adicionando +1 ao x, sem parar o loop, pois não tem um parâmetro de parada. (x ja é maior que 5)*/


// do while
let y = 0;
do {
    console.log(`Repetindo ${y}`);
    y++;
} while (y <= 5);


console.log("-------------------------------------------");

// for (estrutura de repetição mais utilizada)
for (let i = 0; i < 5; i++) {
    console.log(`Repetindo ${i}`);
}


console.log("-------------------------------------------");

// break
for (let g = 20; g > 10; g--) {
    console.log(`Repetindo ${g}`);
    if (g === 12) {
        console.log('o g é 12!');
        break;
    }
}


console.log("-------------------------------------------");

// continue
for (let h = 20; h > 10; h--) {
    if (h === 15) {
        console.log('o h é 15!');
        continue;
    }
    console.log(`Repetindo ${h}`);
}


console.log("-------------------------------------------");

// switch  - obrigatório de usar o break no final de cada console.log.

const job = "Dev";
switch (job) {
    case "Programador":
        console.log("Voce é um programador!");
        break;
    case "Advogado":
        console.log("Voce é um advogado!");
        break;
    case "Dev":
        console.log("Voce é um Dev!");
        break;
    default:
        console.log("Profissão não encontrada");
    
}