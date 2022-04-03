function cadastraralunos(vetalunos){
    let objeto = {
        nome: prompt(`Informe o nome do aluno(a) ${i+1}`).toUpperCase(),
        ra: Number(prompt(`Informe o RA do aluno(a) ${i+1}`)),
        idade: Number(prompt(`Informe a idade do aluno(a) ${i+1}`)),
        sexo: prompt(`Informe o genêro do aluno(a) ${i+1}, M-Masculino ou F-Feminino`).toUpperCase(),
        media: Number(prompt(`Informe a média do aluno(a) ${i+1}`))
    }

    let achou = false // se não encontrar, recebe false, caso encontre, recebe true
        // vetalunos.length -> qtde de elementos no vetor
    for(let i=0;i<vetalunos.length;i++){
        if (vetalunos[i].ra == vetcadastro.ra){
            achou = true // encontramos um aluno com este RA
        }
    }
    if (achou) {
        alert(`Já existe um aluno com este RA`)
    }
    else {
        vetalunos.push(objeto) // adiciona o aluno no vetor
        alert(`Aluno cadastrado com sucesso`)
    }
}
function relatorioscrescente_nome(vetalunos){
        let objeto = {
            nome_cadastro: prompt(`Informe os nomes dos alunos cadastrados`).toUpperCase()
        }
    let achou = false // verifica se o aluno existe
    for(let i=0;i<vetalunos.length;i++){
        if (vetalunos[i].nome == objeto.nome_cadastro){
            achou = true // existe
        }
    }
    if (!achou){
        alert(`Nome do aluno digitado não encontrado.`)
    }
        
}
function relatorio(){
    let opc 
    let vetalunos = []
    do{
        opc = Number(prompt("Digite uma das opções abaixo:\n1. Cadastrar alunos\n2. Relatório de Alunos em ordem crescente por Nome.\n3. Relatório de Alunos em ordem decrescente por RA.\n4. Relatório de Alunos em ordem crescente por Nome,apenas dos Aprovados.\n 5. Sair."))
        switch(opc){
            case 1: cadastraralunos(vetalunos)
                    break
            case 2: relatorioscrescente_nome(vetalunos)
                    break
            case 3: relatoriosdecrescente_ra(vetalunos, selectsort)
                    break
            case 4: relatorioscrescentenome_apr(vetalunos, bubblesortapr)
                    break
            case 5: alert("O programa será finalizado")
                    break
            default: alert("Opção inválida")
        }

    }while (opc != 5)
}