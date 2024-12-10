let days=document.getElementById("days");
let houres=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds")

let start= new Date("Jun 22 2024 21:30");
function timer(start_date){
    let end= new Date();
    let milli_sec=end-start_date;

   
    let sec=Math.floor(milli_sec/1000) %60;
    seconds.innerHTML= sec;
    
    let min=Math.floor(milli_sec/1000/60) %60;
    minutes.innerHTML= min;
    
    let hh=Math.floor(milli_sec/1000/60/60) %60;
    houres.innerHTML=hh;
    
    let dd=Math.floor(milli_sec/1000/60/60/24) %24;
    days.innerHTML=dd;
    
   
}


const count_up= (start)=>{
    setInterval(()=> timer(start), 1000);} 
    count_up(start);







