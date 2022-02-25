class CalcController{

    constructor(){

        this._displaycalc = '0';
        this._currentDate;
    }

    get displaycalc(){

        return this._displaycalc;
    }

    set displaycalc(valor){
        this._displaycalc = valor;
    }

    get currentDate(){
        return this.currentDate;
    }

    set currentDate(date){
        this._currentDate = date;
    }

}