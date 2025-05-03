type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
  toggleUnit: () => void;
  unit: 'metric' | 'imperial';
};

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  handleSearch,
  toggleUnit,
  unit,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search city..."
        className="border rounded px-3 py-2 w-64"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
      <button onClick={toggleUnit} className="border px-3 py-2 rounded">
        {unit === 'metric' ? '°F' : '°C'}
      </button>
    </div>
  );
}
