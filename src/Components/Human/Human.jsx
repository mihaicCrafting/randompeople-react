import React from 'react'
import './Human.scss'
import { Link,useParams } from 'react-router-dom'
import { useEffect,useState} from 'react'
import Back from "../../Assets/backBtn.svg"
import Header from "../Header/Header"
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

export default function Human(props) {
  let params = useParams()
  const [human,fetchHuman] = useState(null)
  const [loadingAnim,setLoadingAnim] = useState(true)

  const getData = () => {
    fetch(`http://localhost:4000/api/humans/${params.id}`)
    .then(res => res.json())
    .then(res => {
        setLoadingAnim(false)
        fetchHuman(res.data)
    })
}
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    <Link to="/" className='BackBtn'><img src={Back}/></Link>
    <Header/>


    {
          loadingAnim && <LoadingAnimation/>
    }

    
    {
          !loadingAnim && <>
               <div className='HumanContent'>
                <img src={human ? human.avatar : null}/>

                <h2>{human ? human.name : null}</h2>

                <p>Role: {human ? human.role : null}</p>
                <p>Quote: {human ? human.quote : null}</p>

              </div>
          </>
    }

   
    </>
  )
}
