import "../../../styles/layout/_fav-tasks-home-component.sass"
import { BsStarFill } from "react-icons/bs"
import { LuPaintBucket } from "react-icons/lu"
import { BsPencil } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { TasksDataContext } from "../../../contexts/TasksDataContext"
import axios from "axios";
import { BsStar } from "react-icons/bs";

export default function FavTasks() {
    const { tasksData, setTasksData } = useContext(TasksDataContext)

    useEffect(() => {
        axios.get("http://localhost:3333/api/todolists")
            .then((response) => {
                console.log(response.data);
                setTasksData(response.data);
            })
            .catch((error) => {
                console.error('Errro ao fazer a requisição:', error);
            });
    }, []);

    return (
        <>
            <p id='fav-section'>Favoritas</p>
            <div id="fav-tasks-container">
                <div id="header-task">
                    <p id="title-task">
                        {/* {tasksData[0].title} */}
                        TITULO
                    </p>
                    <div id="fav-icon" >
                        <BsStarFill style={{ color: 'yellow', fontSize: '20px' }} />
                        {/* {tasksData[0].is_fav ? <BsStarFill style={{ color: 'yellow', fontSize: '20px' }} /> : <BsStar style={{ color: 'black', fontSize: '20px' }} />} */}
                    </div>
                </div>
                <div id="task-content">
                    <p>
                        {/* {tasksData[0].text} */}
                        TEXTO
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
