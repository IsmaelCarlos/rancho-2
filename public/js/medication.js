var ctt = 0;

var identificador = document.querySelector("#identificador")
var proprietario = document.querySelector("#proprietario")
var nome = document.querySelector("#nome")
var tipo = document.querySelector("#tipo")

var data_validade = document.querySelector("#data_validade")

var quantidade = document.querySelector("#quantidade")


var quantidade_frasco = document.querySelector("#quantidade_frasco")









// var empresa_racao = document.querySelector("#empresa_racao")




function update(i) {
    var dado = dados[i]
    identificador.querySelector('text').innerHTML = dado.id
    data_validade.querySelector('text').innerHTML = dado.data_validade
    proprietario.querySelector('text').innerHTML = dado.proprietario
    nome.querySelector('text').innerHTML = dado.nome
    // console.log("PESO ATUAL", dado.peso_atual, peso_atual)
    tipo.querySelector('text').innerHTML = dado.tipo
    // proprietario.querySelector('text').innerHTML = dado.proprietario
    quantidade.querySelector('text').innerHTML = dado.quatidade
    quantidade_frasco.querySelector('text').innerHTML = dado.quantidade_frasco
    // raca.querySelector('text').innerHTML = dado.raca
    // suplemento.querySelector('text').innerHTML = dado.suplemento
    // tipo_vacina.querySelector('text').innerHTML = dado.tipo_vacina
    // data_vacina.querySelector('text').innerHTML = dado.data_vacina
    // dosagem_quantidade_vacina.querySelector('text').innerHTML = dado.dosagem_quantidade_vacina
    // tipo_capim.querySelector('text').innerHTML = dado.tipo_capim
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