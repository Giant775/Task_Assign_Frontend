import NabBar from "../components/layout/navbar"

const Dashboard = () => {
    return(
        <>
            <NabBar/>
            <div className="pt-16 px-28">
                <p className="text-xl">
                User management is an organizational function that enables users to access and control digital assets, such as applications, devices, networks, and cloud services. Organizations are now exploring even more advanced solutions. Modern user management services provide end-to-end management of user accounts, including user registration, login and authentication, single sign-on (SSO), and permissions management.
                User management systems allow administrators to manage users’ access to devices, software, and services. This includes managing permissions, monitoring usage, and providing authenticated access. User management is a core part of Identity and Access Management (IAM).
                </p>
                <ul className="px-10 py-5">
                    <li className="p-1">
                        Group users according to their needs and roles
                    </li>
                    <li className="p-1">
                        Define flexible access policies
                    </li>
                    <li className="p-1">
                        Maintain the security of IT systems
                    </li>
                    <li className="p-1">
                        Prevent unauthorized access to infrastructure, applications, and data
                    </li>
                    <li className="p-1">
                        Store user details and credentials
                    </li>
                    <li className="p-1">
                        Provide a convenient login mechanism for end-users
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dashboard