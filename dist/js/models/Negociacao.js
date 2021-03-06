export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const copiaData = new Date(this._data.getTime());
        return copiaData;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
