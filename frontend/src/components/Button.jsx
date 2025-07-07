export function Button({label}){
    return(
        <div className="px-5">
        <button type="button" class="cursor-pointer w-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
        </div>
    )
}