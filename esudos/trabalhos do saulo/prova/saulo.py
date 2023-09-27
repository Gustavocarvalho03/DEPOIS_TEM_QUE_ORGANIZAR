def Inserir(lista, elemento):
    
    if len(lista) < 3:
        lista.insert(0, elemento)
    else:
        print("Erro: A lista já possui 3 elementos e não pode receber mais.")

def Retirada(lista):
    if len(lista) > 0:
        lista.pop()
    else:
        print("Erro: A lista está vazia e não é possível retirar elementos.")

lista = []

while True:
    print("\nMenu de Opções:")
    print("1. Inserir elemento")
    print("2. Retirar elemento")
    print("3. Sair")
    
    opcao = input("Escolha uma opção: ")
    
    if opcao == '1':
        elemento = float(input("Digite o elemento a ser inserido: "))
        Inserir(lista, elemento)
    if opcao == '2':
        Retirada(lista)
    if opcao == '3':
        break
    else:
        print("Opção inválida. Tente novamente.")

print("Programa encerrado.")

