var titulo = document.getElementById("title")
var botao = document.getElementById("trocar-title")
let trc_nome
// const valores_inválidos = [" ","@","#","!","$"] 

botao.onclick = function(){
    trc_nome = document.createElement("INPUT");
    trc_nome.setAttribute("type","text");
    trc_nome.setAttribute("value","Insira o novo nome");
    document.appendChild(trc_nome)
}