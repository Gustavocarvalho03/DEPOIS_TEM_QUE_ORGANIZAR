#Exercício 6
n1 = int(input("Digite um número: "))
n2 = int(input("Digite um número: "))
n3 = int(input("Digite um número: "))
n4 = int(input("Digite um número: "))

numeros = [n1,n2,n3,n4]
num_ordem = sorted(numeros)

soma =   num_ordem[0] + num_ordem[1] + num_ordem[2]
print(f"A soma dos três números menores é {soma}")
