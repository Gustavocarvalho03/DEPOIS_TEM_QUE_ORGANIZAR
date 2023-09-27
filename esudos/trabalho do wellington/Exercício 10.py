valor_mensalidade = float(input("Digite o valor da mensalidade: "))
multa_percentual = float(input("Digite a porcentagem da multa: "))
atraso_dias = int(input("Digite a quantidade de dias de atraso: "))
juros_diarios_percentual = float(input("Digite a porcentagem por dia de atraso: "))

multa = valor_mensalidade * (multa_percentual / 100)
juros_diarios = valor_mensalidade * (juros_diarios_percentual / 100)

valor_atualizado = valor_mensalidade + multa + (juros_diarios * atraso_dias)

print("Valor da mensalidade atualizada: R$ {:.2f}".format(valor_atualizado))
