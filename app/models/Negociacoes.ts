import { Negociacao } from "./Negociacao.js";

export default class Negociacoes {
    
    private negociacoesArray: Negociacao[] = []; // ou Array<Negociacao>

    adiciona(negociacao: Negociacao) {
        this.negociacoesArray.push(negociacao);
    }

    lista(): readonly Negociacao[] { // ou ReadonlyArray<Negociacao>
        return this.negociacoesArray;
    }
}