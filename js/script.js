const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minutNum = document.querySelector('.minutes');

function clock() {

    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();
    sec.style.transform = `rotate(${seconds * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
    minutNum.innerHTML = minutes < 10 ? '0' + minutes : minutes
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', (e) => {
        e.preventDefault()
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }
        tabsContentItem[i].classList.add('active')
        tabsItem[i].classList.add('active')

    })
}

const startBtn = document.querySelector('.stopwatch__btn'),
    startSecond = document.querySelector('.stopwatch__seconds'),
    startMinute = document.querySelector('.stopwatch__minutes'),
    startHour = document.querySelector('.stopwatch__hours'),
    colorActive = document.querySelector('.tabsLink__span')

startBtn.addEventListener('click' , () => {
    if (startBtn.innerHTML == 'start') {
        startBtn.innerHTML = 'stop'
        colorActive.style.display = 'block'
    }else if (startBtn.innerHTML == 'stop'){
        startBtn.innerHTML = 'clear'
        colorActive.style.background = 'red'
        clearTimeout(timeoutId)
    }else if (startBtn.innerHTML == 'clear'){
        startBtn.innerHTML = 'start'
        colorActive.style.background = 'white'
        colorActive.style.display = 'none'
    }

    let second = 0
    let minute = 0
    let hourss = 0
    if (startBtn.innerHTML == 'stop') {
        function start() {
            startSecond.innerHTML = second++
            timeoutId = setTimeout(() => {
                 start()
                if (second > 59) {
                    minute++
                    startMinute.innerHTML = minute
                    second = 0
                    if (minute>59) {
                        hourss++
                        startHour.innerHTML = hourss
                        minute = 0
                    }
                } 
            }, 1000)
        }
        start()
    }else if (startBtn.innerHTML == 'start'){
        startSecond.innerHTML = '0',
        startMinute.innerHTML = '0',
        startHour.innerHTML = '0'
    }
})

