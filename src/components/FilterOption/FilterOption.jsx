import "./FilterOption.css";

function FilterOption({children, onClick, activeFilter}) {
  return (
    <li 
      onClick={() =>{ onClick(children) }} 
      className={`option ${activeFilter === children ? 'selected' : ''}`}
    >
      {children}
    </li>
  )
}

export { FilterOption }
