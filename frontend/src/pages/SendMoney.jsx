import { Heading } from "../components/Heading";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function SendMoney(){
    const [searchParams] = useSearchParams()
    const id = searchParams.get("_id")
    console.log(id)
    const name = searchParams.get("name") 
    const [amount, setAmount] = useState(0)
    return(
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white w-100 h-max text-center rounded-lg px-5">
                <Heading label="Send Money"/>
                <div className="flex my-3 text-left items-center gap-5">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center font-bold text-3xl text-black">{name[0].toUpperCase()}</div>
                    <div className="font-medium text-lg" >{name}</div>
                </div>
                <div className="text-left mb-1">Amount (in Rs)</div>
                <input type="text" onChange={(e) => {
                    setAmount(e.target.value)
                }} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full p-2 " placeholder="Enter Amount" required />
                <button type="button" onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                        to : id,
                        amount
                    }, {
                        headers : {
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                    })
                }} className="cursor-pointer w-full text-white bg-green-400 hover:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5">Initiate Transfer</button>
            </div>
        </div>
    )
}