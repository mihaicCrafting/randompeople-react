import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import { useEffect,useState } from 'react'

// delay (Seconds)
const DELAY = 5;

export default function HumanList() {

  let navigate = useNavigate()
  const [Humans,fetchHumans] = useState([])
  const [sort,setSort] = useState(null)
  const [loadingAnim,setLoadingAnim] = useState(true)

  const getData = () => {
      fetch('http://localhost:4000/api/humans')
      .then(res => res.json())
      .then(res => {
          setTimeout(()=>{
            fetchHumans(res.data);
            setLoadingAnim(false);
          },DELAY * 1000)
          
      })
  }

    useEffect(()=>{
        getData()
    },[])


    const dynamicSort = (list,newSort) =>{
        switch(newSort){
            case "ascend-by-name":
                list.sort((a,b)=>(a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
                break;

            case "descend-by-name":
                list.sort((a,b)=>(a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1)
                break;

            case "ascend-by-role":
                list.sort((a,b)=>(a.role.toUpperCase() > b.role.toUpperCase()) ? 1 : -1)
                break;

            case "descend-by-role":
                list.sort((a,b)=>(a.role.toUpperCase() < b.role.toUpperCase()) ? 1 : -1)
                break;       

            default:
                console.log("Unknown sort:",newSort)
        }

        fetchHumans(list);
    }

    const changeSortHandler = (newSort) =>{
        setSort(newSort)
        dynamicSort(Humans,newSort)
    }

  return (
    <div className='HumanList'>
      
      <h2>Check out these hoomans...</h2>

      {
          loadingAnim && <LoadingAnimation/>
      }

      {
          !loadingAnim && <>
            <div className='HumanListFiltersContainer'>
            <div className="ActualFilters">
                <div>
                    <input type="radio" id="ascending-name" name="filter" onClick={()=>{changeSortHandler("ascend-by-name")}}/>
                    <label htmlFor="ascending-name">Ascending by name</label>
                </div>

                <div>
                    <input type="radio" id="descending-name" name="filter" onClick={()=>{changeSortHandler("descend-by-name")}}/>
                    <label htmlFor="descending-name">Descending by name</label>
                </div>

                <div>
                    <input type="radio" id="ascending-role" name="filter" onClick={()=>{changeSortHandler("ascend-by-role")}}/>
                    <label htmlFor="ascending-role">Ascending by role</label>
                </div>

                <div>
                    <input type="radio" id="descending-role" name="filter" onClick={()=>{changeSortHandler("descend-by-role")}}/>
                    <label htmlFor="descending-role">Descending by role</label>
                </div>
            </div>
            </div>

            {
                Humans.map(human=>
                <div className='Human' onClick={()=>{navigate(`/human/${human.id}`)}} key={human.name}>
                    <img src={human.avatar}/>
                    <p>{human.name}</p>
                    <span>{human.role}</span>
                </div>
                )
            }
          </>
      }

      </div>
  )
}
