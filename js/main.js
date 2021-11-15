//escrever o nome no cabeçalho
const typeWriter = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    elemento.classList.remove('inactive')
    textoArray.forEach( (letter, i) => {
        setTimeout( () => elemento.innerHTML += letter , 75* i );
    });
}

//criar a lista de itens do portfolio
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

//scroll suave para uma posição da pagina

const menuListener = () => {
    document.querySelectorAll('.menu a[href^="#"]').forEach(item => {
        item.addEventListener('click',scrollToId)
    })
}

function scrollToId(evento) {
    evento.preventDefault()
    const to = position(evento.target) - 80
    scrollTo(to)
}

function position(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop
}

function scrollTo (position){
    window.scroll({
        top: position, behavior:"smooth"
    })
}

// avançar e voltar os itens do portfolio
const next = () => {
    let itens = document.querySelectorAll('.item-portfolio');
    mainContainer.appendChild(itens[0]);
    itens = document.querySelectorAll('.item-portfolio');
}

const previous = () => {
    let itens = document.querySelectorAll('.item-portfolio');
    const lastItem = itens[itens.length - 1];
    mainContainer.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll('.item-portfolio');
}


// abrir e fechar pop-up com os sites do formulário
const openPopUp = () => document.getElementById('pop-up').classList.add('active')

const closePopUp = () => {
    document.getElementById('site').classList.remove('small')
    document.getElementById('pop-up').classList.remove('active')
    linkRemover(whichSite)
}

// carregar as informações contidas no pop-up
const loadPopUp = (evento) => {
    whichSite = evento.target.parentNode.dataset.index
    document.getElementById('info-icon').dataset.info = `${dados[whichSite].info}`
    if(whichSite){
        document.getElementById('site').innerHTML = `${dados[whichSite].code}`
        openPopUp()
        linkLoader(evento.target.parentNode.dataset.index)
    }
    
}

// inserir e remover uma tag <link> com a folha de estilo certa para cada site do portfólio 
const linkLoader = (index) =>{
    const headID = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `css/site-${index}.css`;
    link.id = `link-${index}`;
    headID.appendChild(link);
}

const linkRemover = (index) => {
    const link = document.getElementById(`link-${index}`);
    link.parentNode.removeChild(link)
}





// variavel global que define o container onde os itens do portfolio ficarao
const mainContainer = document.querySelector('.container')

// chamadas de funções
loadItems(dados,mainContainer)
menuListener()
typeWriter(document.querySelector('#name'))
setTimeout( () => typeWriter(document.querySelector('#subtitle')),1000)

// eventos de avançar ou voltar itens do portfolio
document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next);


//variavel global que recebe o indice do  ultimo site aberto do portfolio
let whichSite = 0

// eventos de abrir e fechar o pop-up do portfolio
document.querySelector('.container').addEventListener('click',loadPopUp)
document.getElementById('close').addEventListener('click',closePopUp)


