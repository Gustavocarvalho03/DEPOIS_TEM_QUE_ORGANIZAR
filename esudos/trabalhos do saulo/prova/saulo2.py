from fractions import Fraction

def criar_lista_fracoes():
    lista_fracoes = []
    numerador = 1
    denominador = 2

    while numerador <= 1000:
        
        fracao = Fraction(numerador, denominador)
        lista_fracoes.append(fracao)
        numerador += 1
        denominador += 1

    return lista_fracoes


def calcular_soma_lista(lista):
   
    soma = Fraction(0, 1)  

    for fracao in lista:
        soma = soma + fracao

    return soma


lista_fracoes = criar_lista_fracoes()


soma = calcular_soma_lista(lista_fracoes)

print("Lista de Frações:")
for fracao in lista_fracoes:
    print(fracao)

print("\nSoma dos Elementos da Lista:", soma)