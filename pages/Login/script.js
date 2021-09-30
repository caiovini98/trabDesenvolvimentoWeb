'use strict'


function tempLogin(event) {
  event.preventDefault();

  const login = event.path[0][0].value;
  const senha = event.path[0][1].value;
  if (!login && !senha) {
    return;
  }
  switch (login) {
    case 'funcionario':
      window.location.href = '../Funcionario/produtos.html';
      break;
    case 'responsavel':
      window.location.href = '../Responsavel/ListagemAlunos/index.html';
      break;
    case 'aluno':
      window.location.href = '../Alunos/ComprarProdutos/index.html';
      break;
    case 'tecnico':
      window.location.href = '../CadastroEscola/index.html';
      break;
    default:
      var myAlert = document.getElementById('error-toast');//select id of toast
      var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
      bsAlert.show();//show it
  }
}
