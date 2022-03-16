document.querySelector('#add').onclick = function() {
    var minhaTarefa = document.querySelector('#tarefa').value

    if(minhaTarefa.length == 0) {
        alert("Por favor, digite sua tarefa!")
        return
    }

    document.querySelector('#tarefas').innerHTML += `
        <div class="tarefa">
            <span>${minhaTarefa}</span>
        </div>
    `;

    document.querySelector('#tarefa').value = ''
}