import React from 'react'
import './search-box.styles.css'

// functional component, gets props and returns html 
// no constructor, no state maintained or lifecycle methods
// those are only in class components
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className = 'search'
        type = 'search' 
        placeholder = { placeholder }
        onChange={handleChange}
    />
)
