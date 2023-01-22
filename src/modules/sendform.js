export const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо наш менеджер свяжется с вами'
    
    const validate = (list) => {
        let success = true
        list.forEach((input) => {
            if (
                ((input.name === "fio") && (input.value.length < 2)) ||
                ((input.name === "phone") && (input.value.length < 11))) {
                input.style.border = "1px solid red";
                setTimeout(() => {
                    input.style.border = " 1px solid #dfdfdf"
                }, 5000)
                success = false
            }
        })
        return success
    }

    const sendData =  (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        
    }

    const submitForm = () => {
        const formElement = form.querySelectorAll('.form-control')
        const calcTotal = document.getElementById('calc-total')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            if(val.length != 0) {
                formBody[key] = val
                
            }
        }
        )
        
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block' && element === null) {
                    formBody[elem.id] = ''
            } else if (elem.type === 'block' && element !== null) {
                    formBody[elem.id] = element.value
            }
            else if (elem.type === 'input' && element !== null) {
                if (element.value !== '0') {
                    formBody[elem.id] = element.value
                }
            } 
        }) 

        if (validate(formElement)) {
            sendData(formBody).then((data) => {
                statusBlock.style.color = '#546a76'
                statusBlock.textContent = successText
                formElement.forEach(input => {
                    input.value = ''
                })
            })
            .catch ((error) => {
                statusBlock.style.color = '#546a76'
                statusBlock.textContent = errorText
            })
        } else { 
            alert('Данные не верны')
            statusBlock.textContent = errorText
        }

    }

    try {
        if(!form) {
            throw new Error('Форма отсутствует')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
            
        })
    } catch(error) {
        console.log(error.message);

    }
}