let seconds = 0;
let minites =0;
let hours = 0;
let days = 0;


function stopwatch() {
    seconds ++
    if (seconds/60 === 1)
    { seconds = 0;
        minites ++
        
        
        if (minites/60 ===1)
        { minutes =0;
            hours++
            
            if(hours/24 ===1)
            { hours = 0;
                days ++}
            }
            
        }
        
        
        
        let dispaytimer =document.getElementById('timer').innerText = days+":"+hours+":"+minites+":"+seconds;
    }
    // 
    let timeinterval = null;
    let timestatus = "timestoped"

let start_btn =document.getElementById('start')
let stop_btn =document.getElementById('stop')
let reset_btn =document.getElementById('reset')
start_btn.addEventListener('click',function(){
    
    if(timestatus==="timestoped"){
      timeinterval = window.setInterval(stopwatch,100)
      timestatus = "timestarted";
}  
})
stop_btn.addEventListener('click',function(){
    if(timestatus==="timestarted")
    { 
        window.clearInterval(timeinterval);
        timestatus = "timestoped";
    }
})
reset_btn.addEventListener('click',function(){
  window.clearInterval(timeinterval);
   
    seconds=0;
    minites=0;
    hours=0;
    days=0;
    document.getElementById('timer').innerHTML="0:0:0:0"
    timestatus="timestoped";
})