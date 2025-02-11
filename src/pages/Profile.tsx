import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import NavBar from "../components/layout/navbar";

const Profile = () => {
    const {user, isLoading} = useUser();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isLoading && (user === null || user.email === "" || user.grade === null)) {
            alert("Please login first.");
            navigate("/login");
        }
    }, [user, navigate, isLoading]);

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <NavBar />
        </>
    )
}

export default Profile;