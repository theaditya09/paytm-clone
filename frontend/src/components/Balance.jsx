export function Balance({ amount }) {
  const numericAmount = Number.isFinite(Number(amount)) ? Number(amount) : 0
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(numericAmount)

  return (
    <div className="px-4 pt-4">
      <div className="glass-card p-5 animate-fade-in-up">
        <div className="text-sm text-gray-400">Your Balance</div>
        <div className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight">
          {formatted}
        </div>
      </div>
    </div>
  )
}