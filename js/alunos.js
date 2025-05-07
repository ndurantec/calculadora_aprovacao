let alunos = JSON.parse(sessionStorage.getItem("alunos")) || [];

function cadastrarAluno(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const turma = document.getElementById("turma").value.trim();

  if (nome && idade && turma) {
    const novoAluno = { nome, idade, turma };
    alunos.push(novoAluno);

    sessionStorage.setItem("alunos", JSON.stringify(alunos));

    alert("Aluno cadastrado com sucesso!");
    event.target.reset();
  } else {
    alert("Preencha todos os campos corretamente.");
  }
}
