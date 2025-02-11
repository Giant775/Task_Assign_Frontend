import { useEffect } from "react";
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router-dom";
import NavBar from "../components/layout/navbar";

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
            <p>{user?.email}</p>
        </>
    )
}

export default Tasks