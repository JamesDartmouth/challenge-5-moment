var timeDisplayEl = $("#currentDay");
var save=$(".saveBtn");

var currentHour = moment().format('h')
var hour =$(".datetime")


function displayTime() {
    var currentDay = moment().format('dddd, MMMM, Do');
    timeDisplayEl.text(currentDay);
    console.log(currentDay)
}
displayTime();


function checkHour(){
    var currentHour = moment().hour()


    $(".time-block").each(function(){
       
    var hour= parseInt($(this).attr("id"))
    
    if(hour < currentHour){
        $(this).addClass("past");
    }else if(hour === currentHour){
        // $(this).removeClass("past");
        $(this).addClass("present");
    }
    else{
        // $(this).removeClass("present");
        // $(this).removeClass("past")
        $(this).addClass("future");
    } 

    })
}
checkHour();

setInterval(checkHour, 60000)


var tasks = [];

function loadTime() {
    const times = JSON.parse(localStorage.getItem("taskNew")); 

    tasks = times;

    for (let i = 0; i < times.length; i++) {
        const currentTime = times[i]; 

        const key = Object.keys(currentTime)[0] 

        $(`#${key} textarea`).val(currentTime[key]);

    }
}

loadTime();


$('.saveBtn').on('click', function(event){
    console.log($(this).parent())
    console.log($(this).siblings('textarea').val());

    const id = $(this).parent().attr("id");

    let task = $(this).siblings('textarea').val()
    tasks.push({
        [id]: task
    })
    localStorage.setItem("taskNew", JSON.stringify(tasks))

});
