let ValuseDisple= document.querySelectorAll('.num');
// console.log(ValuseDisple);
let Interval =5000;

ValuseDisple.forEach((curEle,index)=>{
    let StartValue=0;
    let EndValue = parseInt(curEle.getAttribute('data-val'))
    // console.log(EndValue);
    let Duration= Math.floor(Interval/EndValue)
    let Counter = setInterval(function(){
        StartValue+=1;
        curEle.textContent=StartValue;
        if (StartValue===EndValue) {
             clearInterval(Counter)
        }
    },Duration)
})