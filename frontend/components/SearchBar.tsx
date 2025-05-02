// components/SearchBar.tsx
'use client';

import { useState } from 'react';

type SearchBarProps = {
  onSearch: (location: string) => void;
  onToggleUnit: () => void;
};

export default function SearchBar({ onSearch, onToggleUnit }: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 rounded border"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
      <button onClick={onToggleUnit} className="text-sm text-gray-600 underline">
        Toggle °C/°F
      </button>
    </div>
  );
}
