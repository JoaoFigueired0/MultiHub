const email = document.getElementById("inputEmail");
const senha = document.getElementById("inputPassword");

function validacaoLogin() {
  const emailSalvo = localStorage.getItem('Email');
  const senhaSalva = localStorage.getItem('password');
 
   if (valorEmail = emailSalvo) {
    console.log("Correto")
   } else {
    console.log("Erro os emails são diferentes")
   }
   if (valorSenha = senhaSalva) {
    console.log("Correto")
   } else {
    console.log("Erro as senhas são diferentes")
   }
   console.log("Redirecionando para a Home")
     window.location.href = "./pages/Home/index.html";
}