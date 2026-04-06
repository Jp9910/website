import emailIcon from '../assets/email32x32.png'
import phoneIcon from '../assets/phone.png'
import controllerIcon from '../assets/controller.png'
import webIcon from '../assets/web-dev.png'
import dataScienceIcon from '../assets/data-science.png'
import infrastructureIcon from '../assets/infrastructure.png'
import cybersecIcon from '../assets/ciberseguranca.png'
import mlIcon from '../assets/ml.png'
import hciIcon from '../assets/HCI.png'
import profilePic from '../assets/profile.jpg'
import linkedinIcon from '../assets/linkedin.png'

import frIcon from '../assets/france.png'
import brIcon from '../assets/brazil.png'
import spIcon from '../assets/spain.png'
import caIcon from '../assets/canada.png'
import mxIcon from '../assets/mexico.png'
import ptIcon from '../assets/portugal.png'
import usIcon from '../assets/usa.png'
import qcIcon from '../assets/quebec.png'
import { Link } from 'react-router'

function AboutMe() {
    return (
        <div id="pagina" className="mx-5 md:mx-15 lg:mx-30">
            <div id="resumo" className="flex flex-col items-center md:flex-row md:justify-center w-full h-1/2 mb-8 lg:mb-16">
                <img src={profilePic} alt="Foto de perfil" className="rounded-full w-48 h-48 md:mr-4" />
                <div className="flex-col w-full lg:w-2/3 space-4">
                    <p className="mb-6 lg:text-justify">
                        Hello! I'm João Paulo, a computer scientist with experience spanning various areas of computing, such as software development,
                        data science, artificial intelligence, and cybersecurity. I have experience in all stages of software development,
                        from algorithms to deployment. I am dedicated and passionate about creating high-quality solutions that generate
                        significant real-world value. <br></br>

                        Although most of my experience is in web development, I am motivated by roles that combine problem-solving, data,
                        security, and creativity.&nbsp; <Link to={"/portfolio"} className='text-blue-400'>My academic and personal projects</Link> encompass a wide range of modern technologies. I also
                        love collaborating in dynamic teams, always seeking to make a positive impact and grow professionally.
                    </p>
                </div>
            </div>

            <section id="whatido" className="mb-8 lg:mb-16">
                <h1 className="text-2xl mb-4 border-b border-gray-200 dark:border-gray-600">Professional Experience and Interests</h1>
                <div className="grid w-auto h-auto grid-cols-1 lg:grid-cols-2 place-content-stretch gap-x-20 gap-y-8 mx-6 my-2">

                    <div className="flex gap-4 w-auto">
                        <img src={webIcon} className="w-8 h-8" alt="icone web" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Web Development</h1>
                            <p className="lg:text-justify">
                                I have experience creating modern, scalable and responsive web applications.
                                I am not a Frontend or Backend Developer, much less a React Developer, Spring Boot Developer,
                                or any other specific framework, but rather a software developer with ample capacity
                                to learn quickly and apply my knowledge to develop effective solutions.

                                That said, I have experience with several frontend frameworks (React, Angular, Vue) and backend
                                frameworks (Node.js, Spring/Springboot, .Net, Laravel).
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={infrastructureIcon} className="w-8 h-8 row-span-3" alt="icone infraestrutura" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Infrastructure Analysis/Development</h1>
                            <p className="lg:text-justify">
                                I have experience in analyzing, designing, and implementing efficient and scalable IT infrastructures. My thesis comprehensively explored the modern development of distributed applications using microservices architecture, covering everything from basic architectural concepts to the use of tools for development, deployment, and monitoring. The project repository and the thesis are available <a className="text-blue-500" target="_blank" href="https://github.com/Jp9910/microservices_project/blob/master/TCC-Monografia-Parte-Escrita.pdf">here</a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={mlIcon} className="w-10 h-10" alt="icone machine learning" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Machine Learning</h1>
                            <p className="lg:text-justify">
                                (Under construction)
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={controllerIcon} className="w-8 h-8" alt="icone controle" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Game Development</h1>
                            <p className="lg:text-justify">
                                I've been passionate about games since I was a child and have modest experience creating games using Unity and Godot.
                                Currently, I'm exploring 3D game development with Godot, creating an independent horror game on my own, with the intention of releasing it on the itch.io platform when it's finished.
                            </p>
                        </div>
                    </div>


                    <div className="flex gap-4 w-auto">
                        <img src={dataScienceIcon} className="w-8 h-8" alt="icone dados" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Data Science/Analysis</h1>
                            <p className="lg:text-justify">
                                Data Science is an area that greatly interests me, especially exploratory analysis, statistical modeling, and results interpretation. Although I am still a beginner, I have already developed practical projects that involved everything from data preparation and visualization to model building and the creation of analytical data narratives.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={cybersecIcon} className="w-8 h-8" alt="icone cibersegurança" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Cybersecurity</h1>
                            <p className="lg:text-justify">
                                Cybersecurity is also an area that greatly interests me, especially vulnerability analysis and data security/privacy. I'm a beginner in this field, but I've already studied cryptography, authentication/access control, malware and software security, online security, network security, and data systems security/privacy. One of my academic projects explores the TOCTOU attack and implements a proof-of-concept system that demonstrates the attack, how it happens, and how the vulnerability can be fixed.
                                {/* Busco aplicar esse conhecimento de forma prática em pequenos projetos e laboratórios, explorando tópicos como autenticação segura, criptografia aplicada e análise de riscos em aplicações web. Minha meta é evoluir continuamente e construir uma base sólida que me permita atuar no desenvolvimento de sistemas mais seguros e na proteção de ambientes digitais. */}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 w-auto">
                        <img src={hciIcon} className="w-10 h-10" alt="icon human-computer interaction" />
                        <div className="flex-col">
                            <h1 className="text-lg font-bold">Human-Computer Interaction</h1>
                            <p className="lg:text-justify">
                                (Under construction)
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="linguas">
                <h1 className="text-2xl mb-4 border-b border-gray-200 dark:border-gray-600">
                    Languages
                </h1>
                <div className="mx-6 my-2">
                    <div className="flex-col justify-start align-middle-">
                        {/* <p className="text-md mx-2">🇫🇷 🇨🇦 French</p> */}
                        <div className="flex mb-4 gap-1.5">
                            <img src={qcIcon} className="w-8 h-8 row-span-3" alt="quebec flag icon" />
                            <img src={frIcon} className="w-8 h-8 row-span-3" alt="france flag icon" />
                            <p className="text-md mx-2"> Français - Intermediate </p>
                        </div>

                        <div className="flex mb-4 gap-1.5">
                            <img src={mxIcon} className="w-8 h-8 row-span-3" alt="mexico flag icon" />
                            <img src={spIcon} className="w-8 h-8 row-span-3" alt="spain flag icon" />
                            <p className="text-md mx-2"> Español - Intermediate </p>
                        </div>

                        <div className="flex mb-4 gap-1.5">
                            <img src={brIcon} className="w-8 h-8 row-span-3" alt="brazil flag icon" />
                            <img src={ptIcon} className="w-8 h-8 row-span-3" alt="portugal flag icon" />
                            <p className="text-md mx-2"> Português - Fluent </p>
                        </div>

                        <div className="flex mb-4 gap-1.5">
                            <img src={caIcon} className="w-8 h-8 row-span-3" alt="canada flag icon" />
                            <img src={usIcon} className="w-8 h-8 row-span-3" alt="usa flag icon" />
                            <p className="text-md mx-2"> English - Fluent </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contato">
                <h1 className="text-2xl mb-4 border-b border-gray-200 dark:border-gray-600">Contact</h1>
                <div className="mx-6 my-2">
                    <div className="flex-col justify-start align-middle-">
                        <div className="flex mb-4">
                            <img src={phoneIcon} className="w-8 h-8 row-span-3" alt="icone telefone" />
                            <p className="text-md mx-2"> +55 (13) 997558762</p>
                        </div>

                        <div className='flex mb-4'>
                            <a href="mailto:secundo.jp@gmail.com" className="" target="_blank" rel="noreferrer">
                                <img src={emailIcon} className="w-8 h-8 row-span-3" alt="icone email" />
                            </a>
                            <p className="text-md mx-2">secundo.jp@gmail.com</p>
                        </div>

                        <a href="https://www.linkedin.com/in/joao-paulo-secundo/" target="_blank" className="flex mb-4 text-xl">
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
