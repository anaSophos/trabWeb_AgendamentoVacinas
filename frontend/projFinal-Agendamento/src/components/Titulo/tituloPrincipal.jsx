import React from 'react'

function TituloPrincipal({children}){
  return (
    <div className='mt-[5%] mb-[5%]'>
      <h1 className="lg:text-[40px] sm:text-[30px] text-[25px] font-bold text-lime-950 mt-auto mr-auto text-center">
        {children}
      </h1>
    </div>
  )
}
export default TituloPrincipal
