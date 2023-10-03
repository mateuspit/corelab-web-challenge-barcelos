import { BsStarFill, BsStar } from "react-icons/bs";
import { LuPaintBucket } from "react-icons/lu";
import "../../../styles/layout/_new-task-home-components.sass"
import "../../../styles/utils/_variables.sass"
import { useState, ChangeEvent } from "react";

export default function NewTask() {

    function createTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert("create");
        setInputValue('')
        setTaskValue('')
        setIsFavStar(false)
    }

    const [inputValue, setInputValue] = useState<string>('');
    const [taskValue, setTaskValue] = useState<string>('');
    const [isFavStar, setIsFavStar] = useState<boolean>(false);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setTaskValue(event.target.value);
    }

    function toggleIcon() {
        setIsFavStar(!isFavStar);
    }

    return (
        <div id="new-task">
            <form onSubmit={createTask}>
                <div id="header-task">
                    <div id="title-task">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Título"
                            id='my-input'
                        />
                    </div>
                    <div id="fav-icon" onClick={toggleIcon}>
                        {isFavStar ? <BsStarFill style={{ color: 'yellow', fontSize: '20px' }} /> : <BsStar style={{ color: 'black', fontSize: '20px' }} />}
                    </div>
                </div>
                <div id="task-content">
                    <textarea
                        id="task-content"
                        placeholder="Criar nota..."
                        rows={4}
                        cols={50}
                        value={taskValue}
                        onChange={handleTextChange}
                    />
                </div>
                <div id="task-footer">
                    <p><LuPaintBucket /></p>
                    <button id="submit-button" type="submit" name="submitButton" >Criar nota</button>
                </div>
            </form>
        </div>
    )
}
