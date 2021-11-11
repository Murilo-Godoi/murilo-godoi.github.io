// arquivo JS contendo os códigos dos sites do portfólio para faciliar o entendimento do arquivo main

const dados = [
    { 'img':'img/landing.png', 'title':'Landing Page','code':`
        <div class="all">
            <div class="flex-container" id="section-1">
                <div class="background"></div>
                <div class="header">
                    <h1>Welcome to Acme Web Solutions</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>
                    <a href="#section-2" class="botao">Read More</a>
                </div>
            </div>

            <section class="flex-container" id="section-2">
                <div>
                    <h2>Web & Application Development</h2>
                    <div class="quebra-texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde officiis magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus. Perferendis officiis deserunt velit voluptas nobis sequi animi totam, accusantium, ex eius quia, natus quo?</p>
                    </div>
                </div>
            </section>

            <section id="section-3">
                <div class="flex-container">
                    <div class="serviços">
                        <img src="/img/site-4/webdevelopment.png" alt="">
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                    </div>
                        
                    <div class="serviços">
                        <img src="/img/site-4/mobile applications.png" alt="">
                        <h3>Mobile Aplications</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                    </div>
                        
                    <div class="serviços">
                        <img src="/img/site-4/techmarketing.png" alt="">
                        <h3>Tech Marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem</p>
                    </div>
                </div>
            </section>

            <section class="flex-container" id="section-4">
                <h2>We handle all of your digital needs</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam rerum vel earum error fugiat cupiditate, dolore eius! Minus, explicabo.</p>
            </section>

            <section class="flex-container" id="section-5">
                <div id="contato">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et voluptas obcaecati unde fuga.</p>
                </div>

                <div id="sobre">
                    <h2>About Our Company</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum porro deserunt, deleniti, quae facere repudiandae, officiis est exercitationem nobis iusto doloremque! Soluta excepturi in aut suscipit amet temporibus quo?</p>
                </div>
            </section>

            <footer class="flex-container">
                <div>
                    <p>Acme Web Soluctions</p>
                </div>
                
                <div>
                    <p>Projected by Murilo Godoi</p>
                </div>
                
            </footer>
        </div>
        `,'info':'Meu primeiro projeto pessoal desenvolvido com HTML e CSS'
    },
    { 'img':'img/landing-2.png', 'title':'Landing Page','code':`
        <nav class="nav">
            <a href="#">Ricardo Fotos</a>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#serviços">Serviços</a>
                    <ul>
                        <li><a href="#Fotografia">Fotografia</a></li>
                        <li><a href="#Edição de vídeos">Edição de vídeos</a></li>
                        <li><a href="#Captação de imagens">Captação de imagens</a></li>
                        <li><a href="#Tratamento de imagem">Tratamento de imagem</a></li>
                    </ul>
                </li>
                <li><a href="#fotos">Fotos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>

        <header id="topo" class="topo">
            <h1>Fotógrafo Profissional</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a href="#serviços" class="botao">Ver Mais</a>
        </header>

        <section id="sobre" class="sobre">
            <h2>Sobre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet dictum neque. Aliquam placerat eleifend purus ac volutpat. Nullam interdum eleifend dapibus. Cras quis aliquam leo.</p>
            <a href="#contato" class="botao">Contrate Agora</a>
        </section>

        <section id="serviços" class="serviços">
            <h2>Serviços</h2>
            
            <div id="Fotografia">
                <img src=img/site-1/p1.png alt="Camera">
                <h3>Fotografia</h3>
                <p>impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos</p>
            </div>

            <div id="Edição de vídeos">
                <img src=img/site-1/p2.png alt="Filme">
                <h3>Edição de vídeos</h3>
                <p>impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos</p>
            </div>

            <div id="Captação de imagens">
                <img src=img/site-1/p3.png alt="Videoplayer">
                <h3>Captação de imagens</h3>
                <p>impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos</p>
            </div>

            <div id="Tratamento de imagem">
                <img src=img/site-1/p4.png alt="seila">
                <h3>Tratamento de imagem</h3>
                <p>impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos</p>
            </div>

        </section>

        <section>
            <h2>Fotos</h2>
            <div class="fotos"  id="fotos" >
                <img src=img/site-1/ceu.jpg data-index="1">
                <img src=img/site-1/grama.jpg data-index="2">
                <img src=img/site-1/montanha.jpg data-index="3">
                <img src=img/site-1/arvores.jpg data-index="4">
                <img src=img/site-1/ponte.jpg data-index="5">
                <img src=img/site-1/mar.jpg data-index="6">
            </div>
            
        </section>

        <section id="contato" class="contato">
            <h2>Contato</h2>

            <div>
                <img src=img/site-1/tel.png alt="telefone">
                <p><a href="tel:17992332475">Telefone</a></p>
            </div>

            <div>
                <img src=img/site-1/mail.png alt="email">
                <p><a href="mailto:murilo.godoi.2000@gmail.com">Email</a></p>
            </div>

        </section>

        <footer>
            <a href="#topo">VOLTAR</a>
            <p>Desenvolvido por Murilo Godoi</p>
        </footer>

        <div class="pop-up" id="pop-up">
            <div class="pop-content">
                <button id="close">X</button>
                <h2>Dando um zoom ...</h2>
                <div class="img-container" id="img-container"></div>
            </div>
            
        </div>
        <script src=""></script>
        `,
    'info':'Landing page estática desenvolvida para praticar HTML e CSS, totalmente responsiva'
    },
    { 'img':'img/formulario.png', 'title':'Formulário','code':`
        <div class="background">
            <div class="formulario">
                <div class="header">
                    <h1>Pesquisa sobre enchentes no centro de São Carlos</h1>
                    <p id="subtitulo">Enquente direcionada aos proprietários de comércios localizados na região da Bacia do Gregório, São Carlos - SP</p>
                </div>
                <form id="forms">
                    <fieldset>
                        <div class="campo">
                            <label id="label-nome" for="nome">Nome</label>
                            <input type="text" name="nome" id="nome" class="entrada" placeholder="Nome e sobrenome" required>
                        </div>

                        <div class="campo">
                            <label id="label-email" for="nome">Email</label>
                            <input type="email" name="email" id="email" class="entrada" placeholder="xxxxx@xxx.com">
                        </div>

                        <div class="campo">
                            <label id="label-telefone" for="nome">Telefone</label>
                            <input type="text" name="telefone" id="telefone" class="entrada" placeholder="(XX) XXXXX-XXXX" required>
                        </div>

                        <div class="campo">
                            <label for="idade">Faixa etária</label>
                            <select id="idade"  required>
                                <option selected disabled value="">Selecione</option>
                                <option >Abaixo de 30 anos</option>
                                <option >30 - 45 anos</option>
                                <option >Acima de 45 anos</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div class="campo">
                            <label id="label-1" for="setor">Qual tipo de estabelecimento comercial?</label>
                            <input type="text" name="setor" id="setor" class="entrada" required>
                        </div>

                        <div class="campo">
                            <label>Já sofreu com enchentes?</label>
                            <label>
                                <input type="radio" name="enchentes" value="sim" class="input-radio" id="yes">Sim
                            </label>
                            <label>
                                <input type="radio" name="enchentes" value="nao" class="input-radio" id="no" checked>Não
                            </label>
                        </div>

                        <div class="campo" id="condicional-quest-1">
                            <label for="qnt_vezes">Quantas vezes?</label>
                            <input type="number" name="qnt_vezes" id="qnt_vezes" class="entrada">
                        </div>

                        <div class="campo" id="condicional-quest-2">
                            <label for="descricao">Descreva o pior caso.</label>
                            <textarea rows="6" id="descricao" name="descricao" class="entrada maior"></textarea>
                        </div>

                        <div class="campo" id="botao">
                            <button class="botao" type="submit">Concluido</button>
                        </div>

                    </fieldset>

                </form>

            </div>
        </div>

        `,'info':'Formulário desenvolvido para praticar HTML e CSS. Algumas perguntas condicionais aparecem se a opção "sim" for marcada na última pergunta '
    },
    { 'img':'img/financeiro.png', 'title':'Controle financeiro','code':`
        <h1>Controle Financeiro</h1>    
        <main>
            <div class="saldoDespesa">
                
            </div>

            <select id="month">
                <option value="1">Janeiro</option>
                <option value="2" >Fevereiro</option>
                <option value="3" >Março</option>
                <option value="4" >Abril</option>
                <option value="5" >Maio</option>
                <option value="6" >Junho</option>
                <option value="7" >Julho</option>
                <option value="8" >Agosto</option>
                <option value="9" >Setembro</option>
                <option value="10" >Outubro</option>
                <option value="11" >Novembro</option>
                <option value="12" >Dezembro</option>
            </select>

            <div class="calculadora">
                <h3>Transações Realizadas</h3>
                
                <table id="table">
                    <thead><tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr></thead>
                    <tbody id="tbody"></tbody>
                </table>
            </div>

            <div class="add-button">
                <button type="button" id="addTransaction">Adicionar nova transação</button>
            </div>

            <div>
                <div class="addDespesa" id="addDespesa">
                    <input type="text" id="description" placeholder="Descrição" class="field">
                    <input type="number" id="amount" placeholder="Valor" class="field">
                    <select id="despesa-ou-receita">
                        <option value="despesa">Despesa</option>
                        <option value="receita" >Receita</option>
                    </select>
                    <input type="button" value="&lt;" class="back" id="close-add">
                </div>

            </div>

            <div class="modal">

            </div>

            
        </main>
        `,'info':'Essa aplicação foi desenvolvida para aprender as operaçãoes de um CRUD (create, read, update, delete) em Javascript. Para cadastrar um nova transação, digite a descrição e o valor, em seguida pressione ENTER. Para editar ou excluir uma transação, clique duas vezes sobre ela. Os dados são armazenados no local storage de seu navegador, ficando salvos para futuros acessos.'
    },
    { 'img':'img/calculadora.png', 'title':'Calculadora de juros compostos','code':`
        <div class="calculadora">
            <div class="titulo"><h1>Calculadora - Juros Compostos</h1></div>

            <div class="linha"></div>
            
            <div class="row">
                <div class="input">
                    <label for="Valor inicial">Valor inicial:</label>
                    <input type="number" id="valor-inicial">
                </div>
        
                <div class="input">
                    <label for="Valor mensal">Valor mensal:</label>
                    <input type="number" id="valor-mensal">
                </div>
            </div>

            
            <div class="row">
                <div class="input">
                    <label for="Taxa de juros">Taxa de juros:</label>
                    <input type="number" id="taxa">
                </div>

                <div class="input">
                    <label for="Período">Período:</label>
                    <input type="number" id="periodo">
                </div>
            </div>

            <a id="calcular">Calcular</a>

            <div class="resultado" id="resultado"></div>
        </div>
        `,'info':' Meu primeiro projeto com javascript! Calculadora de juros compostos com aportes mensais. A taxa de juros e o perído devem estar na mesma unidade de tempo'
    },
]