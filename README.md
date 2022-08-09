# challenge-5-moment

## Description

Daily Scheduler:

1) The current day is displayed at the top of the calendar
2) Time blocks for standard business hours (9am to 5pm)are color-coded to indicate whether it is in the past, present, or future
3) Events can be entered into time block by clicking on time block and saved...events are saved in local storage and persist even after refreshing page.

Notes: 

## Table of Contents (Optional)

Daily Scheduler:

Deployed wesbite: https://jamesdartmouth.github.io/challenge-5-moment/
Github website: https://github.com/JamesDartmouth/challenge-5-moment.git

## Installation
    None
## Usage

Screentshot:

[Screenshot](/assets/momentScreenShot.png)

## Credits

Thank you to:

Instructors (Diarmuid): for helping me with the code to target the sibling elements of the button to condense the code (instead of target all the time blocks seperately: $(this).siblings('textarea').val())) 

TA (Meg)" for helping me with the code for moment to check the time blocks for past present and future using military time (9am-17pm: var hour= parseInt($(this).attr("id")) and to have hte code check the time every minute (setInterval(checkHour, 60000))) 

Tutor (Esterling): for teaching how to run a for loop to save and display the events in the planner and push them into an array to condense the code so that I didn't have to write a seperate save/display code event for each time block which is how i originaly wrote the code: (var tasks = []; for (let i = 0; i < times.length; i++) {
        const currentTime = times[i]; 

        const key = Object.keys(currentTime)[0] 

        $(`#${key} textarea`).val(currentTime[key]);

## License
    None
## Badges
    None
## Features

Daily scheduler that saves events entered in time block which persist even after page refresh.

## How to Contribute
    None
## Tests
    None