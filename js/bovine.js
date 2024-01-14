// const tabela_bovinos = document.querySelector("#bovino");

// let dados_tabela = "";

// function corPesoInicial(peso){
//     peso = parseInt(peso);
//     if(peso <= 2)
//         return 'danger'
//     else if(peso > 2)
//         return 'success'
//     else
//         return 'info'
// }

// function corPesoAtual(peso){
//     peso = parseInt(peso);
//     if(peso < 8)
//         return 'danger'
//     else if(peso < 17)
//         return 'warning'
//     else if(peso >= 17)
//         return 'success'
//     else
//         return 'info'
// }


// for(let i = 0; i < dados.length; i++){
//     dados_tabela += `
//         <tr data-bovino-id="${dados[i].id}">
//             <td>${dados[i].id}</td>
//             <td${ dados[i].raca ? '' : ' style="text-align: center"' }>${dados[i]?.raca || "-"}</td>
//             <td>${dados[i].data_nascimento}</td>
//             <td><label class="badge badge-${corPesoInicial(dados[i].peso_inicial)}">${dados[i].peso_inicial}@</label></td>
//             <td><label class="badge badge-${corPesoAtual(dados[i].peso_atual)}">${dados[i].peso_atual}@</label></td>
//         </tr>
//     `
// }

// console.log(dados_tabela)

// tabela_bovinos.innerHTML = dados_tabela

// document.querySelectorAll('[data-bovino-id]').forEach(tr => {
//     tr.addEventListener("click", evt => {
//         // alert(evt.target.parentNode.dataset.bovinoId)
//         window.location.href = '/Rancho/html/bovine.html?id=' + evt.target.parentNode.dataset.bovinoId
//     })
// })




var ctt = 0;

var identificador = document.querySelector("#identificador")
var proprietario = document.querySelector("#proprietario")
var racao = document.querySelector("#racao")
var silo = document.querySelector("#silo")
var raca = document.querySelector("#raca")
var suplemento = document.querySelector("#suplemento")
var data_nascimento = document.querySelector("#data_nascimento")

var peso_inicial = document.querySelector("#peso_inicial")

var peso_atual = document.querySelector("#peso_atual")

var relatorio = document.querySelector("#relatorio")

var vacina = document.querySelector("#vacina")
var tipo_vacina = document.querySelector("#tipo_vacina")
var data_vacina = document.querySelector("#data_vacina")
var dosagem_quantidade_vacina = document.querySelector("#dosagem_quantidade_vacina")







var tipo_capim = document.querySelector("#tipo_capim")

// var empresa_racao = document.querySelector("#empresa_racao")




function update(i) {
    var dado = dados[i]
    identificador.querySelector('text').innerHTML = dado.id
    data_nascimento.querySelector('text').innerHTML = dado.data_nascimento
    peso_inicial.querySelector('text').innerHTML = dado.peso_inicial
    peso_atual.querySelector('text').innerHTML = dado.peso_atual
    // console.log("PESO ATUAL", dado.peso_atual, peso_atual)
    relatorio.querySelector('text').innerHTML = dado.relatorio
    proprietario.querySelector('text').innerHTML = dado.proprietario
    racao.querySelector('text').innerHTML = dado.racao
    silo.querySelector('text').innerHTML = dado.silo
    raca.querySelector('text').innerHTML = dado.raca
    suplemento.querySelector('text').innerHTML = dado.suplemento
    tipo_vacina.querySelector('text').innerHTML = dado.tipo_vacina
    data_vacina.querySelector('text').innerHTML = dado.data_vacina
    dosagem_quantidade_vacina.querySelector('text').innerHTML = dado.dosagem_quantidade_vacina
    tipo_capim.querySelector('text').innerHTML = dado.tipo_capim
    // empresa_racao.querySelector('text').innerHTML = dado.empresa_racao


    vacina.innerHTML = ''
    dado.vacina.forEach(function (vac) {
        var li = document.createElement('li')
        li.innerHTML = vac
        vacina.appendChild(li)
    })
}


var [anterior, atual, proximo] = document.querySelector("#paginacao").children

atual.innerHTML = ctt + 1
update(ctt)

anterior.addEventListener("click", () => {
    console.log("ANTERIOR")
    ctt--;
    update(ctt)
    atual.innerHTML = ctt + 1
})

proximo.addEventListener("click", () => {
    console.log("PROXIMO")
    ctt++
    update(ctt)
    atual.innerHTML = ctt + 1
})