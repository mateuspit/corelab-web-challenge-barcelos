import Home from "./pages/home"
import { TasksDataProvider } from "./contexts/TasksDataContext"

export default function App() {

    return (
        <TasksDataProvider>
            <Home />
        </TasksDataProvider>
    )
}
