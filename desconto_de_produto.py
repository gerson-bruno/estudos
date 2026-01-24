preco = float(input('Digite o preço do produto: R$ '))
desconto = preco * 0.05 # % de desconto aqui (no caso foi 5%)
novo_preco = preco - desconto
print(f'Preço com desconto: R$ {novo_preco:.2f}')