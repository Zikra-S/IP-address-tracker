import { useState } from 'react'
import type { FormEvent } from 'react'
import iconArrow from '../assets/images/icon-arrow.svg'

interface SearchBarProps {
  onSearch: (term: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(value.trim())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl overflow-hidden rounded-2xl"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for any IP address or domain"
        aria-label="Search for any IP address or domain"
        className="text-very-dark-gray min-w-0 flex-1 bg-white px-6 py-4 text-base outline-none placeholder:text-dark-gray"
      />
      <button
        type="submit"
        aria-label="Search"
        className="bg-very-dark-gray flex w-14 cursor-pointer items-center justify-center transition-colors hover:bg-neutral-700"
      >
        <img src={iconArrow} alt="" />
      </button>
    </form>
  )
}