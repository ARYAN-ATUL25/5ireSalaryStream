import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PendingIcon } from '../assets';
import { useStateContext } from '../context';

const MilestoneCard = ({ obj, type }: any) => {

    const [
        navTitle,
        setNavTitle,
        address,
        contract,
        connect,
        getTransactions,
        getEmployees,
        payrollEmployee,
        payEmployee,
        getMilestones,
        payMilestone
    ] = useStateContext();

    const navigate = useNavigate();

    const condensedAddress = `${obj.creator.slice(0, 3)}...${obj.creator.slice(-7,)}`;

    const handleClick = async (mId: number, amount: string) => {
        console.log(mId, amount)
        try {
            const data = await payMilestone(mId, amount);
            console.log(data);
            navigate("../transactions/success");
        } catch (err) {
            console.log(err);
            navigate("../transactions/failed")
        }
    }

    return (
        <div className="employee-card" style={{ flex: type === "loan" ? 1 : 0 }}>
            <img src={PendingIcon} />
            <div className="employee-details">
                <div style={{ fontSize: '.9em' }}>
                    <span className="page-title">Address</span>
                    <div className='detail-box' >
                        {condensedAddress}
                    </div>

                </div>
                <div style={{ fontSize: '.9em' }} className="card-bottom-wrapper">
                    {type === "loan" ? "" :
                        <div>
                            <span className="page-title">Department</span>
                            <div className='detail-box' >
                                {obj.department}
                            </div>
                        </div>
                    }

                    <div>
                        <span className="page-title">Amount</span>
                        <div className='detail-box' >
                            {obj.amount} 5IRE
                        </div>
                    </div>
                </div>

            </div>
            <div className="employee-details-rev">
                <div style={{ fontSize: '.9em', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span className="page-title" style={{ alignSelf: 'flex-end' }}>{type === "loan" ? "" : "Reason for Milestone"}</span>
                    <div className="success" >
                        {obj.desc}
                    </div>
                </div>

            </div>
            <div className='btn-abs'>
                <button className="btn-connect" onClick={() => handleClick(obj.mId, obj.amount)}>Pay Now</button>
            </div>

        </div>
    )
}

export default MilestoneCard