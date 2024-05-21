function fazerCadastro(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("pass").value
    let pronomes = document.getElementById("pronomes").value
    let user = document.getElementById("nick").value   
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let endereco = document.getElementById("endereco").value

    localStorage.setItem("user", user)
    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)
    localStorage.setItem("pronomes", pronomes)
    localStorage.setItem("user", user)
    localStorage.setItem("nome", nome)
    localStorage.setItem("sobrenome", sobrenome)
    localStorage.setItem("endereco", endereco)

    alert("Cadastro feito com sucesso, " + nome +"!")
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
function efetivarLogin(){
    let confirmaEmail = document.getElementById("emailConfirma").value
    let confirmaSenha = document.getElementById("senhaConfirma").value
    let email = localStorage.getItem("email")
    let senha = localStorage.getItem("senha")

    if(confirmaEmail == email && confirmaSenha == senha){
        alert("Login feito com sucesso, bem vindo(a) de volta!")
    }else{
        alert("Email ou senha incorreta.")
    }
}
function makeProfile(){
    //isso coloca as info do cadastro numa pag de perfil da pessoa, talvez tenha q mudar pra outro js e tirar da function pra funcionar d cara no script
    let nome, nomeCont, sobrenome, sobrenomeCont, email, emailCont, endereco, enderecoCont, user, userCont

    user = document.createElement("div")
    userCont = document.createTextNode(document.getItem("user"))
    user.appendChild(userCont)
    document.body.append(user)

    nome = document.createElement("div")
    nomeCont = document.createTextNode(document.getItem("nome"))
    nome.appendChild(nomeCont)
    document.body.append(nome)

    sobrenome = document.createElement("div")
    sobrenomeCont = document.createTextNode(document.getItem("sobrenome"))
    document.body.append(sobrenome)

    email = document.createElement("div")
    emailCont = document.createTextNode(document.getItem("email"))
    email.appendChild(emailCont)
    document.body.append(email)

    endereco = document.createElement("div")
    enderecoCont = document.createTextNode(document.getItem("endereco"))
    endereco.appendChild(enderecoCont)
    document.body.append(endereco)
}

//DomContentLoaded espera html carregar antes d rodar js, tenho q pedir pro prof explicar o codigo melhor depois pq nao consegui fazer sozinha e tirei 90% da internet 
document.addEventListener("DOMContentLoaded", function adicionarCompra(){
    const adicionaACompra = document.querySelectorAll('.adicionaCompra')
    const itensCarrinhoItem = document.querySelector('.itensCarrinho')
    const precoTotalItem = document.querySelector
    let precoTotal = 0
    adicionaACompra.forEach(button => {
        button.addEventListener('click', () => {
            const preco = parseFloat(button.dataset.preco);
            precoTotalItem += precoTotal
            precoTotalItem = 'R$' + precoTotal.toFixed(2)
            //eu nao faço ideia doq isso faz
            const nomeItem = button.previousElementSibling.previousElementSibling.textContent;
            const li = document.createElement('li');
            li.textContent = itemName;
            cartItemsElement.appendChild(li);
        })
    })

})