import React from 'react'

export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section style={{ height: 150}}>
        <h2 className='text-capitalize'> #{id} | {name} </h2>

        <div>
            {
                sprites.map(sprite => (
                    <img key={sprite} src={sprite} alt={sprite}/>
                ))
            }
        </div>

    </section>
  )
}
