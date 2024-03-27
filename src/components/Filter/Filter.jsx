import { FilterOption } from "../FilterOption/FilterOption";
import "./Filter.css";
import { useState } from 'react';

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  //? Data
  const filters = ['All','Web Development','Design','Tools']

  return (
    <div className="filter">
      <ul className="filter__options">
        {filters.map((filter,index) => {
          return <FilterOption key={index} onClick={setActiveFilter} activeFilter={activeFilter}>{filter}</FilterOption>
        })}
      </ul>
    </div>
  );
}

export { Filter }