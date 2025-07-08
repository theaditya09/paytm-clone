export function Appbar({name}){
    return <div className="shadow h-14 flex justify-between items-center">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-2xl">
            Payments App
        </div>
        <div className="flex items-center">
            <div className="h-full mr-3 font-medium">
                Hello, {name}
            </div>
            <div className="flex flex-col justify-center h-10 w-10 mr-4 bg-slate-200 rounded-full items-center">
                {name[0].toUpperCase()}
            </div>
        </div>
    </div>
}