import React, { useEffect } from 'react'

const Child = () => {
   useEffect(() => {
      console.log('31');
   }, [])

   return (
      <div>
         {
            console.log(32)
         }
         Child</div>
   )
}

export default Child