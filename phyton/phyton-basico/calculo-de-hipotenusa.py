# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo.
# Calcule e mostre o comprimento da hipotenusa.

from math import hypot
cateto_oposto = float(input("Digite o comprimento do cateto oposto: "))
cateto_adjacente = float(input("Digite o comprimento do cateto adjacente: "))
hipotenusa = hypot(cateto_oposto, cateto_adjacente)
print(f'A hipotenusa vai medir {hipotenusa:.2f}')

# A função 'hypot' do módulo math calcula a hipotenusa de um triângulo retângulo dado os comprimentos dos catetos.
# Exemplo: math.hypot(3, 4) retorna 5.0 
# (pois 3² + 4² = 5², ou seja, 9 + 16 = 25).
# Para utilizar a função 'hypot', é necessário importar o módulo math ou apenas a função específica.
# Neste exemplo, importamos apenas a função 'hypot' do módulo math usando 'from math import hypot'.
# Isso permite que utilizemos a função diretamente sem o prefixo 'math.'.

print("Python é top 🔥😎")
print("Outra forma de fazer a mesma função sem importar bibliotecas...")

co = float(input("Comprimento do cateto oposto: "))
ca = float(input("Comprimento do cateto adjacente: "))
h = (co ** 2 + ca ** 2) ** (1/2)
print(f'A hipotenusa vai medir {h:.2f}')
print("Python é top 🔥😎")