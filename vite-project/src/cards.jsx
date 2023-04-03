import React from 'react'

export const Cards = ({item}) => {
  return (
    <div className='card' style={{backgroundImage: `url(${item.img})`}}>
        <div className="container">
            <h1>{item.nome}</h1>
            <p>R${item.preco},00/kg</p>
        </div>
    </div>
  )
}