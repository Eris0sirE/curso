"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function fazerCadastro() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("pass").value;
  var genero = document.getElementById("genero").value;
  var user = document.getElementById("nick").value;
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var endereco = document.getElementById("endereco").value;
  localStorage.setItem("user", user);
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);
  localStorage.setItem("genero", genero);
  localStorage.setItem("user", user);
  localStorage.setItem("nome", nome);
  localStorage.setItem("sobrenome", sobrenome);
  localStorage.setItem("endereco", endereco);
  alert("Cadastro feito com sucesso, " + nome + "!"); // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function efetivarLogin() {
  var confirmaEmail = document.getElementById("emailConfirma").value;
  var confirmaSenha = document.getElementById("senhaConfirma").value;
  var email = localStorage.getItem("email");
  var senha = localStorage.getItem("senha");

  if (confirmaEmail == email && confirmaSenha == senha) {
    alert("Login feito com sucesso, bem vindo(a) de volta!");
  } else {
    alert("Email ou senha incorreta.");
  }
}

function makeProfile() {
  //isso coloca as info do cadastro numa pag de perfil da pessoa, talvez tenha q mudar pra outro js e tirar da function pra funcionar d cara no script
  var nome, nomeCont, sobrenome, sobrenomeCont, email, emailCont, endereco, enderecoCont, user, userCont;
  user = document.createElement("div");
  userCont = document.createTextNode(document.getItem("user"));
  user.appendChild(userCont);
  document.body.append(user);
  nome = document.createElement("div");
  nomeCont = document.createTextNode(document.getItem("nome"));
  nome.appendChild(nomeCont);
  document.body.append(nome);
  sobrenome = document.createElement("div");
  sobrenomeCont = document.createTextNode(document.getItem("sobrenome"));
  document.body.append(sobrenome);
  email = document.createElement("div");
  emailCont = document.createTextNode(document.getItem("email"));
  email.appendChild(emailCont);
  document.body.append(email);
  endereco = document.createElement("div");
  enderecoCont = document.createTextNode(document.getItem("endereco"));
  endereco.appendChild(enderecoCont);
  document.body.append(endereco);
} //DomContentLoaded espera html carregar antes d rodar js, tenho q pedir pro prof explicar o codigo melhor depois pq nao consegui fazer sozinha e tirei 90% da internet 


document.addEventListener("DOMContentLoaded", function adicionarCompra() {
  var adicionaACompra = document.querySelectorAll('.adicionaCompra');
  var itensCarrinhoItem = document.querySelector('.itensCarrinho');
  var precoTotalItem = document.querySelector;
  var precoTotal = 0;
  adicionaACompra.forEach(function (button) {
    button.addEventListener('click', function () {
      var preco = parseFloat(button.dataset.preco);
      precoTotalItem += (_readOnlyError("precoTotalItem"), precoTotal);
      precoTotalItem = (_readOnlyError("precoTotalItem"), 'R$' + precoTotal.toFixed(2));
      var nomeItem = button.previousElementSibling.previousElementSibling.textContent;
      var li = document.createElement('li');
      li.textContent = itemName;
      cartItemsElement.appendChild(li);
    });
  });
});