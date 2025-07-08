export function InputBox({label, placeholder, onChange}){
    return(
        <>
        <div className="mx-5">
            <div className="mb-1.5 text-md font-medium text-gray-900 text-left">{label}</div>
            <input type="text" onChange={onChange} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 w-full p-2 " placeholder={placeholder} required />
        </div>
        </>
    )
}