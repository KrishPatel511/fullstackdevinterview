
import { useEffect, useState } from "react"

const DebounceSearch = () => {

    const [search,setSearch] = useState('');

    const [debounceSearch,setDebounceSearch] = useState('');

   let fruits = ["Apple","banana","Cherry","Mango"];

        useEffect(() => {
            const timer = setTimeout(() => {
                      setDebounceSearch(search)
            },500)

            return () => clearTimeout(timer)
        },[search])
         
const searchFruits = fruits.filter((fruit) => {

    return fruit.toLowerCase().includes(debounceSearch.toLocaleLowerCase());

})

  return (

    <>
    <div>Fruits List Searching.....</div>

      <input
       type='text'
       placeholder = 'Search Fruits...'
       value={search}
       onChange = {(e) => setSearch(e.target.value)}
       />


      {searchFruits.length > 0 ? (

        <ul>

            {searchFruits.map((fruit) => {
                 return <li key={fruit}>{fruit}</li>
            })}
        </ul>
      ) : (

        <p>No results found....</p>
      )}
    
    </>
    
  )
}

export default DebounceSearch