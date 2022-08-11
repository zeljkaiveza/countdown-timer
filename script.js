let day = document.querySelector("#days")
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")

setInterval(setData, 1)

function setData(){
    let currentDate = new Date()
    let isItLeapYear = Number(currentDate.getFullYear()) % 4 === 0

    let currentMonth = Number(currentDate.getMonth())
    let currentDay = Number(currentDate.getDate())
    let currentHour = Number(currentDate.getHours())
    let currentMinute = Number(currentDate.getMinutes())
    let currentSeconds = Number(currentDate.getSeconds())

    let remainingHours = 24 - currentHour - 1
    let remainingMinutes = 60 - currentMinute - 1
    let remainingSeconds = 60 - currentSeconds
    let daysRemaining = 0

    if(isItLeapYear){
        switch (currentMonth){
            case 0:
                daysRemaining += 31
            case 1:
                daysRemaining += 29
            case 2:
                daysRemaining += 31
            case 3:
                daysRemaining += 30
            case 4:
                daysRemaining += 31
            case 5:
                daysRemaining += 30
            case 6:
                daysRemaining += 31
            case 7:
                daysRemaining += 31
            case 8:
                daysRemaining += 30
            case 9:
                daysRemaining += 31
            case 10:
                daysRemaining += 30
            case 11:
                daysRemaining += 31
        }
    }else{
        switch (currentMonth){
            case 0:
                daysRemaining += 31
            case 1:
                daysRemaining += 28
            case 2:
                daysRemaining += 31
            case 3:
                daysRemaining += 30
            case 4:
                daysRemaining += 31
            case 5:
                daysRemaining += 30
            case 6:
                daysRemaining += 31
            case 7:
                daysRemaining += 31
            case 8:
                daysRemaining += 30
            case 9:
                daysRemaining += 31
            case 10:
                daysRemaining += 30
            case 11:
                daysRemaining += 31
        }
    }
    daysRemaining = daysRemaining - currentDay
    day.innerHTML = daysRemaining
    hours.innerHTML = remainingHours
    minutes.innerHTML = remainingMinutes
    seconds.innerHTML = remainingSeconds
}
