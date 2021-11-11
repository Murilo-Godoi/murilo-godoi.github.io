const typeWriter = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    elemento.classList.remove('inactive')
    textoArray.forEach( (letter, i) => {
        setTimeout( () => elemento.innerHTML += letter , 75* i );
    });
}

const dados = [
    { 'img':'img/landing.png', 'title':'Landing Page',},
    { 'img':'img/landing-2.png', 'title':'Landing Page',},
    { 'img':'img/formulario.png', 'title':'Formulário',},
    { 'img':'img/financeiro.png', 'title':'Controle financeiro',},
    { 'img':'img/calculadora.png', 'title':'Calculadora de juros compostos',},
]

const loadItems = (dados, container) => {
    dados.forEach( (dados,index) => {
        container.innerHTML += `
        <div class="item-portfolio" data-index=${index}>
            <img src="${dados.img}">
            <div class="description" data-index=${index}>
                <h2>${dados.title}</h2>
            </div>   
        </div>
        `
    })
}


const container = document.querySelector('.container')

loadItems(dados,container)


let itens = document.querySelectorAll('.item-portfolio');

const next = () => {
    container.appendChild(itens[0]);
    itens = document.querySelectorAll('.item-portfolio');
}

const previous = () => {
    const lastItem = itens[itens.length - 1];
    container.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll('.item-portfolio');
}



document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next);




// eventos
typeWriter(document.querySelector('#name'))
setTimeout( () => typeWriter(document.querySelector('#subtitle')),1000)




