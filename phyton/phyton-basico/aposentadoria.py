idade = int(input("Digite sua idade: "))
if idade >= 65:
    print("Você já pode se aposentar.") 
else:
    anos_restantes = 65 - idade
    print(f"Faltam {anos_restantes} anos para você se aposentar.")
