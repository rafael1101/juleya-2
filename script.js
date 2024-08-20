const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A reciclagem de biodegradáveis pode ser integrada ao transporte público?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Porque pode diminuir a quantidade de roupas no lixo."
            },
            {
                texto: "Não!",
                afirmacao: "Porque uma coisa não tem nada a ver com a outra."
            }
        ]
    },
    {
        enunciado: "Deve-se colocar lixeiras para resíduos biodegradáveis em estações de transporte público?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Porque facilita a separação de resíduos."
            },
            {
                texto: "Não!",
                afirmacao: "Porque pode ser mal utilizado pelos usuários."
            }
        ]
    },
    {
        enunciado: "O aumento do respeito às regras de trânsito e a redução do uso de automóveis podem contribuir para a sustentabilidade urbana?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "O aumento do respeito às regras de trânsito e a redução do uso de automóveis contribuem significativamente para a sustentabilidade urbana."
            },
            {
                texto: "Não!",
                afirmacao: "Mesmo com maior respeito às regras de trânsito, a redução do uso de automóveis não impactará significativamente a sustentabilidade urbana."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
