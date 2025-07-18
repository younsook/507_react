import kind from "./kind.json"
import zcode from "./zcode.json"
import zscode from "./zscode.json"

import TailSelct from "../component/TailSelct"
import TailButton from "../component/TailButton"

import { useState, useRef } from "react"

export default function Elv() {

    //select box ref
    const kidRef = useRef(); //충전소 구분
    const zcodeRef = useRef();  //지역 선택
    const zscodeRdf = useRef(); //지역 동 선택
    const [zs, setZs] = useState("");
    const [dZscode, setZscode] = useState("");
    const [Kind, setKind] = useState("");
    const [submit, setSubmit] = useState(false); // TailCard 표시 여부

    //select box handel 함수
    const handleKind = () =>{ //충전소 구분
        if(zcodeRef.current.value == ""){
            alert("지역을 먼저 선택해 주세요.");
            zcodeRef.current.focus();
            kidRef.current.value = "";
            return;
        }
        console.log("충전소",kidRef.current.value)
    }

    const handleZcode = () =>{ //지역 선택
        console.log("지역",zcodeRef.current.value)
        const code = zcodeRef.current.value;
        setZs(zscode[code]);
    }

    const handleZscode = () =>{ //지역 동 선택
        console.log("지역 동",zscodeRdf.current.value)
        setZscode(zscodeRdf.current.value);
    }

    // 1. TailButton 핸들 함수 정의 handleSearch
    const handleSearch = () => {
        const seledZcode = zcodeRef.current.value;
        const seledZscode = zscodeRdf.current.value;
        const seledKind = kidRef.current.value;
  
        // 1. 지역 선택되지 않음
        if (!seledZcode) {
            alert("지역을 먼저 선택해 주세요.");
            return;
        }

        // 2. 지역은 선택했지만, 지역 동이 선택되지 않음
        if (!seledZscode) {
            alert("지역 동을 선택해 주세요.");
            return;
        }

        // 3. 지역은 선택했지만, 충전소 구분이 선택되지 않음
        if (!seledKind) {
            alert("충전소 구분을 선택해 주세요.");
            return;
        }

        // 검색 실행
        console.log("검색 실행");
        console.log("지역:", seledZcode);
        console.log("동:", seledZscode);
        console.log("충전소 구분:", seledKind);

        // API 호출
    };

  return (
    <div className="w-9/10 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <TailSelct selRef={zcodeRef}
                    handleSel={handleZcode}
                    dText="지역 선택"
                    opv={Object.keys(zcode)}
                    opt={Object.values(zcode)}/>
      <TailSelct selRef={zscodeRdf}
                    handleSel={handleZscode}
                    dText="지역 동 선택"
                    opt={Object.keys(zs)}
                    opv={Object.values(zs)}/> 
                   
      <TailSelct selRef={kidRef}
                    handleSel={handleKind}
                    dText="충전소 구분"
                    opv={Object.keys(kind)}
                    opt={Object.values(kind)}/>
      <TailButton caption="검색" color="blue" onHandle={handleSearch} />
    </div>
  )
}
