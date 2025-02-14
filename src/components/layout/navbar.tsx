import { Link } from "react-router-dom";
const NavBar = () => {

    return (
        <div className="flex flex-row bg-blue-300 text-lg justify-end px-14 py-5 font-bold">
            <span className="p-2 cursor-pointer"><Link to="/">Home</Link></span>
            <span className="p-2 cursor-pointer"><Link to="/login">Login</Link></span>
            <span className="p-2 cursor-pointer"><Link to="/tasks">Tasks</Link></span>
        </div>
    );
}

export default NavBar;