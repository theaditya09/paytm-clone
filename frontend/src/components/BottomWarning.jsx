import { Link } from "react-router-dom"
export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="pt-1 pb-4 text-sm flex justify-center">
      <div className="text-gray-300">{label}</div>
      <Link className="pl-1 cursor-pointer text-cyan-300 hover:text-cyan-200 link-underline" to={to}>
        {buttonText}
      </Link>
    </div>
  )
}