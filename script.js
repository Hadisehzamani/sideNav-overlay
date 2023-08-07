let nav = document.querySelector('.nav')
let openBtn = document.querySelector('button')
let deleteBtn = document.querySelector('.delete')


openBtn.addEventListener('click', function(){
    nav.classList.add('active')
})

deleteBtn.addEventListener('click', function(){
    nav.classList.remove('active')
})