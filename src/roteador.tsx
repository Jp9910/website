import {BrowserRouter, Routes, Route, Navigate} from 'react-router'
import NotFound from './pages/NotFound'
import Rodape from './components/Rodape'
import ContainerCaixa from './components/ContainerCaixa'
import NavBar from './components/Navbar'
import AboutMeEnglish from './pages/AboutMe'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'

// https://github.com/alura-cursos/aluroni-router/blob/main/src/routes.tsx
function Roteador() {
    return (
        <BrowserRouter>
            <ContainerCaixa>
                <NavBar />
                <Routes>
                        <Route path="/" element={<AboutMeEnglish />}/>
                        <Route path="*" element={<NotFound />}/>
                        <Route path="/resume" element={<Resume />}/>
                        <Route path="/portfolio" element={<Portfolio />}/>
                        <Route path="/blog" element={<Blog />}/>
                        <Route path="/MyWebsite" element={<Navigate to="/" replace />}/>
                </Routes>
                <Rodape />
            </ContainerCaixa>
        </BrowserRouter>
    )
}

export default Roteador