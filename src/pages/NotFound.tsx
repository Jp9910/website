import BotaoEstilizado from "../components/BotaoEstilizado"
import { useNavigate } from "react-router"

function NotFound () {
    const navigate = useNavigate()
    return (
        <div id="pagina" className="mx-30">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className=" row-span-3 row-start-12"></div>
                <div className="flex justify-center items-center gap-2 row-start-3 row-span-2 row-end-12">
                    <b className="">Ops, página não encontrada!</b>
                </div>
            <div className="row-start-1 row-end-4"></div>
            </div>
            <div className="flex justify-center">
                <BotaoEstilizado aoClicar={() => {navigate('/')}} > {"< Retornar"} </BotaoEstilizado>
            </div>
        </div>
    )
}

export default NotFound


// navigate('/') // ir para "/"
// navigate(-1) // voltar 1 pagina
// navigate(-2) // voltar 2 paginas
// navigate(1) //avançar 1 pagina
// navigate(-1, {state: informacoes_passadas_para_prox_pagina, replace: true})
// "replace: true" remove a ultima pagina do stack de navegação (bom para logins)