import gh from '../assets/github.png'
import li from '../assets/linkedin.png'
import email from '../assets/email32x32.png'

function Rodape () {
    return (
        <footer className="flex bottom-0 w-full bg-white dark:bg-gray-800 justify-between px-5 mt-3 items-center border-t border-gray-200 dark:border-gray-600">
            <section className='self-center mt-3'>
                <ul>
                    <div className="flex justify-center space-x-5">
                        <li className="">
                            <a href="https://www.github.com/jp9910" target="_blank" rel="noreferrer">
                                <img src={gh} alt="GitHub logo"/>
                            </a>
                        </li>
                        <li className="">
                            <a href="https://www.linkedin.com/in/joao-paulo-secundo/" target="_blank" rel="noreferrer">
                                <img src={li} alt="Linkedin Logo"/>
                            </a>
                        </li>
                        <li className="">
                            <a href="mailto:secundo.jp@gmail.com" target="_blank" rel="noreferrer">
                                <img src={email} alt="Send Email Icon"/>
                            </a>
                        </li>
                    </div>
                </ul>
            </section>
            <section className='flex self-center'>
                <p className="mr-1">© João Paulo Secundo, 2025 |</p>
                <a href="#section-navbar" className="flex gap-2">
                    Back to Top
                    <img src="src/assets/up-arrow.svg" alt="arrow up" className="flex-1 w-5 h-5 mt-1"/>
                </a>
            </section>
        </footer>
    )
}

export default Rodape
