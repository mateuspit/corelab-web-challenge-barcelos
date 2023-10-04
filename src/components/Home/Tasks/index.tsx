import "../../../styles/layout/_tasks-home-component.sass"
import { BsStar } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { LuPaintBucket } from "react-icons/lu"

export default function Tasks() {

    return (
        <>
            <p id='tasks-section'>Outras</p>
            <div id="tasks-container">
                <div id="header-task">
                    <p id="title-task">
                        Compras da semana
                    </p>
                    <div id="fav-icon" >
                        <BsStar style={{ color: 'black', fontSize: '20px' }} />
                    </div>
                </div>
                <div id="task-content">
                    <p>
                        - Mamão, alface, tomate, acabate, mexerica, amendoas, sabonete, carne de frango, leite, creme de cabelo, feijao, arroz, milho, pipoca, uvaleite, creme de cabelo, feijao, arroz, milho, pipoca, uvaleite, creme de cabelo, feijao, arroz, milho, pipoca, uvaleite, creme de cabelo, feijao, arroz, milho, pipoca, uva
                    </p>
                </div>
                <div id="task-footer">
                    <div id="footer-left-side">
                        <p><LuPaintBucket /></p>
                        <p id="edit-icon"><BsPencil /></p>
                    </div>
                    <div id="footer-right-side">
                        <p><AiOutlineClose /></p>
                    </div>
                </div>
            </div>
            <div id="tasks-container">
                <div id="header-task">
                    <p id="title-task">
                        Poema que criei do nada
                    </p>
                    <div id="fav-icon" >
                        <BsStar style={{ color: 'black', fontSize: '20px' }} />
                    </div>
                </div>
                <div id="task-content">
                    <p>
                        Na linguagem de bits e código binário,
                        Nós programadores vivemos com desafio diário,
                        Lutamos com bugs, erros e exceções,
                        Mas encontramos alegria em nossas funções.

                        Com chaves e parênteses, nos debates sem fim,
                        Discutimos qual é a melhor forma do if-else no fim.
                        Com café e teclados, na tela que brilha,
                        Escrevemos linhas de código até o sol raiar.

                        Às vezes, nossos programas se comportam mal,
                        E aí corremos atrás, como um gato e um rato no final.
                        Mas quando tudo funciona como planejado,
                        É como encontrar um tesouro tão cobiçado.

                        Então, aqui estamos nós, programadores, em nosso mundo,
                        Com nosso humor nerd e nosso código profundo.
                        Na busca pelo código perfeito, continuamos a lutar,
                        Porque na programação, a diversão nunca vai acabar!
                    </p>
                </div>
                <div id="task-footer">
                    <div id="footer-left-side">
                        <p><LuPaintBucket /></p>
                        <p id="edit-icon"><BsPencil /></p>
                    </div>
                    <div id="footer-right-side">
                        <p><AiOutlineClose /></p>
                    </div>
                </div>
            </div>
        </>
    )
}
