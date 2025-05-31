const email = document.getElementById("input_email");
const senha = document.getElementById("input_password");
const valorEmail = email.value.trim();
const valorSenha = senha.value.trim();

function validacaoLogin() {
  const valorEmail = email.value.trim();
  const valorSenha = senha.value.trim();

  const emailSalvo = localStorage.getItem("Email");
  const senhaSalva = localStorage.getItem("Password");

  if (valorEmail === emailSalvo && valorSenha === senhaSalva) {
  } else {
    console.log("Os itens não coincidem");
    return;
  }
  console.log("Redirecionando para a Home");
  window.location.href = "./pages/Home/index.html";
}
