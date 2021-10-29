let input = document.querySelector('.inp')
let check = document.querySelector('.check')
let submit = document.querySelector('.submit')

    submit.addEventListener('submit',(e)=>{
        e.preventDefault();
    })

    input.addEventListener('blur', _=>{
        check.style.display = 'block'
        if (input.value.indexOf('@')!==-1){
            check.style.display = 'none'
        }
    })
    input.addEventListener('focus', _=>{
        input.style.outline = '1px solid #f00'
        check.style.display = 'none'
    })

    