import React from 'react'

function MyTeam({myteam,team}) {
  return (
    <div className='myteam-container'>
      {
         myteam.map(item=>{
          return <button onClick={()=>team(item)} className={item.speciality === "backend"?"backend-dev":"frontend-dev"}>{item.name}</button>
         })
        }
    </div>
  )
}

export default MyTeam