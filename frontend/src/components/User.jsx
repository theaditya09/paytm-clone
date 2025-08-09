import { useNavigate } from "react-router-dom";
export function User({ user }) {
  const navigate = useNavigate();
  const first = user?.firstName || ''
  const last = user?.lastName || ''
  const displayName = `${first} ${last}`.trim()
  const initial = first?.[0]?.toUpperCase?.() || last?.[0]?.toUpperCase?.() || 'U'

  return (
    <div className="mb-2 flex p-3 justify-between glass-card rounded-xl items-center transition-transform duration-200 hover:-translate-y-0.5 interactive-card">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-gray-900 flex justify-center items-center">
          <div className="font-bold text-lg">{initial}</div>
        </div>
        <div className="font-medium">{displayName}</div>
      </div>
      <div>
        <button
          type="button"
          className="btn-primary rounded-lg text-sm px-6 py-2 hover-glow tap-smooth"
          onClick={() => {
            navigate(`/send?_id=${user._id}&name=${encodeURIComponent(displayName)}`)
          }}
        >
          Send Money
        </button>
      </div>
    </div>
  )
}