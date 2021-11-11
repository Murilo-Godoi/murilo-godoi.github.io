
let indexEdit = 0

let month = 1

const whatTable = (event) => {
    month = event.target.value
    updateScreen()
}

const getLocalStorage = (month) => JSON.parse(localStorage.getItem(`${month}`)) ?? []

const setLocalStorage = (despesas,month) => localStorage.setItem(`${month}`,JSON.stringify(despesas))

//botao para adicioar uma nova transação

const openAdd = () => {
    document.getElementById('addDespesa').classList.add('active')
    document.querySelector('.add-button').classList.add('inactive')
}    

const closeAdd = () => {
    clearFields()
    document.getElementById('addDespesa').classList.remove('active')
    document.querySelector('.add-button').classList.remove('inactive')
}



//CRUD

const createDespesa = (despesa) => {
    const ListDespesa = getLocalStorage(month)
    ListDespesa.push(despesa)
    setLocalStorage(ListDespesa,month)
}

const updateDespesa = (index, despesa) => {
    const ListDespesa = getLocalStorage(month)
    ListDespesa[index] = despesa
    setLocalStorage(ListDespesa,month)
}

const deleteDespesa = (index) => {
    const ListDespesa = getLocalStorage(month)
    ListDespesa.splice(index,1)
    setLocalStorage(ListDespesa,month)
}

//adicionando, editando e removendo transações

const saveDespesa = () => {
    const despesa = {
        description: document.getElementById('description').value,
        value: document.getElementById('amount').value * plusMinus()
    }
    createDespesa(despesa)
    updateScreen()
}

const plusMinus = () => {
    if (document.getElementById("despesa-ou-receita").value === 'despesa'){
        return -1
    }else{
        return 1
    }
}

const editDespesa  = (index) => {
    const despesa = {
        description: document.getElementById('description').value,
        value: document.getElementById('amount').value * plusMinus()
    }
    updateDespesa(index,despesa)
    updateScreen()
}

const updateTable = () => {
    const ListDespesa = getLocalStorage(month)
    clearTable()
    ListDespesa.forEach(createRow)
}

const createRow = (despesa, index) => {
    const newRow = document.createElement('tr')
    newRow.classList.add("row")
    if (despesa.value < 0){
        newRow.innerHTML = `
            <td data-index=${index} class='data'>${despesa.description}</td>
            <td class='data value'> - R$ ${despesa.value*(-1)}</td>
        `
    }else{
        newRow.innerHTML = `
            <td data-index=${index} class='data'>${despesa.description}</td>
            <td class='data value'> R$ ${despesa.value}</td>
        `
    }
    
    document.querySelector('#table>tbody').appendChild(newRow)
}

const clearTable = () => {
    const list = document.getElementById('tbody')
    while (list.firstChild){
        list.removeChild(list.lastChild)
    }
} 

const pressEnter = (event) => {
    if (event.key === 'Enter' && event.target.parentNode.className=='addDespesa active' && isValidFields()){
       saveDespesa()
       clearFields()
       closeAdd()
    }else if(event.key==='Enter' && event.target.parentNode.className==='editDespesa' && isValidFields()){
        editDespesa(indexEdit)
    }
}

const clearFields = () => {
    const field = document.querySelectorAll('.field')
    field.forEach(field => field.value ='')
}

const isValidFields = () => {
      if (document.getElementById("description").value != "" && document.getElementById("amount").value != ''){
          return true
      }else{
          alert("preencha todos os campos")
          return false
      }

}

const editRow = (event) => {
    const row = event.target.parentNode
    if (event.target.className == 'data' || event.target.className == 'data value' ){
        indexEdit = event.target.dataset.index
        row.innerHTML = `
            <td class="editDespesa">
                <input type="text" id="description" placeholder="Descrição" class="field edit">
                <input type="number" id="amount" placeholder="Valor" class="field edit">
            </td>
            <td class="editDespesa select"> 
                <select id="despesa-ou-receita">
                    <option value="despesa">Despesa</option>
                    <option value="receita" >Receita</option>
                </select>
                <input type="button" value="&lt;" class="back" data-index=${indexEdit}>
                <input type="button" value="x" class="button" data-index=${indexEdit}>
            </td>
        `
        document.querySelector('.editDespesa').addEventListener('keypress', pressEnter)
        document.querySelector('.select').addEventListener('keypress', pressEnter)
        document.querySelector('.button').addEventListener('click', deleteTransaction)
        document.querySelector('.back').addEventListener('click', updateScreen)


    }
}


//matematica

const transactionSum = () => {
    let positiveSum = 0
        negativeSum = 0
    const dataList = getLocalStorage(month)
    dataList.forEach( 
        element => {
            if (element.value > 0){ 
                positiveSum = positiveSum + element.value
            }else{
                negativeSum = negativeSum + element.value
            }   
        }
    )
    return [positiveSum, negativeSum]
    
}

const balance = (currentMonth) => {
    let i = 1
        sum = transactionSum()[0] + transactionSum()[1]
    const pastDataList = []
    while (i<currentMonth){
        lStorage = getLocalStorage(i)
        lStorage.forEach( item => pastDataList.push(item))
        i = i + 1
    }
    pastDataList.forEach(item => sum = sum + item.value)
    return sum
}






const updateSums = () => {
    const container = document.querySelector('.saldoDespesa')
    const values = transactionSum()
    container.innerHTML = `
    <div class="saldo"> <p> SALDO<br> R$ ${balance(month)}</p> </div>
    <div class="receita"> <p> Receitas <br> R$ ${values[0]}</p> </div>
    <div class="despesa"> <p> Despesas <br> R$ ${values[1]*(-1)}</p> </div>
    `
} 

const updateScreen = () => {
    updateSums()
    updateTable()
}

const deleteTransaction = (event) => {
    if (event.target.type === 'button'){
        deleteDespesa(event.target.dataset.index)
        updateScreen()
    }
}

const activateFinanceiro = (evento) => {
    if (evento.target.parentNode.dataset.index == 3){
        updateScreen()
        document.querySelector('#tbody').addEventListener('dblclick', editRow)
        document.getElementById('addTransaction').addEventListener('click', openAdd)
        document.getElementById('close-add').addEventListener('click', closeAdd)
        document.querySelector('.addDespesa').addEventListener('keypress', pressEnter)
        document.getElementById('month').addEventListener('click', whatTable)
    }
}


//evento

document.querySelector('.container').addEventListener('click',activateFinanceiro)

