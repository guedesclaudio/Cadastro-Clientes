
function RespondeMensagem() {

	var conteudoNome = document.getElementById('nome').value
	var conteudoEmail = document.getElementById('email').value
	var conteudoWpp = document.getElementById('wpp').value

	const template1 = `
	<p class='resposta'>Cadastro feito com sucesso!</p>
	<img class="img-resposta" src="img/correto.png" width="30px" height="30px">
	`
	const template2 = `
	<p class='resposta2'>Preencha os campos!</p>
	<img class="img-resposta" src="img/incorreto.png" width="30px" height="30px">
	`
	const pai = document.getElementById('pai')

	if (conteudoNome == '' || conteudoEmail == '') {
		pai.innerHTML = template2
	}

	else {
		pai.innerHTML = template1
	}
	
}	