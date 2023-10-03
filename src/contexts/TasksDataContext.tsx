import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import PropTypes from "prop-types";

interface TaskDataContextType {
    id: number;
    title: string;
    text: string;
    is_fav: boolean;
    color: string;
}

const TasksDataContext = createContext<{
    tasksData: TaskDataContextType[];
    settasksData: Dispatch<SetStateAction<TaskDataContextType[]>>;
} | null>(null);

export const TasksDataProvider = ({ children }: { children: ReactNode }) => {
    const [tasksData, settasksData] = useState<TaskDataContextType[]>([]);

    const contextValue = {
        tasksData,
        settasksData,
    };

    return (
        <TasksDataContext.Provider value={contextValue}>
            {children}
        </TasksDataContext.Provider>
    );
};

TasksDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
