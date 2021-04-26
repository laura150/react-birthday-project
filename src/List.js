import React from 'react'

const List = ({people})=>{
    return(
        <>
        {people.map((person)=>{
            const {id, name, age, image} = person
            return(
                <article key ={id} className='individual'>
                <div className='image-container'>
                <img src={image} alt="" className='individual-image'/>
                </div>
                <div className='info'>
                 <h4>{name}</h4>
                 <p>{age} years old</p>
                </div>
                </article>
            )
        })}
        </>
    )
}

export default List