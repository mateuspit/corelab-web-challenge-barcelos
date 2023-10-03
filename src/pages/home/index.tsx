import FavTasks from "../../components/Home/FavTasks"
import Header from "../../components/Home/Header"
import NewTask from "../../components/Home/NewTask"
import Tasks from "../../components/Home/Tasks"
import "../../styles/pages/_home.sass"

export default function Home() {

    return (
        <div id='home'>
            <Header />
            <NewTask />
            <FavTasks />
            <Tasks />
        </div>
    )
}
