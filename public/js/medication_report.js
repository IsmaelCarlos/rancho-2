


const tabela_medicamentos = document.querySelector("#medicamentos");

let dados_tabela = "";

function corDataValidade(validade){
    validade = parseInt(validade);
    if(validade <= 2025)
        return 'success'
    else if(validade > 2)
        return 'danger'
    else
        return 'info'
}

function corQuantidade(quantidade){
    quantidade = parseInt(quantidade);
    if(quantidade < 8)
        return 'danger'
    else if(quantidade < 17)
        return 'warning'
    else if(quantidade >= 17)
        return 'success'
    else
        return 'info'
}


for(let i = 0; i < dados.length; i++){
    dados_tabela += `
        <tr  data-medicamento-id="${dados[i].id}">
            <td>${dados[i].id}</td>
            <td${ dados[i].nome ? '' : ' style="text-align: center"' }>${dados[i]?.nome || "-"}</td>
            <td>${dados[i].tipo}</td>
            <td><label class="badge badge-${corDataValidade(dados[i].data_validade)}">${dados[i].data_validade}</label></td>
            <td><label class="badge badge-${corQuantidade(dados[i].quantidade)}">${dados[i].quantidade}</label></td>
        </tr>
    `
}

 console.log(dados_tabela)

tabela_medicamentos.innerHTML = dados_tabela

// document.querySelectorAll('[data-medicamento-id]').forEach(tr => {
//     tr.addEventListener("click", evt => {
//         // alert(evt.target.parentNode.dataset.bovinoId)
//         // window.location.href = '/Rancho/html/bovine.html?id=' + evt.target.parentNode.dataset.bovinoId
//     })
// })


