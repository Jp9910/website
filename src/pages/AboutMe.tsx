import emailIcon from '../assets/email32x32.png'
import phoneIcon from '../assets/phone.png'
import controllerIcon from '../assets/controller.png'
import webIcon from '../assets/web-dev.png'
import dataScienceIcon from '../assets/data-science.png'
import infrastructureIcon from '../assets/infrastructure.png'
import profilePic from '../assets/profile.jpg'
import linkedinIcon from '../assets/linkedin.png'

function AboutMeEnglish() {
    return (
        <div id="pagina" className="mx-30">
            <div id="resumo" className="flex justify-center w-full h-1/2 mb-20">
                <img src={profilePic} alt="Foto de perfil" className="rounded-full w-64 h-64 mr-4" />
                <div className="flex-col w-1/3 space-4">
                    <p className="mb-6">
                        Olá! Sou João Paulo, um cientista da computação com conhecimentos abrangendo diversas áreas da computação, como desenvolvimento de software, ciência de dados, inteligência artificial e redes de computadores.
                        Tenho experiência em todas as etapas do desenvolvimento de software moderno, desde algoritmos à implantação. Sou dedicado e apaixonado por criar soluções de alta qualidade que agrade ao usuário ou stakeholder. 
                        Também gosto muito de colaborar em equipes dinâmicas, sempre buscando causar um impacto positivo e crescer profissionalmente.
                    </p>
                    {/* <BotaoEstilizado>Currículo</BotaoEstilizado>
                    <BotaoEstilizado>Contato</BotaoEstilizado> */}
                </div>
            </div>

            <section id="whatido" className="">
                <h1 className="text-2xl mb-4 border-b border-gray-200 dark:border-gray-600">O que eu faço</h1>
                <div className="grid w-auto h-auto grid-cols-2 place-content-stretch gap-5 mx-6 my-2">

                    <div className="flex gap-4 w-auto">
                        <img src={webIcon} className="w-8 h-8" alt="icone web" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Desenvolvimento Web</h1>
                            <p className="">
                                Tenho experiência em criar aplicações web modernas e responsivas. 
                                Não sou Desenvolvedor Frontend ou Backend, e muito menos Desenvolvedor React, Desenvolvedor Springboot, ou qualquer outro framework específico, mas sim um desenvolvedor de <b>software</b> com plena capacidade de aprender rapidamente e aplicar meus conhecimentos para desenvolver soluções eficazes.
                                Dito isso, tenho experiência com diversos frameworks frontend (React, Angular, Vue) e backend (Node.js, Spring/Springboot, .Net, Laravel).
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={infrastructureIcon} className="w-8 h-8 row-span-3" alt="icone infraestrutura" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Análise/Desenvolvimento de Infraestrutura</h1>
                            <p className="">
                                Tenho experiência em analisar, projetar e implementar infraestruturas de TI eficientes e escaláveis. Meu TCC foca no desenvolvimento de aplicações distribuídas utilizando a arquitetura de microsserviços, explorando desde conceitos básicos da arquitetura até a utilização de ferramentas para desenvolvimento, implantação e monitoramento. O repositório do projeto e a monografia estão disponíveis para leitura <a className="text-blue-500" target="_blank" href="https://github.com/Jp9910/microservices_project/blob/master/TCC-Monografia-Parte-Escrita.pdf">aqui</a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={controllerIcon} className="w-8 h-8" alt="icone controle" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Desenvolvimento de Jogos</h1>
                            <p className="">
                                Sou apaixonado por jogos desde criança e tenho modesta experiência criando jogos usando múltiplas game engines.
                                Atualmente estou explorando o desenvolvimento de jogos 3D com Godot, criando sozinho um jogo de terror independente chamado "The Ascent", com previsão para lançar no início de 2026.
                            </p>
                        </div>
                    </div>


                    <div className="flex gap-4 w-auto">
                        <img src={dataScienceIcon} className="w-8 h-8" alt="icone dados" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Ciência/Análise de Dados</h1>
                            <p className="">
                                Em construção.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="contato">
                <h1 className="text-2xl mb-4 border-b border-gray-200 dark:border-gray-600">Contato</h1>
                <div className="mx-6 my-2">
                    <div className="flex-col justify-start align-middle-">
                        <div className="flex mb-4">
                            <img src={phoneIcon} className="w-8 h-8 row-span-3" alt="icone telefone" />
                            <p className="text-xl mx-2"> +55 (13) 997558762</p>
                        </div>

                        <a href="mailto:secundo.jp@gmail.com" className="flex mb-4" target="_blank" rel="noreferrer">
                            <img src={emailIcon} className="w-8 h-8 row-span-3" alt="icone email" />
                            <p className="text-xl mx-2">secundo.jp@gmail.com</p>
                        </a>

                        <a href="https://www.linkedin.com/in/joao-paulo-secundo/" className="flex mb-4 text-xl">
                            <img src={linkedinIcon} className="w-8 h-8 row-span-3" alt="icone linkedin" />
                            <p className="text-xl mx-2">linkedin.com/in/joao-paulo-secundo/</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMeEnglish
