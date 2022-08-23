var nome prompt("Qual é o seu nome?")
alert(nome + " , bem vinda!")

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
var nome = document.getElementById("nome").value 
var email = document.getElementById("email").val
var telefone = document.getElementById("telefone").value
if(nome != "" && email !== && telefone != ""){
alert("Pronto! Você receberá as novidades por e-mail!")
}else{
alert("Por favor, preencha os campos nome e email!")   
  }
}