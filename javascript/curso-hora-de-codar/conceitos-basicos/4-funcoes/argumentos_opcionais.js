const multiplication = function (m , n) {
    if (n === undefined){
        return m * 2;
    } else {
        return n * m;
    }
}

console.log(multiplication(5));
console.log(multiplication(2, 4));

console.log("--------------------------------------------");

const greeting = (name) => {
    if (name) {
        return "Hello" + " " +name + "!";
    }
        return "Hello!";
    }


console.log(greeting());
console.log(greeting("Gerson"));

console.log("--------------------------------------------");

// Valor default

/* const customGreetting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
  };
  
  console.log(customGreetting("Gerson"));
  console.log(customGreetting("Gerson", "Oi")); */

  const apresentacao = (nome= "Bruno", saudacao = "Oi", td = "tudo bem?") => { // essa ordem é a mesma que deve ser escrita na função do console.log
    return `${saudacao}, ${nome}! ${td}`;
  };
  
  console.log(apresentacao("Gerson", undefined, "tudo joia?"));
  console.log(apresentacao("Gerson", "Ola", undefined));
  console.log(apresentacao(undefined, "Hello", "who u are?"));
  console.log(apresentacao());
