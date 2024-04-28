var ctt = 0;

var identificador = document.querySelector("#identificador")
var proprietario = document.querySelector("#proprietario")
var nome = document.querySelector("#nome")
var tipo = document.querySelector("#tipo")

var data_validade = document.querySelector("#data_validade")

var quantidade = document.querySelector("#quantidade")


var peso_saco = document.querySelector("#peso_saco")






function update(i) {
    var dado = dados[i]
    identificador.querySelector('text').innerHTML = dado.id
    data_validade.querySelector('text').innerHTML = dado.data_validade
    proprietario.querySelector('text').innerHTML = dado.proprietario
    nome.querySelector('text').innerHTML = dado.nome
    tipo.querySelector('text').innerHTML = dado.tipo
    quantidade.querySelector('text').innerHTML = dado.quatidade
    peso_saco.querySelector('text').innerHTML = dado.pesosaco
    
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