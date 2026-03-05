/* Operadores lógicos:

&& - AND - E - todas as condições devem ser verdadeiras para resultar em true.
|| - OR - OU - pelo menos uma condição deve ser verdadeira para resultar em true.
! - NOT - NÃO - negação, inverte o resultado.

*/

/*Tabela Verdade:

Verdadeiro && Verdadeiro = Verdadeiro
Verdadeiro && Falso = Falso
Falso && Verdadeiro = Falso
Falso && Falso = Falso 

Verdadeiro || Verdadeiro = Verdadeiro
Verdadeiro || Falso = Verdadeiro
Falso || Verdadeiro = Verdadeiro
Falso || Falso = Falso

Inverte o resultado acima com !
!Verdadeiro = Falso
!Falso = Verdadeiro

*/


console.log(5 > 10 && 5 < 10);
console.log(5 > 10 || 5 < 10);

console.log("-------------------------------------------");

console.log(!true);
console.log(!false);

console.log("-------------------------------------------");