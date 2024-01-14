


const tabela_bovinos = document.querySelector("#bovinos");

let dados_tabela = "";

function corPesoInicial(peso){
    peso = parseInt(peso);
    if(peso <= 2)
        return 'danger'
    else if(peso > 2)
        return 'success'
    else
        return 'info'
}

function corPesoAtual(peso){
    peso = parseInt(peso);
    if(peso < 8)
        return 'danger'
    else if(peso < 17)
        return 'warning'
    else if(peso >= 17)
        return 'success'
    else
        return 'info'
}


for(let i = 0; i < dados.length; i++){
    dados_tabela += `
        <tr  data-bovino-id="${dados[i].id}">
            <td>${dados[i].id}</td>
            <td${ dados[i].raca ? '' : ' style="text-align: center"' }>${dados[i]?.raca || "-"}</td>
            <td>${dados[i].data_nascimento}</td>
            <td><label class="badge badge-${corPesoInicial(dados[i].peso_inicial)}">${dados[i].peso_inicial}@</label></td>
            <td><label class="badge badge-${corPesoAtual(dados[i].peso_atual)}">${dados[i].peso_atual}@</label></td>
        </tr>
    `
}

console.log(dados_tabela)

tabela_bovinos.innerHTML = dados_tabela

document.querySelectorAll('[data-bovino-id]').forEach(tr => {
    tr.addEventListener("click", evt => {
        // alert(evt.target.parentNode.dataset.bovinoId)
        window.location.href = '/html/bovine.html?id=' + evt.target.parentNode.dataset.bovinoId
    })
})


