const alunos = [
    {
        nome:"Luis",
        nota: 10,
        turma:"9B",
    },
    {
        nome:"Laura",
        nota: 9,
        turma:"9B",
    },
    {
        nome:"Sophia",
        nota: 10,
        turma:"9B",
    },
    {
        nome:"Blabla",
        nota: 2,
        turma:"9B",
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        
        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));