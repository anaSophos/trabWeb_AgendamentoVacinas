import React from 'react'

function TituloPrincipal({children}){
  return (
    <h1 className="lg:text-[40px] sm:text-[30px] text-[25px] font-bold text-lime-950 mt-auto mr-auto text-center">
      {children}
    </h1>
  )
}
export default TituloPrincipal
