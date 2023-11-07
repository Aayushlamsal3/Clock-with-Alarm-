 <script>

        let select=document.querySelectorAll("select")
        let current=document.getElementById("current")
        

        let setalarm=document.querySelector(".setalarm")

        let alarmTime,isAlarmSet=false;


        function current_time(){
       
            let tim=new Date()
        let h=tim.getHours()
        let m=tim.getMinutes()
        let s=tim.getSeconds()
        let i=h>=12 ? "PM" : "AM"
        current.innerText=`${h}:${m}:${s} ${i}`
        if(alarmTime == `${h}:${m} ${i}`){
            let song=new Audio("audioalarm.wav")
            song.play()
            song.loop=true;
        }
        }
        current_time()
        setInterval(current_time,1000)
     
        


        for(let i=24;i>0;i--){
            // i=i<10? i :i;
            let option=`<option>${i}</option>`
            select[0].firstElementChild.insertAdjacentHTML("afterend",option);
        }

        for(let i=59;i>=0;i--){
            let option=`<option value=${i}>${i}</option>`
            select[1].firstElementChild.insertAdjacentHTML("afterend",option)
        }

        for(let i=2;i>0;i--){
           let ampm=i==1? "AM":"PM"
            let option=`<option value=${ampm}>${ampm}</option>`
            select[2].firstElementChild.insertAdjacentHTML("afterend",option)
        }

        function Ringing(){
            if(isAlarmSet){
                alarmTime= "";
                song.pause()
                setalarm.innerText="Set Alarm"
                return isAlarmSet=false;
            }
      
            let time=`${select[0].value}:${select[1].value} ${select[2].value}`
            isAlarmSet=true;
            alarmTime=time;
            setalarm.innerText="Clear ALARM"
        }

    
        setalarm.addEventListener("click",Ringing)




    </script>
