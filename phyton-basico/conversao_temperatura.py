# Recebe uma temperatura em Celsius e converte para Fahrenheit e Kelvin

celsius = float(input('Digite a temperatura em Celsius: '))

fahrenheit = celsius * 9/5 + 32
kelvin = celsius + 273.15

print(f'Temperatura em Celsius: {celsius:.2f}°C')
print(f'Temperatura em Fahrenheit: {fahrenheit:.2f}°F')
print(f'Temperatura em Kelvin: {kelvin:.2f}K')