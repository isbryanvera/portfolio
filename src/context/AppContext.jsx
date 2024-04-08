import { createContext, useState } from "react";
const PageContext = createContext()

function PageProvider({children}){

    //state
  const [currentPage,setCurrentPage] = useState('Home'); // Valor por defecto del estado la primera vez que se renderiza el componente

    return (
        <PageContext.Provider value={
            {
                currentPage , 
                setCurrentPage
            }
        }>
            {children}
        </PageContext.Provider>
    )
}

export { PageContext, PageProvider }