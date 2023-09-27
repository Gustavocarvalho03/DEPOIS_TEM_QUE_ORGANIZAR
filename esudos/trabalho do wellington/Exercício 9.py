s1 = float(input("Digite seu salário: "))

if s1 <= 3.000:
    v1 = s1 * 0.035
    soma = v1+s1
    print(soma)

elif s1 > 3.000:
    v2 = s1 * 0.015
    some = v2+s1
    print (some)

else:
    print("Fim")
