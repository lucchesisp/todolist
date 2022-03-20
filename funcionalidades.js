var tarefas = [];

function removerTarefa(posicao) {

    // Retorna True ou False dependendo da ação do usuário.
    var confirmacao = confirm("Você deseja mesmo remover essa tarefa?")

    if(confirmacao) {
        tarefas.splice(posicao, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    
        document.querySelector('#tarefas').innerHTML = '';
        tarefas.forEach((tarefa, posicao) => {
            document.querySelector('#tarefas').innerHTML += `
                <div class="tarefa" onClick="removerTarefa(${posicao})">
                    <span>${tarefa}</span>
                </div>
            `;
        });
    }
}

function recuperaTarefas() {

    var tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'))

    if(tarefasSalvas !== null) {
        tarefas = tarefasSalvas
        tarefas.forEach((tarefa, posicao) => {
            document.querySelector('#tarefas').innerHTML += `
                <div class="tarefa" onClick="removerTarefa(${posicao})">
                    <span>${tarefa}</span>
                </div>
            `;
        });
    }
}

function salvaTarefas() {
    var minhaTarefa = document.querySelector('#tarefa').value

    if(minhaTarefa.length == 0) {
        alert("Por favor, digite sua tarefa!")
        return
    }

    if(tarefas != null) {
        tarefasTamanho = tarefas.length;
    } else {
        tarefasTamanho = 0
    }

    tarefas.push(minhaTarefa)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    document.querySelector('#tarefas').innerHTML += `
        <div class="tarefa" onClick="removerTarefa(${tarefasTamanho})">
            <span>${minhaTarefa}</span>
        </div>
    `;

    document.querySelector('#tarefa').value = ''
}

recuperaTarefas()

document.querySelector('#add').onclick = function() {
    salvaTarefas();
}