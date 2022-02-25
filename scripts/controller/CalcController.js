class CalcController{

    constructor(){

        this._displaycalc = '0';
        this._dataAtual;
    }

    get displaycalc(){

        return this._displaycalc;
    }

    set displaycalc(valor){
        this._displaycalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(data){

        this._dataAtual = data;
    }

}