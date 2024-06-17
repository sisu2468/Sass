import CreditCard from "../../../components/Cards/CreditCard"


function UserChannels(){
    return(
        <div className="border rounded-md bg-white" title={"Credit History"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="normal-case items-center border-r">No</th>
                        <th className="normal-case items-center border-r">Date</th>
                        <th className="normal-case items-center border-r">Title</th>
                        <th className="normal-case items-center">Deduction Credit</th>
                    </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserChannels