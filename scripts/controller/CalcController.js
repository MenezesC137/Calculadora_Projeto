class CalcController{

    constructor(){

        this._locale = 'pt-BR';
        this._displaycalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {
            
            this.setDisplayDateTime();

        }, 1000);

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) =>{

            btn.addEventListener('click', e => {

                console.log(btn.className.baseVal.replace('btn-',''));

            });
        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: '2-digit',
            month: 'short',
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;  
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displaycalc(){
        return this._displaycalcEl.innerHTML;
    }

    set displaycalc(value){
        this._displaycalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

}
