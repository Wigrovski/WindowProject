export const sendForm = ({formId}) => {
    const form = document.getElementById(formId)
    const calcTotal = document.getElementById('calc-total')
    const validate = (list) => {
        let success
        list.forEach((input) => {
            if (
                ((input.name === "fio") && (input.value.length < 2)) ||
                ((input.name === "phone") && ((input.value.length < 12)))) {
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
        const formData = new FormData(form)
        const formBody = {}
        formBody.price = formBody.price = calcTotal.value
        console.log(formBody);

        formData.forEach((val, key) => {
            if(val.length != 0) {
                formBody[key] = val
                
            }
        })
        if (validate(formElement)) {
            sendData(formBody).then(data => {
                formElement.forEach(input => {
                    input.value = ''
                })
                console.log(data);
            })
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