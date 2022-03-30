import { Negociacao } from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";

export class NegociacaoContoller {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void  {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limpar();
    }

    criarNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limpar(): void {
        this.inputData.value = '';
        this.inputData.focus();
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}