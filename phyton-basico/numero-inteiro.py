# Crie um programa que leia um número Real qualquer pelo teclado e mostre na tela a sua porção Inteira.
# Exemplo: Digite um número: 6.127
#          O número 6.127 tem a parte inteira 6.
# Para colocar um trecho em comentario sem apagar ele, use '''  3 aspas simples.

from math import trunc
num = float(input("Digite um número: "))
num_int = trunc(num)
print(f'O valor digitado foi {num} número tem sua parte inteira de {num_int} 😎')

print('Segunda forma de fazer:')

num = float(input("Digite um valor: "))
print(f'O valor digitado foi {num} e a sua porção inteira é {int(num)} 😎')