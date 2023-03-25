import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FTMScanLogo } from '../assets';
import { TransactionGraph, Transactions } from '../components';
import { useStateContext } from '../context';

const TransactionsPage = () => {
    const [navTitle, setNavTitle, address, contract, connect] = useStateContext();

    const navigate = useNavigate();

    let addr = !address ? "0x000...000" : `${address.slice(0, 3)}...${address.slice(-5,)}`;

    useEffect(() => {
        document.title = "Dashboard | SalaryStream powered by Fantom"
    }, []);

    setNavTitle(() => "Transactions");

    const handleClick = () => {
        window.location.href = "https://testnet.ftmscan.com/address/0xE10488fcd9994E1002f38Ffb1E5cE1392473B77c";
    }

    useEffect(() => {
        document.title = "Transactions | SalaryStream powered by Fantom";
    }, [])

    return (
        <div className="dashboard-container flex gap-10" style={{ padding: '0 20px' }}>
            <div className="main-dashboard-items" style={{ flex: 1 }}>
                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">All Transactions</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => handleClick()}>
                        <img src={FTMScanLogo} className="arrow-icon" alt="ftmscan_logo" /></span>
                </div>
                <div className="err-text">All the recent transactions heppened on the chain.</div>

                <div className="transactions-details">
                    <Transactions filterType="" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>

                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">Salary Payments</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => handleClick()}>
                        <img src={FTMScanLogo} className="arrow-icon" alt="ftmscan_logo" /></span>
                </div>
                <div className="err-text">Salary payment to the employees.</div>

                <div className="transactions-details">
                    <Transactions filterType="Salary" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>

                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">Milestone Payments</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => handleClick()}>
                        <img src={FTMScanLogo} className="arrow-icon" alt="ftmscan_logo" /></span>
                </div>
                <div className="err-text">All recent milestone payments.</div>

                <div className="transactions-details">
                    <Transactions filterType="Milestone Payment" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>
            </div>
        </div>
    )
}

export default TransactionsPage