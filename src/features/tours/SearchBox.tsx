type SearchBoxProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBox({ value, onChange, placeholder }: SearchBoxProps) {
  return (
    <div className="search-box">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Tìm kiếm...'}
      />
      {value && (
        <button
          type="button"
          className="search-box__clear"
          onClick={() => onChange('')}
          aria-label="Xóa từ khóa"
        >
          X
        </button>
      )}
    </div>
  )
}
