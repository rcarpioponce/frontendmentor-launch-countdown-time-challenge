new Vue({
    el: "#countdown",
    data: {
       days: '-',
       hours: '-',
       minutes: '-',
       seconds: '-',
       endtime:'2021-09-21'
    },
    created(){
        this.generateCountDown()
    },
    methods: {
        generateCountDown(){

            var self = this;


            var myInterval = setInterval(function(){
                
                var countdown = self.getTimeRemaining();

                if(parseInt(countdown.seconds) < 0){
                    clearInterval(myInterval);
                    return false;
                }
                self.days = self.setNumber(countdown.days);
                self.hours = self.setNumber(countdown.hours);
                self.minutes = self.setNumber(countdown.minutes);
                self.seconds = self.setNumber(countdown.seconds);
              
            }, 1000);            
        },
        setNumber(number){
            numberInt = parseInt(number);
            if(number < 10){
                return '0' + number;
            }
            return number;
        },
        getTimeRemaining(){
            var endtime= this.endtime;
            var total = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor( (total/1000) % 60 );
            var minutes = Math.floor( (total/1000/60) % 60 );
            var hours = Math.floor( (total/(1000*60*60)) % 24 );
            var days = Math.floor( total/(1000*60*60*24) );
          
            return {
              total,
              days,
              hours,
              minutes,
              seconds
            };            
        }
    }
});