const typeWriter = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    elemento.classList.remove('inactive')
    textoArray.forEach( (letter, i) => {
        setTimeout( () => elemento.innerHTML += letter , 75* i );
    });
}

const dados = [
    { 'img':'img/landing-2.png', 'title':'Landing Page', 'description':'Landing page responsiva desenvolvida em HTML e CSS'},
    { 'img':'img/financeiro.png', 'title':'Controle financeiro', 'description':'CRUD para controle financeiro desenvolvido em Javascript'},
    { 'img':'img/formulario.png', 'title':'Formulário', 'description':'Formulário desenvolvido em HTML e CSS'},
    { 'img':'img/landing.png', 'title':'Landing Page', 'description':'Site desenvolvido em HTML e CSS, totalmente responsivo'},
    { 'img':'img/calculadora.png', 'title':'Calculadora de juros compostos', 'description':'Calculadora em Javascript para cálculo de juros compostos com aportes mentais'},
]

const loadItems = (dados, container) => {
    dados.forEach( dados => {
        container.innerHTML += `
        <div class="item-portfolio">
            <img src="${dados.img}">
            <div class="description">
                <h2>${dados.title}</h2>
                <p>${dados.description}</p>
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



