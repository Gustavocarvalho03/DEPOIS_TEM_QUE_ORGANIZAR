nt1 = float(input("Digite a primeira nota: "))
nt2 = float(input("Digite a segunda nota: "))
nt3 = float(input("Digite a terceira nota: "))

media = (nt1+nt2+nt3) /3

print(media)

if media > 6:
    print("APROVADO")

elif media >= 4 or media == 6:
    print("AVALIAÇÃO SUB")

else:
    print("REPROVADO")