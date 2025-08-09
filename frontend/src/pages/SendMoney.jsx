import { Heading } from "../components/Heading";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function SendMoney(){
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const id = searchParams.get("_id")
    console.log(id)
    const name = searchParams.get("name") 
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(0)
    return(
        <div className="min-h-screen flex justify-center items-center px-4">
            <div className="glass-card w-full max-w-md text-center rounded-2xl px-5 animate-fade-in-up glass-field">
                <Heading label="Send Money"/>
                <div className="flex my-3 text-left items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center font-bold text-2xl text-gray-900">
                        {(name && name[0] && name[0].toUpperCase()) || 'U'}
                    </div>
                    <div className="font-medium text-lg" >{name}</div>
                </div>
                <div className="text-left mb-1 text-gray-300">Amount (in ₹)</div>
                <input type="number" min="1" onChange={(e) => {
                    setAmount(e.target.value)
                }} className="mb-3 glass-input text-sm rounded-xl w-full p-3 hover-glow" placeholder="Enter amount" required />
                <button type="button" onClick={async () => {
                    try{
                        await axios.post("http://localhost:3000/api/v1/account/transfer", {
                            to : id,
                            amount
                        } , {
                        headers : {
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                        })
                        setError(1)
                    } catch(err){
                        if(err.response) setError(2)
                    }
                }} className="btn-primary cursor-pointer w-full rounded-lg text-sm px-5 py-2.5 mb-2 hover-glow tap-smooth">
                    Initiate Transfer
                </button>
                <button type="button" onClick={() => {
                    navigate('/dashboard')
                }} className="btn-secondary cursor-pointer w-full rounded-lg text-sm px-5 py-2.5 mb-5 hover-glow tap-smooth">
                    Go Back
                </button>
                {
                    error==1 ? 
                            <div className="mb-3 font-medium text-sm text-green-400 animate-fade-in-up"> Transfer Successful. Go back to <Link className="link-underline" to='/dashboard'>dashboard</Link></div>
                    :error==2 ?
                            <div className="mb-3 font-medium text-sm text-red-400 animate-fade-in-up"> Transfer Failed. Try again or go back to <Link className="link-underline" to='/dashboard'>dashboard</Link></div>
                    :null
                }
            </div>
        </div>
    )
}