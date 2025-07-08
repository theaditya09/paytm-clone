import { Link } from "react-router-dom";

export function User({name}){
    return <div className="mb-1 flex p-2 justify-between bg-gray-50 border border-gray-300 rounded-lg items-center">
        <div className="flex justify-center items-center gap-3">
            <div className="h-10 w-10 bg-slate-300 rounded-full flex justify-center items-center">
                <div>{name[0]}</div>
            </div>
            <div className="font-medium">{name}</div>
        </div>
        <div>
            <Link to='/send'>
            <button type="button" class="cursor-pointer w-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-10 py-2.5">Send Money</button>
            </Link>
        </div>
    </div>
}