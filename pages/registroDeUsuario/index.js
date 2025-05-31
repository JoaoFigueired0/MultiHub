const nome = document.getElementById("inputNome");
const email = document.getElementById("inputEmail");
const senha = document.getElementById("inputPassword");
const confirmaSenha = document.getElementById("inputNewPassword");

function registroCadastro() {
  const valorNome = nome.value.trim();
  const valorEmail = email.value.trim();
  const valorSenha = senha.value.trim();
  const valorConfirmaSenha = confirmaSenha.value.trim();

  if (!valorNome || !valorEmail || !valorSenha || !valorConfirmaSenha) {
    console.log("Por favor, preencha todos os campos.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(valorEmail)) {
    console.log("E-mail inválido. Por favor, insira um e-mail válido.");
    return;
  }

  if (valorSenha !== valorConfirmaSenha) {
    console.log("As senhas não coincidem.");
    return;
  }

  localStorage.setItem('Email', valorEmail);
  localStorage.setItem('Password', valorSenha);

  console.log("Cadastro realizado com sucesso!");

  window.location.href = "../../index.html";
}