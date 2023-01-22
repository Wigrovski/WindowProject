export const calc = () => {
    const select = document.querySelectorAll('.form-calc')
    const calcType = document.getElementById('calc-type')
    const calcMaterial = document.getElementById('calc-type-material')
    const calcInput = document.getElementById('calc-input')
    const calcTotal = document.getElementById('calc-total')


    const countCalc = () => {
        let totalValue = 0
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value
        
        const calcInputValue = calcInput.value
        totalValue = calcTypeValue * calcMaterialValue * calcInputValue
        calcTotal.value = Math.round(totalValue)

        
        
    }

    select.forEach((item) => {
        item.addEventListener('input', () => {
            countCalc()
        })
    })
    
}
