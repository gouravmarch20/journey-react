import React, { useEffect } from 'react'

const Child = () => {
   useEffect(() => {
      console.log('21');
   }, [])

   return (
      <div>
         {
            console.log(22)
         }
         Child</div>
   )
}

export default Child