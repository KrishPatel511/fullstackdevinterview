import { useState } from "react"

const NormalSearch = () => {

    const [search,setSearch] = useState('');

    let fruits = ["Apple","banana","Cherry","Mango"];


    const searchFruits = fruits.filter((fruit) => {

             return fruit.toLowerCase().includes(search.toLowerCase());

    })
  return (
  <>
       <h2>Normal Search Fruits Lists......</h2>


<input

   type = 'text'
   value={search}
   placeholder="Search Fruits..."
   onChange = {(e) => setSearch(e.target.value)}
/>
       {searchFruits.length > 0 ? (
    
       <ul>

        {searchFruits.map((fruit) => {
              return <li key={fruit}>{fruit}</li>
        })}
       </ul>

       ) : (
                 
        <p>No results...</p>
       )}
  
  </>
  )
}

export default NormalSearch