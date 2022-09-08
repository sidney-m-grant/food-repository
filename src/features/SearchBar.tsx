import React from "react";

interface Props {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    searchInput: string;
}

export const SearchBar: React.FC<Props> = ({ setSearchInput, searchInput }) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        setSearchInput(input.toLowerCase());
    }

    return (
        <input 
        type="text" 
        name="search-input" 
        onChange={handleChange}
        value={searchInput} />
    )
}