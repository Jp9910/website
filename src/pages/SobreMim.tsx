import emailIcon from '../assets/email32x32.png'
import phoneIcon from '../assets/phone.png'
import controllerIcon from '../assets/controller.png'
import webIcon from '../assets/web-dev.png'
import dataScienceIcon from '../assets/data-science.png'
import infrastructureIcon from '../assets/infrastructure.png'
import cybersecIcon from '../assets/ciberseguranca.png'
import profilePic from '../assets/profile.jpg'
import linkedinIcon from '../assets/linkedin.png'
import { Link } from 'react-router'

function AboutMe() {
    return (
        <div id="pagina" className="mx-5 md:mx-15 lg:mx-30">
            <div id="resumo" className="flex flex-col items-center md:flex-row md:justify-center w-full h-1/2 mb-8 lg:mb-16">
                <img src={profilePic} alt="Foto de perfil" className="rounded-full w-48 h-48 md:mr-4" />
                <div className="flex-col w-full lg:w-2/3 space-4">
                    <p className="mb-6 lg:text-justify">
                        Olá! Sou João Paulo, um cientista da computação com conhecimentos abrangendo diversas áreas da computação, como 
                        desenvolvimento de software, ciência de dados, inteligência artificial e cibersegurança. Tenho experiência em 
                        todas as etapas do desenvolvimento de software moderno, desde algoritmos à implantação. Sou dedicado e apaixonado 
                        por criar soluções de alta qualidade que gerem grande valor real. <br></br>

                        Embora a maior parte da minha experiência seja em desenvolvimento web, sou motivado por funções que combinam 
                        resolução de problemas, dados, segurança e criatividade.&nbsp;
                        <Link to={"/portfolio"} className='text-blue-400'>Meus projetos acadêmicos e pessoais</Link> abrangem uma 
                        ampla gama de tecnologias modernas. Também adoro colaborar em equipes dinâmicas, sempre buscando causar um impacto 
                        positivo e crescer profissionalmente.
                    </p>
                </div>
            </div>

            <section id="whatido" className="mb-8 lg:mb-16">
                <h1 className="text-2xl mb-4 border-b border-gray-200 dark:border-gray-600">Experiência e Interesses</h1>
                <div className="grid w-auto h-auto grid-cols-1 lg:grid-cols-2 place-content-stretch gap-x-20 gap-y-8 mx-6 my-2">

                    <div className="flex gap-4 w-auto">
                        <img src={webIcon} className="w-8 h-8" alt="icone web" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Desenvolvimento Web</h1>
                            <p className="lg:text-justify">
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
                            <p className="lg:text-justify">
                                Tenho experiência em analisar, projetar e implementar infraestruturas de TI eficientes e escaláveis. Meu TCC explorou abrangentemente o desenvolvimento moderno de aplicações distribuídas utilizando a arquitetura de microsserviços, explorando desde conceitos básicos da arquitetura até a utilização de ferramentas para desenvolvimento, implantação e monitoramento. O repositório do projeto e a monografia estão disponíveis <a className="text-blue-500" target="_blank" href="https://github.com/Jp9910/microservices_project/blob/master/TCC-Monografia-Parte-Escrita.pdf">aqui</a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={controllerIcon} className="w-8 h-8" alt="icone controle" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Desenvolvimento de Jogos</h1>
                            <p className="lg:text-justify">
                                Sou apaixonado por jogos desde criança e tenho modesta experiência criando jogos usando múltiplas game engines.
                                Atualmente estou explorando o desenvolvimento de jogos 3D com Godot, criando sozinho um jogo de terror independente chamado "The Ascent", com previsão para lançar no início de 2026.
                            </p>
                        </div>
                    </div>


                    <div className="flex gap-4 w-auto">
                        <img src={dataScienceIcon} className="w-8 h-8" alt="icone dados" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Ciência/Análise de Dados</h1>
                            <p className="lg:text-justify">
                                Ciência de Dados é uma área que me instiga muito, especialmente análise exploratória, modelagem estatística e interpretação de resultados. Embora eu ainda seja iniciante, já desenvolvi projetos práticos que envolveram desde a preparação e visualização de dados até a construção de modelos e elaboração de narrativas analíticas de dados.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={cybersecIcon} className="w-8 h-8" alt="icone cibersegurança" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Cibersegurança</h1>
                            <p className="lg:text-justify">
                                Cibersegurança também é uma área que me instiga muito, especialmente análise de vulnerabilidades e segurança/privacidade de dados. Sou iniciante nessa área, mas já estudei criptografia, autenticação/controle de acesso, malwares e segurança de software, segurança online, segurança de redes e segurança/privacidade em sistemas de dados. Um dos meus trabalhos acadêmicos explora o ataque TOCTOU e implementa um sistema prova-de-conceito que demonstra o ataque, como ele acontece e como a vulnerabilidade pode ser consertada. 
                                {/* Busco aplicar esse conhecimento de forma prática em pequenos projetos e laboratórios, explorando tópicos como autenticação segura, criptografia aplicada e análise de riscos em aplicações web. Minha meta é evoluir continuamente e construir uma base sólida que me permita atuar no desenvolvimento de sistemas mais seguros e na proteção de ambientes digitais. */}
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
                            <p className="text-md mx-2"> +55 (13) 997558762</p>
                        </div>

                        <a href="mailto:secundo.jp@gmail.com" className="flex mb-4" target="_blank" rel="noreferrer">
                            <img src={emailIcon} className="w-8 h-8 row-span-3" alt="icone email" />
                            <p className="text-md mx-2">secundo.jp@gmail.com</p>
                        </a>

                        <a href="https://www.linkedin.com/in/joao-paulo-secundo/" className="flex mb-4 text-xl">
                            <img src={linkedinIcon} className="w-8 h-8 row-span-3" alt="icone linkedin" />
                            <p className="text-sm mx-2">linkedin.com/in/joao-paulo-secundo/</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe
