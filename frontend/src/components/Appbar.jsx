export function Appbar({ name }) {
  const displayName = (name && typeof name === 'string' && name.trim()) || 'User'
  const initial = displayName?.[0]?.toUpperCase?.() || 'U'

  return (
    <div className="sticky top-0 z-40 px-4 pt-4">
      <div className="glass-navbar h-14 flex justify-between items-center px-4">
        <div className="font-extrabold text-xl tracking-tight">Payments App</div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-sm text-gray-300">Hello, {displayName}</div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-gray-900 flex items-center justify-center font-bold">
            {initial}
          </div>
        </div>
      </div>
    </div>
  )
}