import kind from "./kind.json"
import zcode from "./zcode.json"
import zscode from "./zscode.json"
import stat from "./stat.json"

import TailSelct from "../component/TailSelct"
import TailButton from "../component/TailButton"
import TailCard from "../component/TailCard"
import TailPageNation from "../component/TailPageNation"

import { useState, useRef, useEffect } from "react"

export default function ChargerInfo() {

    const [zs, setZs] = useState([]); // 지역 동 목록
    const [tdata, setTdata] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const perPage = 12;
    //asdfasdfsadf   setTotalPage   setTotalPage(Math.ceil(totalCount / perPage))
 

    //select box ref
    const kindRef = useRef(); //충전소 구분
    const zcodeRef = useRef();  //지역 선택
    const zscodeRef = useRef(); //지역 동 선택

     console.log(Object.keys(zcode))


    //datafetch 함수 데이터 패치 함수 TailButton 검색 버튼 클릭 시
    const getDataFetch = async(cpage) =>{
   
         // 1. 지역 미선택
        if(zcodeRef.current.value == ""){
            alert("지역을 먼저 선택해 주세요.");
            zcodeRef.current.focus();
            setZs([]);
            return;
        }
        // 2. 동/구분 미선택
        if(zscodeRef.current.value == "" && kindRef.current.value == ""){
            alert("지역 동이나 충전소 구분을 선택해 주세요.");
            zscodeRef.current.focus();
            return;
        }
        console.log("검색 조건:", { zcode, zscode, kind });

        ////////////////////////////////
            const apiKey = import.meta.env.VITE_DATA_API;
            const baseUrl = "https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?";
            let url = `${baseUrl}serviceKey=${apiKey}&numOfRows=${perPage}&pageNo=${cpage}&dataType=JSON`;

            if (zcodeRef.current.value !=""){
                url = `${url}&zcode=${zcodeRef.current.value}`
            }
            if (zscodeRef.current.value !=""){
                url = `${url}&zscode=${zscodeRef.current.value}`
            }
            if (kindRef.current.value !=""){
                url = `${url}&kind=${kindRef.current.value}`
            }
            console.log(url)
            //console.log("apiKey", apiKey); 

        const resp = await fetch(url) ; //패치해서
        const data = await resp.json() ; //데이터를 가져온다

        setTotalCount(data.totalCount);
        setTdata(data.items.item) ;    
        // setCurrentPage(cpage)
        // setTdata(data.items.item)

        ////////////////////////////////
    }


    //select box handel 함수
    const handleKind = () =>{ //충전소 구분
        if(zcodeRef.current.value == ""){
            alert("지역을 먼저 선택해 주세요.");
            zcodeRef.current.focus();
            kindRef.current.value = "";
            return;
        }
       // console.log("충전소",kidRef.current.value)
    }
    const handleZcode = () =>{ //지역 선택
        //console.log("지역",zcodeRef.current.value)
        const code = zcodeRef.current.value;
        setZs(zscode[zcodeRef.current.value]);
    }
    const handleZscode = () =>{ //지역 동 선택
        //console.log("지역 동",zscodeRdf.current.value)
        //setZscode(zscodeRdf.current.value);
    }

   
    //useEffect
    useEffect(()=>{
        setTotalPage(Math.ceil(totalCount / perPage))
         console.log("tdata",tdata)
        console.log("totalCount",totalCount)
    },[tdata,totalCount ])

    useEffect(() => {
        getDataFetch(currentPage);
    }, [currentPage]);

  return (
    <div className="w-full flex flex-col gap-6">
        <div className="w-9/10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <TailSelct selRef={zcodeRef}
                        handleSel={handleZcode}
                        dText="지역 선택"
                        opv={Object.keys(zcode)}
                        opt={Object.values(zcode)}/>
        <TailSelct selRef={zscodeRef}
                        handleSel={handleZscode}
                        dText="지역 동 선택"
                        opt={zs ? Object.keys(zs) : []}
                        opv={zs ? Object.values(zs) : []}/> 
                    
        <TailSelct selRef={kindRef}
                        handleSel={handleKind}
                        dText="충전소 구분"
                        opv={Object.keys(kind)}
                        opt={Object.values(kind)}/>
        <TailButton caption="검색" 
                        color="blue" 
                        onHandle={()=>getDataFetch(1)} />
        </div>                        
        <div className="px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        tdata.map(item =><TailCard 
                            key={`${item.statId}-${item.chgerId}`}
                            galTitle={item.statNm} 
                            
                            galPhotographyLocation={`${item.bnm}(${item.addr},${item.busiCall})`} 
                            galSearchKeyword={`${item.useTime}
                                ${stat[item.stat]==undefined? '': ','+stat[item.stat]}
                            `} 
                            // ,주차료${}
                            />)
                    }
                </div>
                <div className="w-full">
                    <TailPageNation currentPage={currentPage}
                                    totalPage={totalPage}
                                    onPageChange={(page) => setCurrentPage(page)}/>
                </div>
            </div>
        
    </div>
  )
}
