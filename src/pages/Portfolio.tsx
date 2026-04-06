import imgRelatorioUsabilidade from '../assets/relatorio-usabilidade.png'
import imgToctou from '../assets/toctou.png'
import imgMS from '../assets/microsservicos.png'
import imgMS2 from '../assets/microsservicos2.jpg'
// import imgHardhat from '../assets/hardhat.png'
import imgPowerBI from '../assets/relatorioDataAnalisys.png'
import imgSketchic from '../assets/sketchic.png'
import imgArtigoML from '../assets/artigo-ml.png'
import imgMapeamento from '../assets/artigo-mapeamento.png'

function Portfolio() {
    return (
        <div className="flex flex-col items-center -mt-5">
            <div className='flex flex-row'>
                <h1 className="text-3xl mb-4">Portfolio</h1>
            </div>
            <hr className="w-124 mx-auto h-px my-12 bg-neutral-400 border-0"></hr>

            <div className="min-w-150 max-w-2/3">

                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgPowerBI} alt="screenshot power bi data analysis"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Data analysis for national health insurance operators</h2>
                        <p className="ml-8"><b>Type:</b> Project for job selection process</p>
                        <p className="ml-8"><b>Description: </b>Conducted a data narrative and market intelligence analysis using data from health insurance operators. Used PowerBI to create various indicators, metrics and graphs to allow for an in-depth and time-based analysis. Trained a SARIMA forecasting model with the data. Documented findings in a 9-page technical report.</p>
                        <p className="ml-8"><b>Tools Used:</b> PowerBI, Python</p>
                    </div>
                </div>

                <hr className='mx-20 my-12'/>

                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgRelatorioUsabilidade} alt="screenshot relatorio usabilidade"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Usability Evaluation of the Educational Game “A lenda do quinto sol”</h2>
                        <p className="ml-8"><b>Type:</b> Academic Project</p>
                        <p className="ml-8"><b>Description: </b>Conducted a usability evaluation of the game A lenda do quinto sol and its associated website using Nielsen’s usability heuristics. All key interactions were thoroughly tested and many issues were identified and classified according to their nature, degree and violated heuristic(s). Provided detailed explanations and redesign recommendations in a 47-page technical report.</p>
                    </div>
                </div>

                <hr className='mx-20 my-12'/>


                <div className="flex flex-row gap-8">
                    <div className='flex flex-col space-y-6 w-max'>
                        <img className="w-max h-48" src={imgMS} alt="diagrama microsservicos"></img>
                        <img className="w-max h-48" src={imgMS2} alt="screenshot app microsservicos"></img>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Development of applications with microservices architecture</h2>
                        <p className="ml-8"><b>Type:</b> Undergraduate Thesis</p>
                        <p className="ml-8"><b>Supervisor:</b> Admilson de Ribamar Lima Ribeiro</p>
                        <p className="ml-8"><b>Description: </b>Explored the microservices architecture, related works, common practices, and tools used in the development of such applications, through extensive literature review. An e-commerce web platform using this architecture was developed.</p>
                        <p className="ml-8"><b>Tools Used:</b> LaTeX, Java, SpringBoot, TypeScript, Node.js, Express, C#, .NET, ReactJS, Angular, Nginx, SQL, PostgreSQL, MongoDB, Memcached, GitHub Actions, RabbitMQ, Docker, Kubernetes, Prometheus, Grafana, Loki.</p>
                        <div>
                            <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/microservices_project/blob/master/TCC-Monografia-Parte-Escrita.pdf">[Link to Thesis]</a>
                            <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/microservices_project">[Link to Project Repository]</a>
                        </div>
                    </div>
                </div>

                <hr className='mx-20 my-12'/>


                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgToctou} alt="screenshot toctou report"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">TOCTOU Attack Analysis</h2>
                        <p className="ml-8"><b>Type:</b> Academic Project</p>
                        <p className="ml-8"><b>Description: </b>Explored the TOCTOU attack and implemented a proof-of-concept system that demonstrates the attack, how it happens and how the vulnerability can be mitigated. A short 3-page report was written on it using a conference-style paper.</p>
                        <p className="ml-8"><b>Tools Used:</b> Python, Shell Scripting</p>
                    </div>
                </div>

                <hr className='mx-20 my-12'/>


                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgSketchic} alt="screenshot drawing app"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Sketchic - drawing app with AI prediction</h2>
                        <p className="ml-8"><b>Type:</b> Academic Project</p>
                        <p className="ml-8"><b>Description: </b>Developed a progressive web application (PWA) with a custom fine-tuned machine learning model (MobileNetV2) trained to classify drawings and predict which character is being drawn.</p>
                        <p className="ml-8"><b>Tools Used:</b> TensorFlow, Python, JavaScript</p>
                        <div>
                            <a className="ml-8 text-blue-400" target="_blank" href="https://sketchic.netlify.app/">[Link to App]</a>
                            <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/Sketchic">[Link to Repository]</a>
                        </div>
                    </div>
                </div>

                <hr className='mx-20 my-12'/>


                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgArtigoML} alt="screenshot article"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Comparison of machine learning techniques and their outcomes on accuracy</h2>
                        <p className="ml-8"><b>Type:</b> Academic Project</p>
                        <p className="ml-8"><b>Description: </b>Conducted a comparative study of multiple machine learning techniques using a hiring-process dataset to predict candidate approval. Various preprocessing techniques and training configurations were applied. Models were then compared using statistical tests to verify significance of performance differences. The best model was obtained from training after preprocessing the dataset with PCA, achieving a validation accuracy of 90.74%. An 11-page report was written in a conference-style paper, with the intent of attempting a publication.</p>
                        <p className="ml-8"><b>Tools Used:</b> TensorFlow, Python</p>
                    </div>
                </div>

                <hr className='mx-20 my-12'/>


                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">PRODAP - Program to Support the Development of Professional Learning</h2>
                    <p className="ml-8"><b>Type:</b> University Extension Project (Federal University of Sergipe)</p>
                    <p className="ml-8"><b>Description: </b>Participated in the development of the Application AdminDEP, used to manage academic departments, and provided support for the previously used application AdminDCOMP.</p>
                    <p className="ml-8"><b>Tools Used:</b> Laravel, Vue.js, MariaDB, Docker</p>
                </div>

                <hr className='mx-20 my-12'/>


                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgMapeamento} alt="screenshot article"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Systematic Mapping of State-of-the-Art Research Articles and Prior Art Patents on the Use of
Mobile Technologies and Tools for Customer Loyalty</h2>
                        <p className="ml-8"><b>Type:</b> Academic Project</p>
                        <p className="ml-8"><b>Description: </b> Conducted a 19-page systematic mapping on the use of mobile technologies and tools for customer loyalty. After establishing the research questions, search strings and selection criteria for both state of the art and prior art, the search was conducted on different academic databases. 194 Articles and 75 patents were mapped, of which 21 and 22 were respectively selected. The results show that branded apps is the most used method and gamification is the most used technique. Causes, implications and improvements of each method and technique are discussed</p>
                    </div>
                </div>

                <hr className='mx-20 my-12'/>

            </div>
        </div>
    )
}

export default Portfolio