import React from 'react'

function Input({back,front,all,value}) {
  return (
    <div>
        <h2 className='title'>SELECT YOUR TEAM TO WORK IN PROJECTS</h2>
        <div className='filter-container'>
        <input onChange={value} className="input-container" type="text" placeholder="select team from the list"/>
        
            <button onClick={all} className="all-button">ALL</button>
            <button onClick={back} className='backend-dev'>backend</button>
            <button onClick={front} className='frontend-dev'>frontend</button>
        </div>
    </div>
  )
}

export default Input