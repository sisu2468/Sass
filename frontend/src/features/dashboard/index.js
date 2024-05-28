import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch, useSelector } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'
import { useState } from 'react'

function Dashboard(){

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user);
    console.log(user);
    
    const statsData = user ? [
        {
            title: "Total Sales",
            value: "$0",
            icon: <CreditCardIcon className='w-8 h-8'/>,
            description: "Current month"
        },
        {
            title: "Current Credit",
            value: user.credit,
            icon: <CircleStackIcon className='w-8 h-8'/>,
            description: ""
        }
    ] : [];
    
    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
        {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-2 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>



        {/** ---------------------- Different charts ------------------------- */}
            <div className="grid mt-4 grid-cols-1 gap-6">
                <LineChart />
            </div>
            
        
        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid mt-4 grid-cols-1 gap-6">
                <UserChannels />
            </div>
        </>
    )
}

export default Dashboard