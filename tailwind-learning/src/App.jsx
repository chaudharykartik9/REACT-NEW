import React from 'react'

const App = () => {
  return (
    <>
    <div className='grid grid-cols-10'>
      <div className='bg-blue-300 sm:col-span-4 col-span-10  ' >child 1</div>
      <div className='bg-red-300 sm:col-span-4 col-span-10'>child 2</div>
      <div className='bg-green-200 sm:col-span-2 col-span-10' >child 3</div>
    </div>
    </>
  )
}

export default App