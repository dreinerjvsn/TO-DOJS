var titulo = document.getElementById("title")
var botao_trocar = document.getElementById("trocar-title")
var botao_confirmar = document.getElementById("confirm-table")
let trc_nome
// const valores_inválidos = [" ","@","#","!","$"] 

botao_trocar.onclick = function(){
    trc_nome = document.createElement("INPUT");
    trc_nome.setAttribute("type","text");
    trc_nome.setAttribute("value","Insira o novo nome");
    document.appendChild(trc_nome)
}

function Criar_lista(){
    if (document.getElementById("lista").style.display === "none"){
        document.getElementById("lista").style.display = "block"
    } else{
        document.getElementById("lista").style.display = "none"
    };
}

// working on this ==> botao_confirmar.onclick = Criar_lista();
