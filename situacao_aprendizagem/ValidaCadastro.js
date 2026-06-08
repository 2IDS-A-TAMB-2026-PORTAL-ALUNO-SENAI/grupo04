// Máscaras
const inputCpf = document.getElementById("cpf");
IMask(inputCpf, {
    mask: "000.000.000-00"
});

const inputTelefone = document.getElementById("tel");
IMask(inputTelefone, {
    mask: "(00) 00000-0000"
});

// Formulário
const form = document.getElementById("formCadastro");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("tel").value.trim();
    const curso = document.getElementById("curso").value;
    const termos = document.getElementById("termos").checked;
    const turno = document.querySelector('input[name="turno"]:checked');

    if (
        nome === "" ||
        cpf === "" ||
        email === "" ||
        telefone === "" ||
        curso === "" ||
        !turno ||
        !termos
    ) {
        Swal.fire({
            icon: "error",
            title: "Campos obrigatórios",
            text: "Preencha todos os campos e aceite os termos."
        });
        return;
    }

    if (cpf.length !== 14) {
        Swal.fire({
            icon: "error",
            title: "CPF inválido",
            text: "Digite um CPF válido."
        });
        return;
    }

    if (telefone.length !== 15) {
        Swal.fire({
            icon: "error",
            title: "Telefone inválido",
            text: "Digite um telefone válido."
        });
        return;
    }

    // Validação simples de e-mail
    if (!email.includes("@") || !email.includes(".")) {
        Swal.fire({
            icon: "error",
            title: "E-mail inválido",
            text: "Digite um e-mail válido."
        });
        return;
    }

    // Sucesso
    Swal.fire({
        icon: "success",
        title: "Cadastro realizado!",
        text: "Seus dados foram enviados com sucesso."
    });

    console.log("Nome:", nome);
    console.log("CPF:", cpf);
    console.log("E-mail:", email);
    console.log("Telefone:", telefone);
    console.log("Curso:", curso);
    console.log("Turno:", turno.value);
});