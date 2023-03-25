import React, { useEffect } from 'react'
import { FTMScanLogo, Loader } from '../assets';
import { Employee, EmployeeCard, Payroll, TransactionGraph, Transactions } from '../components';
import Dashboardcard from '../components/dashboardcard.component';
import "./employee.css";

import { useStateContext } from '../context';
const EmployeePage = () => {

    const [navTitle, setNavTitle, address, contract, connect, getTransactions, getEmployees] = useStateContext();

    const [employee, setEmployee] = React.useState([] as any);
    const [isLoading, setIsLoading] = React.useState(false);


    const fetchEmployee = async () => {
        setIsLoading(true);
        let data = await getEmployees();
        // console.log(data)
        setEmployee(() => data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (contract) fetchEmployee();
        fetchEmployee();
    }, [address, contract])


    useEffect(() => {
        document.title = "Employees | SalaryStream powered by Fantom";
        setNavTitle(() => "Employees Details");
    }, [])


    return (
        <div className="dashboard-container flex gap-10">
            <div className="main-dashboard-items">
                <span className="page-title">Employees</span>
                <div className="err-text">Employees listed on the chain.</div>
                <div className="employee-wrapper">
                    {employee.length < 1
                        ?
                        <center>
                            <div className="loader-container" style={{ marginTop: '-20px', width: '30vw', minHeight: '400px' }}>
                                <img src={Loader} />
                            </div>
                        </center>
                        :
                        employee.map((employee: any, idx = 0) => {
                            return (
                                <EmployeeCard obj={employee} />
                            )
                        })
                    }
                </div>

                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">Recent Salary Payments</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => { window.location.href = "https://testnet.ftmscan.com/address/0xE10488fcd9994E1002f38Ffb1E5cE1392473B77c" }}>
                        <img src={FTMScanLogo} className="arrow-icon" alt="FTMScan_logo" /></span>
                </div>
                <div className="err-text">Salary payment to the employees.</div>

                <div className="transactions-details">
                    <Transactions filterType="Salary" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>
            </div>

            <div className="dashboard-sidebar">
                <div className="transactions-graph-container">
                    {/* <span className="sidebar-span">Payroll</span> */}
                    <span className="sidebar-span">Payroll</span>
                    <div className="err-text">Pay all employees at once whose vesting period is over.</div>


                    <Payroll />
                </div>
                <div className="transactions-employee-container">
                    <span className="sidebar-span">Employee Data</span>
                    <div className="err-text">The employees' details.</div>
                    <Employee />

                </div>
            </div>

        </div>
    )
}

export default EmployeePage