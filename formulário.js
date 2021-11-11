
const activeCondicional = () =>  {
    document.getElementById("condicional-quest-1").classList.add("active")
    document.getElementById("condicional-quest-2").classList.add("active")
}

const inactiveCondicional = () =>  {
    document.getElementById("condicional-quest-1").classList.remove("active")
    document.getElementById("condicional-quest-2").classList.remove("active")
}

const activateForms = (evento) => {
    if (evento.target.parentNode.dataset.index == 2){
        document.getElementById("yes").addEventListener('click',activeCondicional)
        document.getElementById("no").addEventListener('click',inactiveCondicional)
    }

}


document.querySelector('.container').addEventListener('click',activateForms)
