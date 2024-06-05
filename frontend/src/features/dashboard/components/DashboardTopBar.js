import ShareIcon from '@heroicons/react/24/outline/ShareIcon';
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";


function DashboardTopBar({ updateDashboardPeriod }) {

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleDatePickerValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setDateValue(newValue);
        updateDashboardPeriod(newValue);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Datepicker
                        containerClassName="w-72"
                        value={dateValue}
                        theme="light"
                        inputClassName="input input-bordered w-72"
                        popoverDirection="down"
                        toggleClassName="invisible"
                        onChange={handleDatePickerValueChange}
                        showShortcuts={true}
                        primaryColor="white"
                    />
                </div>
            </div>
        </>
    );
}

export default DashboardTopBar;
