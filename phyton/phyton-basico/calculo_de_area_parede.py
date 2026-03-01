altura = float(input('Digite a altura da parede em metros: '))
largura = float(input('Digite a largura da parede em metros: '))
area = altura * largura
tinta = area / 2 # Metro quadrado que uma lata faz.
print(f'Área da parede: {area} m²')
print(f'Quantidade de tinta necessária: {tinta:.2f} latas')