import React from 'react';

export function SearchBar({ filterText, setFilterText }: { filterText: string; setFilterText: React.Dispatch<React.SetStateAction<string>>; }) {
  return <input
    type="text"
    style={{marginTop: "50px"}}
    value={filterText}
    onChange={(e) => setFilterText(e.target.value)}
    placeholder="Search by last name" />;
}
