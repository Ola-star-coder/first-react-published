import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'

export function Card({name, title, about}){
  return(
     <div className='card'>
      <h2>{name}</h2>
      <p className='card-title'>{title}</p>
      <h3 className='second-title'>{about}</h3>
      </div>
  )
}

export default function App(){
   const profiles = [
        {id:1 , 
        name:"Jason Alexander", 
        title:"Marine Engineer", 
        about:"I’m a Marine Engineer specializing in ship systems, propulsion, and sustainable maritime solutions."},
        {id:2, 
        name:"Muhhamed ali", 
        title:"Lawyer", 
        about:"I like solving legal problems, helping clients find justice, and debating complex legal issues."},
        {id:3 , 
        name:"Olivia Chen", 
        title:"Educator", 
        about:"I love inspiring students, sharing knowledge, and helping others reach their full potential."},
        {id:4 , 
        name:"Aramide Olabisi", 
        title:"AI Engineer", 
        about:"I love building intelligent systems, training models, and exploring how AI can solve real problems."}
      ];

  return(
    <div className='holder'>
    {profiles.map(profile => (
      <Card
       key={profile.id}
       name={profile.name}
       title={profile.title}
       about={profile.about}
      />
    ))}
    </div>
  )
}