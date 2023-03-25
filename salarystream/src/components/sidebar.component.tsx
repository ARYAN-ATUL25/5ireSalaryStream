import React from 'react'
import "./sidebar.component.css"
import { DashboardIcon, EmployeesIcon, Logo, MilestoneIcon, PaymentsIcon, ProfileIcon, SettingsIcon } from "../assets/index";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
function Sidebar() {
    const navigate = useNavigate();
    function handleClick(url: string) {
        navigate(`../${url}`);
    }
    const [navTitle, setNavTitle] = useStateContext();
    return (
        <div className="sidebarContainer">
            <span className="logo-container">
                <img src={Logo} alt="SalaryStream_Logo" />
            </span>
            <div className="list-items-container">
                <li onClick={() => handleClick("/")} className={navTitle === "Dashboard" ? "li-active" : ""}><span>
                    <img src={DashboardIcon} alt="dashboard-icon" />
                </span>Dashboard</li>

                <li onClick={() => handleClick("/employee")} className={navTitle === "Employees Details" ? "li-active" : ""}><span>
                    <img src={EmployeesIcon} alt="employee-icon" />
                </span>Employees</li>

                <li onClick={() => handleClick("/milestones")} className={navTitle === "Milestones" ? "li-active" : ""}><span>
                    <img src={MilestoneIcon} alt="milestones-icon" />
                </span>Milestones</li>

                <li onClick={() => handleClick("/transactions")} className={navTitle === "Transactions" ? "li-active" : ""}><span>
                    <img src={PaymentsIcon} alt="payments-icon" />
                </span>Transactions</li>

                <li onClick={() => handleClick("/profile")} className={navTitle === "View Profile" ? "li-active" : ""}><span>
                    <img src={ProfileIcon} alt="profile-icon" />
                </span>Profile</li>

                <li onClick={() => handleClick("/")} className={navTitle === "" ? "li-active" : ""}><span>
                    <img src={SettingsIcon} alt="settings-icon" />
                </span>Settings</li>
            </div>

            <div className="sidebar-btn-container">
                <button className="btn-connect" onClick={() => window.location.href = "https://faucet.fantom.network/"}>Fantom Faucet</button>
            </div>
        </div>
    )
}

export default Sidebar