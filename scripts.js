const buttonAdd = document.querySelector('.button-add-task')
const buttonEdit = document.querySelector('.button-edit-task')

const titulo = document.querySelector('#titulo')
const categoria = document.querySelector('#categoria')
const prioridade = document.querySelector('#prioridade')
const descricao = document.querySelector('#descricao')
const listaCompleta = document.querySelector('.list-tasks')
const tarefaExecutada = document.querySelector('.list-tasks-completed')

let minhaListaDeItens = []
let itemSelecionado = null

function adicionarNovaTarefa() {
    if (descricao.value) {
        minhaListaDeItens.push({
            id: minhaListaDeItens.length + 1,
            titulo: titulo.value,
            categoria: categoria.value,
            prioridade: prioridade.value,
            descricao: descricao.value,
            concluida: false
        })

        titulo.value = ''
        categoria.value = ''
        prioridade.value = ''
        descricao.value = ''
    }
  
    mostrarTarefa()
}

function salvarAlteracoesDaTarefa() {
    if (descricao.value) {

        const item = minhaListaDeItens[itemSelecionado]
       
        item.titulo = titulo.value
        item.categoria = categoria.value
        item.prioridade = prioridade.value
        item.descricao = descricao.value
    }

    limpaFormulario()
    mostrarTarefa()
}

function mostrarTarefa() {

    let novaLi = ''
    let listaComp = ''

    minhaListaDeItens.forEach((item, index) => {
        if (item.concluida == false) {
            novaLi = novaLi + `
            <li id="task-${item.id}" class="task ${item.concluida && "done"}">
                <img src="./img/check-mark-button-md.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <div onclick="editarTarefa(${index})">
                    <p><spam>Titulo: </spam>${item.titulo}</p>
                    <p><spam>Categoria: </spam>${item.categoria}</p>
                    <p><spam>Prioridade: </spam>${item.prioridade}</p>
                    <p><spam>Descrição: </spam>${item.descricao}</p>
                </div>
                <img src="./img/delete-icon.png" alt="tarefa-para lixo" onclick="deletarItem(${index})">
            </li>
            `
        } else {    
            listaComp = listaComp + `
            <li id="task-${item.id}" class="task ${item.concluida && "done"}">
                <img src="./img/check-mark-button-md.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <div onclick="editarTarefa(${index})">
                    <p><spam>Titulo: </spam>${item.titulo}</p>
                    <p><spam>Categoria: </spam>${item.categoria}</p>
                    <p><spam>Prioridade: </spam>${item.prioridade}</p>
                    <p><spam>Descrição: </spam>${item.descricao}</p>
                </div>
                <img src="./img/delete-icon.png" alt="tarefa-para lixo" onclick="deletarItem(${index})">
            </li>
            `
        }
    })

    listaCompleta.innerHTML = novaLi  
    tarefaExecutada.innerHTML = listaComp  

    const minhaListaDeItensConcluidos = minhaListaDeItens.filter((item) => item.concluida == true)
    const minhaListaDeItensNaoConcluidos = minhaListaDeItens.filter((item) => item.concluida == false)

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function editarTarefa(index) {  
    itemSelecionado = index
    const item = minhaListaDeItens[index]

    titulo.value = item.titulo
    categoria.value = item.categoria
    prioridade.value = item.prioridade
    descricao.value = item.descricao

    buttonEdit.style.display = 'block'
    buttonAdd.style.display = 'none'
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefa()
}

function deletarItem(index) {
    if (itemSelecionado != null) {
        limpaFormulario()
    }
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

function limpaFormulario() {
    titulo.value = ''
    categoria.value = ''
    prioridade.value = ''
    descricao.value = ''

    buttonEdit.style.display = 'none'
    buttonAdd.style.display = 'block'

    itemSelecionado = null
}

recarregarTarefas()
buttonAdd.addEventListener('click', adicionarNovaTarefa)
buttonEdit.addEventListener('click', salvarAlteracoesDaTarefa)
