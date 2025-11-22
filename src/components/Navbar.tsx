// https://flowbite.com/docs/components/navbar/

import NavbarSpacing from "./NavbarSpacing";
import { Link, useLocation } from "react-router";

function NavBar() {

    // const url = window.location.href.split("/")
    // const currentLocation = url[url.length-1] // rota "/" resultará em ""
    // console.log(currentLocation)

    const localUrl = useLocation()

    /**
     * Recarregar componente apenas 1 vez usando useRef:
     * const precisaCarregarUsuarioRef = useRef(true)
     * 
     * useEffect(() => {
     *     console.log("Carregando usuário a partir do token")
     *     if (precisaCarregarUsuarioRef.current) {
     *         usuarioContext.pegarInformacoesDoToken()
     *         precisaCarregarUsuarioRef.current = false
     *     }
     * }, [usuarioContext])
     */

    return (
        <section id="section-navbar">
            <nav className="bg-white dark:bg-gray-800 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <section className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="src/assets/letraJ.png" className="h-8" alt="PFP" rounded-sm /> */}

                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">JS</span>
                        </div>

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">João Secundo</span>
                    </Link>
                    <section className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <Link to="/" id="navbar-link-home" 
                                    className={`${localUrl.pathname==="/" ? "md:text-blue-700 md:dark:text-blue-500" : ""}
                                    block py-2 px-3 rounded-sm md:p-0 
                                    md:hover:text-blue-700
                                    md:bg-transparent text-gray-900 dark:text-white`} 
                                >
                                    Sobre Mim
                                </Link>
                            </li>
                            <li>
                                <Link to="/resume" id="navbar-link-resume"
                                    className={`${localUrl.pathname==="/resume" ? "md:text-blue-700 md:dark:text-blue-500" : ""}
                                    block py-2 px-3 rounded-sm md:p-0
                                    text-gray-900 
                                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                    md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                >
                                    Currículo
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio" id="navbar-link-portfolio"
                                    className={`${localUrl.pathname==="/portfolio" ? "md:text-blue-700 md:dark:text-blue-500" : ""}
                                    block py-2 px-3 rounded-sm md:p-0
                                    text-gray-900 
                                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                    md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                >
                                    Portfólio
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" id="navbar-link-blog"
                                    className={`${localUrl.pathname==="/blog" ? "md:text-blue-700 md:dark:text-blue-500" : ""}
                                    block py-2 px-3 rounded-sm md:p-0
                                    text-gray-900 
                                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                                    md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </section>
                </section>
            </nav>
            <NavbarSpacing/>
        </section>
    )
}

export default NavBar;