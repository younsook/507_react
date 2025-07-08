import TailButton from "../component/TailButton"
import { useState, useRef } from "react";
export default function MyRef() {
    //컴포넌트 변수
    let cnt = 0;

    //상태 변수
    const rcnt = useRef(0);

    const [scnt, setScnt] = useState(0);

    const handleCnt = () =>{
        cnt = cnt +1;
        console.log("cnt=",cnt)
    }

    const handleSCnt =() =>{
        setScnt(scnt  +1);
    }

    const handleRCnt =() =>{
        rcnt.current = rcnt.current +1;
    }
  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      <div className="text-blue-600 text-lg font-bold">
        컴포넌트 변수 : {cnt}
      </div>
      <div className="text-orange-600 text-lg font-bold">
        State 변수 : {scnt}
      </div>
      <div className="text-green-600 text-lg font-bold">
        Ref 변수 : {rcnt.current}
      </div>
      <div  justify-between>
        <TailButton caption = "컴포넌트 변수"
            color = "blue"
            onHandle ={handleCnt} />
      </div>
      <div>
        <TailButton caption = "State 변수"
            color = "orange"
            onHandle ={handleSCnt} />
      </div>
      <div>
        <TailButton caption = "Ref 변수"
            color = "green"
            onHandle ={handleRCnt} />
      </div>
    </div>
  )
}
