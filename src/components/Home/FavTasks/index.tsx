import "../../../styles/layout/_fav-tasks-home-component.sass"
import { BsStarFill } from "react-icons/bs"
import { LuPaintBucket } from "react-icons/lu"
import { BsPencil } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai";

export default function FavTasks() {

    return (
        <>
            <p id='fav-section'>Favoritas</p>
            <div id="fav-tasks-container">
                <div id="header-task">
                    <p id="title-task">
                        TITULO DA TASK
                    </p>
                    <div id="fav-icon" >
                        <BsStarFill style={{ color: 'yellow', fontSize: '20px' }} />
                    </div>
                </div>
                <div id="task-content">
                    <p>
                        CONTEUDO DA TASKCONTEUDO DA TASTASKCONTEUDO DA TASKCONTEUDO DA TASKCONTEUDO DA TASK
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
            {/*<div id="fav-tasks-container">
                <div id="header-task">
                    <p id="title-task">
                        TITULO DA TASK
                    </p>
                    <div id="fav-icon" >
                        <BsStarFill style={{ color: 'yellow', fontSize: '20px' }} />
                    </div>
                </div>
                <div id="task-content">
                    <p>
                        CONTEUDO DA TASKCONTEUDO DA TASTASKCONTEUDO DA TASKCONTEUDO DA TASKCONTEUDO DA TASK
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
            <div id="fav-tasks-container">
                <div id="header-task">
                    <p id="title-task">
                        TITULO DA TASK
                    </p>
                    <div id="fav-icon" >
                        <BsStarFill style={{ color: 'yellow', fontSize: '20px' }} />
                    </div>
                </div>
                <div id="task-content">
                    <p>
                        CONTEUDO DA TASKCONTEUDO DA TASTASKCONTEUDO DA TASKCONTEUDO DA TASKCONTEUDO DA TASK
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
            <div id="fav-tasks-container">
                <div id="header-task">
                    <p id="title-task">
                        TITULO DA TASK
                    </p>
                    <div id="fav-icon" >
                        <BsStarFill style={{ color: 'yellow', fontSize: '20px' }} />
                    </div>
                </div>
                <div id="task-content">
                    <p>
                        CONTEUDO DA TASKCONTEUDO DA TASTASKCONTEUDO DA TASKCONTEUDO DA TASKCONTEUDO DA TASK
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
            </div>*/}
        </>
    )
}
