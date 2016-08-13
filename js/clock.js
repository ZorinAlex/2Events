$(document).ready(function() {
    var eDate;
    //BIT NUMBERS
    var Days_firstNum;
    var Days_secondNum;

    var Hours_firstNum;
    var Hours_secondNum;

    var Minutes_firstNum;
    var Minutes_secondNum;

    var Seconds_firstNum;
    var Seconds_secondNum;

    setTimer();

    var timerId;
    timerId = setTimeout(function run() {
        decreaseTimer();
        timerId = setTimeout(run, 1000);
    }, 1000);
    $(window).focus(function() {
        timerId = setTimeout(function run() {
            decreaseTimer();
            timerId = setTimeout(run, 1000);
        }, 1000);
        setTimer();
    });

    $(window).blur(function() {
        clearInterval(timerId);
    });

    function setTimer(){

        eDate = new EventDate("Aug 25, 2016 18:00:00");

        Days_firstNum = eDate.getDays_firstNum();
        Days_secondNum = eDate.getDays_secondNum();

        Hours_firstNum = eDate.getHours_firstNum();
        Hours_secondNum = eDate.getHours_secondNum();

        Minutes_firstNum = eDate.getMinutes_firstNum();
        Minutes_secondNum = eDate.getMinutes_secondNum();

        Seconds_firstNum = eDate.getSeconds_firstNum();
        Seconds_secondNum = eDate.getSeconds_secondNum();

        $("#counter #Days_firstNum").html(Days_firstNum);
        $("#counter #Days_secondNum").html(Days_secondNum);
        $("#counter #Hours_firstNum").html(Hours_firstNum);
        $("#counter #Hours_secondNum").html(Hours_secondNum);
        $("#counter #Minutes_firstNum").html(Minutes_firstNum);
        $("#counter #Minutes_secondNum").html(Minutes_secondNum);
        $("#counter #Seconds_firstNum").html(Seconds_firstNum);
        $("#counter #Seconds_secondNum").html(Seconds_secondNum);
    }

    function EventDate(date) {
        this.CurrentDate = Date.now();
        this.setCurrentDate = function(){
            this.CurrentDate = Date.now();
        };

        this.DueDate = Date.parse(date);

        this.Difference = this.DueDate - this.CurrentDate;
        if(this.Difference<0){
            this.Difference=0;
        }
        this.DaysLeft = Math.floor(this.Difference/(1000*60*60*24));
        this.HoursLeft = Math.floor(this.Difference/(1000*60*60)%24);
        this.MinutesLeft = Math.floor(this.Difference/(1000*60)%60);
        this.SecondsLeft = Math.floor(this.Difference/(1000)%60);

        //DAYS
        this.getDays = function() {
            return this.DaysLeft;
        };
        this.getDays_firstNum = function() {
            return Math.floor(this.DaysLeft/10);
        };
        this.getDays_secondNum = function() {
            return this.DaysLeft % 10;
        };
        //HOURS
        this.getHours = function() {
            return this.HoursLeft;
        };
        this.getHours_firstNum = function() {
            return Math.floor(this.HoursLeft/10);
        };
        this.getHours_secondNum = function() {
            return this.HoursLeft % 10;
        };
        //MINS
        this.getMinutes = function() {
            return this.MinutesLeft;
        };
        this.getMinutes_firstNum = function() {
            return Math.floor(this.MinutesLeft/10);
        };
        this.getMinutes_secondNum = function() {
            return this.MinutesLeft % 10;
        };
        //SECS
        this.getSeconds = function() {
            return this.SecondsLeft;
        };this.getSeconds_firstNum = function() {
            return Math.floor(this.SecondsLeft/10);
        };
        this.getSeconds_secondNum = function() {
            return this.SecondsLeft % 10;
        };
    }

    function animate_me(selector){
        $("#counter #"+selector)//.animate({top: "50px", opacity: 0.0}, 100)
            .animate({opacity: 0}, 300, function(){$(this).html(eval(selector));})
            .animate({opacity: 1} , 300);
    }

    function decreaseTimer(){

        if(+Seconds_firstNum+Seconds_secondNum+Minutes_firstNum+ Minutes_secondNum+Hours_firstNum+Hours_secondNum+Days_firstNum+Days_secondNum ==0){
            clearInterval(timerId);
        }

        if((+Seconds_firstNum *10 + Seconds_secondNum)>0){
            if(Seconds_secondNum>0){
                Seconds_secondNum--;
                animate_me("Seconds_secondNum");
            }else{
                if(Seconds_firstNum>0){
                    Seconds_firstNum--;
                    animate_me("Seconds_firstNum");
                    Seconds_secondNum = 9;
                    animate_me("Seconds_secondNum");
                }
            }
        }else{
            decreaseMins();
        }


        function decreaseMins(){
            if((+Minutes_firstNum *10 + Minutes_secondNum)>0){
                Seconds_firstNum=6;
                animate_me("Seconds_firstNum");
                Seconds_secondNum = 0;
                animate_me("Seconds_secondNum");
                if(Minutes_secondNum>0){
                    Minutes_secondNum--;
                    animate_me("Minutes_secondNum");
                }else{
                    if(Minutes_firstNum>0){
                        Minutes_firstNum--;
                        animate_me("Minutes_firstNum");
                        Minutes_secondNum = 9;
                        animate_me("Minutes_secondNum");
                    }
                }
            }else{
                decreaseHours();
            }

        }

        function decreaseHours(){
            if((+Hours_firstNum *10 + Hours_secondNum)>0){
                Minutes_firstNum=6;
                animate_me("Minutes_firstNum");
                Minutes_secondNum = 0;
                animate_me("Minutes_secondNum");
                if(Hours_secondNum>0){
                    Hours_secondNum--;
                    animate_me("Hours_secondNum");
                }else{
                    if(Hours_firstNum>0){
                        Hours_firstNum--;
                        animate_me("Hours_firstNum");
                        Hours_secondNum = 9;
                        animate_me("Hours_secondNum");
                    }
                }
            }else{
                decreaseDays();
            }

        }

        function decreaseDays(){
            if((+Days_firstNum *10 + Days_secondNum)>0){
                Hours_firstNum=2;
                animate_me("Hours_firstNum");
                Hours_secondNum = 4;
                animate_me("Hours_secondNum");
                if(Days_secondNum>0){
                    Days_secondNum--;
                    animate_me("Days_secondNum");
                }else{
                    if(Days_firstNum>0){
                        Days_firstNum--;
                        animate_me("Days_firstNum");
                        Days_secondNum = 9;
                        animate_me("Days_secondNum");
                    }
                }
            }

        }
    }


});
