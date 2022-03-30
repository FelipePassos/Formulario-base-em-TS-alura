export default class Negociacoes {
    constructor() {
        this.negociacoesArray = []; // ou Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoesArray.push(negociacao);
    }
    lista() {
        return this.negociacoesArray;
    }
}
