let painel = ""

function atualizarPainel() {
    let painelText = document.getElementById("painel")
    painelText.innerHTML = painel
}

function limpar() {
    painel = ""
    atualizarPainel()
}
function apagar() {
    painel = painel.slice(0, -1)
    atualizarPainel()
}
function resultado() {
    painel = eval(painel)
    painel = painel.toString()
    atualizarPainel()
}
function decimal() {
    let ultimoCaracter = painel
    if (ultimoCaracter == ""){
        painel += ""
    }else{
        painel += "."
    }
    atualizarPainel()
}

function divisao() {
    let ultimoCaracter = painel
    if ((ultimoCaracter.charAt(painel.length - 1) == "/") || (ultimoCaracter.charAt(painel.length - 1) == "*") || (ultimoCaracter.charAt(painel.length - 1) == "-") || (ultimoCaracter.charAt(painel.length - 1) == "+") || (ultimoCaracter == "")){
        painel += ""
    }else {
        painel += "/"
        atualizarPainel()
    }
}
function vezes() {
    let ultimoCaracter = painel
    if ((ultimoCaracter.charAt(painel.length - 1) == "/") || (ultimoCaracter.charAt(painel.length - 1) == "*") || (ultimoCaracter.charAt(painel.length - 1) == "-") || (ultimoCaracter.charAt(painel.length - 1) == "+") || (ultimoCaracter == "")) {
        painel += ""
    } else {
        painel += "*"
        atualizarPainel()
    }
}
function menos() {
    let ultimoCaracter = painel
    if ((ultimoCaracter.charAt(painel.length - 1) == "/") || (ultimoCaracter.charAt(painel.length - 1) == "*") || (ultimoCaracter.charAt(painel.length - 1) == "-") || (ultimoCaracter.charAt(painel.length - 1) == "+") || (ultimoCaracter == "")) {
        painel += ""
    } else {
        painel += "-"
        atualizarPainel()
    }
}
function mais() {
    let ultimoCaracter = painel
    if ((ultimoCaracter.charAt(painel.length - 1) == "/") || (ultimoCaracter.charAt(painel.length - 1) == "*") || (ultimoCaracter.charAt(painel.length - 1) == "-") || (ultimoCaracter.charAt(painel.length - 1) == "+") || (ultimoCaracter == "")) {
        painel += ""
    } else {
        painel += "+"
        atualizarPainel()
    }
}

function zero() {
    painel += "0"
    atualizarPainel()
}
function um() {
    painel += "1"
    atualizarPainel()
}
function dois() {
    painel += "2"
    atualizarPainel()
}
function tres() {
    painel += "3"
    atualizarPainel()
}
function quatro() {
    painel += "4"
    atualizarPainel()
}
function cinco() {
    painel += "5"
    atualizarPainel()
}
function seis() {
    painel += "6"
    atualizarPainel()
}
function sete() {
    painel += "7"
    atualizarPainel()
}
function oito() {
    painel += "8"
    atualizarPainel()
}
function nove() {
    painel += "9"
    atualizarPainel()

}
