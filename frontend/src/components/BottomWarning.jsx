import { Link } from "react-router-dom"
export function BottomWarning({label, buttonText, to}){
    return <div className="pt-1 pb-4 text-sm flex justify-center">
        <div className="text-gray-900">{label}</div>
        <Link className="pointer underline pl-1 cursor-pointer text-gray-900" to={to}>
            {buttonText}
        </Link>
    </div>
}