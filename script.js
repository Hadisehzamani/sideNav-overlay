let nav = document.querySelector('.nav')
let openBtn = document.querySelector('button')
let deleteBtn = document.querySelector('.delete')
let btn = document.querySelector('.btn')


openBtn.addEventListener('click', function(){
    nav.classList.add('active')
    btn.style.marginLeft = '200px'
})

deleteBtn.addEventListener('click', function(){
    nav.classList.remove('active')
    btn.style.marginLeft = '0'
})