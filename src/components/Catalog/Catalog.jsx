import React from 'react'
import makes from "./makes.json";

const Catalog = () => {
    const options = {...makes.map((make, index) => ({
            value: make,
            label: make,
        }))}
  return (
    <div>
        <label for="size">Car brand</label>
            <select id="size" name="size">
                options={options}
            </select>   
          

    </div>
  )
}

export default Catalog