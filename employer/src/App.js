import './App.css'
import React,{useState} from 'react';
import Input from './Input';
import data from './Data';
import MyTeam from './MyTeam';
function App() {
  const [allName,setallName]=useState(data)
  const [Team,setTeam] = useState([])
  const backfiltre=()=>{
    let backdata = data.filter(item=>item.speciality==="backend")
    setallName(backdata)
  }
  const handleInput=(e)=>{
   let values= data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
   setallName(values)
  }
  const ShowAll=()=>{
    setallName(data)
  }
  const frontfiltre=()=>{
    let backdata = data.filter(item=>item.speciality==="frontend")
    setallName(backdata)
  }
  const team=(dev)=>{
    let found = Team.some(item=>item.id===dev.id)
    if(!found){
    setTeam([...Team,dev])
    }

  }
  const remove=(r)=>{
    setTeam(Team.filter(item=>item.id!==r.id))
  }
  return (
    <div>
      <Input value={handleInput} all={ShowAll} back={backfiltre} front={frontfiltre}/>
      <MyTeam myteam={Team} team={remove}/>
      <div className='name-container'>
        {
         allName.map(item=>{
          return <button onClick={()=>team(item)} className={item.speciality === "backend"?"backend-dev":"frontend-dev"}>{item.name}</button>
         })
        }
      </div>
    </div>
  );
}

export default App;
