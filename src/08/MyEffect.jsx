import { useEffect, useState } from "react"
import TailButton from "../component/TailButton";

export default function MyEffect() {

    const [cnt, setCnt] = useState(0);
    //useEffect 3가지.
    // useEffect(()=>{},[]); //첫번째 인수로들어가는 함수는 무조건 실행 ()=>{} 뒤, [] = 언제 실행시켜줄것인가 : 맨처음실행될때 1번
    // useEffect(()=>{},[cnt]); //특정 state 변수가 들어갈때, 변수가 변경되면 실행
    // useEffect(()=>{}); //state 변수가 아무것도 없을때 무조건 실행.
    useEffect(()=>{
        console.log("useEffect []", cnt)
    },[]); 
    useEffect(()=>{
        console.log("useEffect [cnt]", cnt)
    },[cnt]); 
    useEffect(()=>{
        console.log("useEffect :", cnt)
    }); 

    const handleUp =() =>{
        setCnt(cnt +1)
        console.log("handleUp" , cnt)
    }
    const handleDawn =() =>{
        setCnt(cnt -1)
        console.log("handleDawn" , cnt)
    }

  return (
    <div className="text-2xl">
      MyEffect cnt : {cnt}
      <TailButton caption="＋"
            color="orange"
            onHandle={handleUp}/>
        <TailButton caption="－"
            color="blue"
            onHandle={handleDawn}/>
    </div>
  )
}
