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