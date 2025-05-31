const email = document.getElementById("input_email");
const senha = document.getElementById("input_password");
const senhaConfirm = document.getElementById("input_password_confirm");

const localEmail = localStorage.getItem("Email");
const localSenha = localStorage.getItem("Password");

function trocarSenha() {
  const valEmail = email.value.trim();
  const valSenha = senha.value.trim();
  const valSenhaConfirm = senhaConfirm.value.trim();

  // if (valEmail === localEmail) {
  //   console.log(`Email não foi alterado: ${valEmail}`);
  // }
  if (valSenha === valSenhaConfirm && valSenha !== localSenha) {
    localStorage.setItem("Password", valSenha);
    return;
  } else {
    console.log("Senha não foi trocada");
  }

  window.location.href = "../../index.html";
}
