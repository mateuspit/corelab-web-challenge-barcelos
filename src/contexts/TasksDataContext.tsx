import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface TaskDataContextType {
    id: number;
    title: string;
    text: string;
    is_fav: boolean;
    color: string;
}

const defaultContextValue: {
    tasksData: TaskDataContextType[];
    setTasksData: Dispatch<SetStateAction<TaskDataContextType[]>>;
} = {
    tasksData: [],
    setTasksData: () => { },
};

export const TasksDataContext = createContext(defaultContextValue);

export const TasksDataProvider = ({ children }: { children: ReactNode }) => {
    const [tasksData, setTasksData] = useState<TaskDataContextType[]>([]);

    const contextValue = {
        tasksData,
        setTasksData,
    };

    return (
        <TasksDataContext.Provider value={contextValue}>
            {children}
        </TasksDataContext.Provider>
    );
};
