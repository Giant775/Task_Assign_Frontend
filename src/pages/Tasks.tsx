import { useEffect } from "react";
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router-dom";
import NavBar from "../components/layout/navbar";
import TaskList from "../components/task/TaskList";
import { TaskProvider } from "../contexts/TaskProvider";

const Tasks = () => {
    const {user, isLoading} = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && (user === null || user.email === "" || user.grade === null)) {
            alert("Pleaes login first.");
            navigate("/login");
        }
    }, [user, navigate, isLoading])

    if(isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <>
            <NavBar />
            <TaskProvider>
                <TaskList />
            </TaskProvider>
        </>
    )
}

export default Tasks