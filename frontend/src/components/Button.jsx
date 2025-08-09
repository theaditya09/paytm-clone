export function Button({ label, onClick, variant = 'primary' }) {
  const base = "cursor-pointer w-full font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition-all duration-200 active:scale-[0.99] hover-glow tap-smooth"
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary'
  return (
    <div className="px-5">
      <button onClick={onClick} type="button" className={`${base} ${variantClass}`}>
        {label}
      </button>
    </div>
  )
}