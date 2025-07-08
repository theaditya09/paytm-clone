import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export function Dashboard() {
    const [user, setUser] = useState({});
    const [amount, setAmount] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3000/api/v1/user/me", {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            setUser(response.data);
        } catch (err) {
            navigate('/signup');
        }
    };

    const fetchBalance = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setAmount(response.data.balance);
        } catch (err) {
            console.error("Balance fetch failed:", err);
        }
    };

    useEffect(() => {
        fetchUser();
        fetchBalance();
    }, [location.state]); 

    return (
        <>
            <Appbar name={user.firstName + " " + user.lastName} />
            <Balance amount={amount} />
            <Users />
        </>
    );
}
