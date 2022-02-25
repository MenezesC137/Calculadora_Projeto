class CalcController{

    constructor(){

        this._displaycalc = '0';
        this._currentDate;
        this.initialize();
    }

    initialize(){

        let displaycalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displaycalcEl.innerHTML ="1325";
        dateEl.innerHTML ="25/02/2022";
        timeEl.innerHTML ="11:20";

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