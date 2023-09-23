const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefa()
}

function mostrarTarefa() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {

        novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
            <img src="./img/check-mark-button-md.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}"</p>
            <img src="./img/delete-icon.png" alt="tarefa-para lixo" onclick="deletarItem(${index})">
        </li>
    
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefa()
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)

    mostrarTarefa()
}

function recarregarTarefas() {
    const tarefaDoLocalStorage = localStorage.getItem('lista')
    
    if (tarefaDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
    }

    mostrarTarefa()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)