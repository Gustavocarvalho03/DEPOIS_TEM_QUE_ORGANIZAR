# Exercício 7
x = int(input("Qual o valor de x: "))
y = int(input("Qual o valor de y: "))
z = int(input("Qual o valor de z: "))

if z > x + y or y > x + z or x > y + z:
    print("Infelizmente não conseguimos identificar Triângulo")

elif x == y == z:
    print("Triâgulo equilátero")

elif x == y or x == z or y == z:
    print("Triângulo escaleno ")

else:
    print("Triângulo isósceles")
