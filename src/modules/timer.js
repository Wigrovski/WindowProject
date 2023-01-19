export const timer = (deadline) => {
    const timerDays = document.querySelectorAll('.timer-days')
    const timerHours = document.querySelectorAll('.timer-hours')
    const timerMinutes = document.querySelectorAll('.timer-minutes')
    const timerSeconds = document.querySelectorAll('.timer-seconds')
    let timeInterval
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow)/1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24) 
        let hours = Math.floor((timeRemaining / 60 / 60 % 24))
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        
        return {timeRemaining, days, hours, minutes, seconds}
    }

    timerDays.forEach(item => {
        function showTimer(days, hours, minutes, seconds) {
            let getTime = getTimeRemaining()
            if (getTime.timeRemaining <= 0) {
                clearInterval(timeInterval)
                item.textContent = '00'
                return
            }
            item.textContent = getTime.days
        }
        showTimer()
        timeInterval = setInterval(showTimer, 1000)
    })
    timerHours.forEach(item => {
        function showTimer(days, hours, minutes, seconds) {
            let getTime = getTimeRemaining()
            if (getTime.timeRemaining <= 0) {
                clearInterval(timeInterval)
                item.textContent = '00'
                return
            }
            item.textContent = getTime.hours >= 10 ? getTime.hours : `0${getTime.hours}`
        }
        showTimer()
        timeInterval = setInterval(showTimer, 1000)
    })
    timerMinutes.forEach(item => {
        function showTimer(days, hours, minutes, seconds) {
            let getTime = getTimeRemaining()
            if (getTime.timeRemaining <= 0) {
                clearInterval(timeInterval)
                item.textContent = '00'
                return
            }
            item.textContent = getTime.minutes >= 10 ? getTime.minutes : `0${getTime.minutes}`
        }
        showTimer()
        timeInterval = setInterval(showTimer, 1000)
    })
    timerSeconds.forEach(item => {
        function showTimer(days, hours, minutes, seconds) {
            let getTime = getTimeRemaining()
            if (getTime.timeRemaining <= 0) {
                clearInterval(timeInterval)
                item.textContent = '00'
                return
            }
            item.textContent = getTime.seconds >= 10 ? getTime.seconds : `0${getTime.seconds}`
        }
        showTimer()
        timeInterval = setInterval(showTimer, 1000)
    })

}
