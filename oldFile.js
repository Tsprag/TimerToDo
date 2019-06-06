const task = []
let currentTask
let progressBar

const move = () => progressBar = setInterval(moveProgress, 10)

const stopMove = () => clearInterval(progressBar)

const moveProgress = () => {
    let elem = document.getElementById(`task${currentTask}`)
    console.log(elem, currentTask)
    let width = elem.style.width ? elem.style.width.substring(0, elem.style.width.length - 1) : 1
    if (width >= 100) {
        clearInterval(progressBar)
    } else {
        width++
        elem.style.width = width + '%'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const task0 = document.querySelector('.task0')


    task0.addEventListener('click', function(event) {
        event.preventDefault()
        currentTask = 0
    })

    const task1 = document.querySelector('.task1')

    task1.addEventListener('click', function(event) {
        event.preventDefault()
        currentTask = 1
    })

    const task2 = document.querySelector('.task2')

    task2.addEventListener('click', function(event) {
        event.preventDefault()
        currentTask = 2
    })

    const task3 = document.querySelector('.task3')

    task3.addEventListener('click', function(event) {
        event.preventDefault()
        currentTask = 3
    })

    const task4 = document.querySelector('.task4')

    task4.addEventListener('click', function(event) {
        event.preventDefault()
        currentTask = 4
    })

    const text = document.querySelector('.buttonTimer')
    let isMoving = false

    text.addEventListener('click', function(event) {
        event.preventDefault()

        isMoving
            ?
            stopMove() :
            move()

        isMoving = !isMoving
    })

    const modal = document.querySelector('.modal')
    const addTask = document.querySelector('.button')

    addTask.addEventListener('click', function(event) {
        event.preventDefault()
        modal.style.display = "block"
    })

    const exitModal = document.querySelector('.exitModal')

    exitModal.addEventListener('click', function(event) {
        event.preventDefault()
        modal.style.display = 'none'
    })

    const submit = document.querySelector('.submit')

    submit.addEventListener('submit', function(event) {
        event.preventDefault()
        let taskName = document.querySelector('#taskName').value
        let taskHours = document.querySelector('#hours').value
        let taskMinutes = document.querySelector('#minutes').value

        if (task.length < 5) {
            task.push({ 'name': taskName, 'goalHours': taskHours, 'goalMinutes': taskMinutes })
        }
        for (let taskbox = 0; task.length < 5; taskbox++) {
            if (task[taskbox]) {
                document.querySelector(`.taskName${taskbox}`).textContent = task[taskbox].name
            } else {
                break;
            }
        } // this for loop will need to change
        modal.style.display = 'none'
    })
})