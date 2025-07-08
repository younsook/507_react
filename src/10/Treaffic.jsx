import { useState, useEffect } from "react"
import TreafficNav from "./TreafficNav";

export default function Treaffic() {
    //1.fetch data
    const [tdata, setTdata] = useState([]); //초기값 빈 배열 설정함.
    
    //5.대분류 data
    const [c1, setC1] = useState([]);

    //9.선택된 대분류 → 배열아니고 문자열이거나 값
    const [selC1, setSelC1] = useState(null); 

    //10.선택된 대분류(selC1)에 따른 중분류 목록 저장 //12.사고유형 데이터
    const [c2, setC2] = useState([]);   

    //15.선택된 사고유형, 클릭한 중분류 항목을 저장
    const [selC2, setSelC2] = useState(null); 

    //16.선택된자료
    const [info, setInfo] = useState(null); 
    const [infoTag, setInfoTag] = useState([]);



    //3.fetch 함수: 비동기식 함수 → async 해야함.
    const getFetchData = async () =>{
        const baseUrl ='https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?';
        const url = `${baseUrl}page=1&perPage=18&serviceKey=${import.meta.env.VITE_DATA_API}`;
            console.log(url)
        const resp = await fetch(url);
        const data = await resp.json();
            console.log("data",data.data)  //fetch해서 data를 가져옴
        setTdata(data.data) 
    }
    
    //2.컴포넌트가 시작되면 fetch
    useEffect(()=>{
        //데이터 fetch (비동기함수)
        getFetchData();
    }, []);

    //4.전체 데이터가 fetch후 변경되었을때 대분류 생성
    useEffect(()=>{
          console.log("tdata",tdata) 
        //4-1.useState에 의해 초기화 될때
        if (tdata.length ==0) return;

        //6.fetch tdata 변경이 되었을때 
        let tm = tdata.map((item)=>item['사고유형대분류']) 
        //7.tm배열의 중복을 없애는것 Set
        tm = [...new Set(tm)];//집합이됨 그래서 ...전개연산자로 집합을 풀어서 배열로 다시 넣는다
        //8.대분류 생성
        setC1(tm);

    },[tdata]);

    //11.대분류 중에서 특정 항목이 선택되었을때
    useEffect(() => {
      //11-1.대분류가 초기화되어 선택 항목이 없을때
    if (!selC1 || tdata.length === 0) return; //if(!selC1) retrun;
        console.log("선택 대분류 : ", selC1)
      //13.사고유형 목록 생성
      const tm = tdata.filter((item) => item["사고유형대분류"] === selC1)
                         .map((item) => item["사고유형"]);
      //14.중분류 생성
      setC2([...new Set(tm)]);
      setInfoTag('');
    }, [selC1, tdata]);
    
    //16.사고유형이 선택되었을때 
    // useEffect(() => {
    //   if(!selC1 || !selC2 || !c2) retrun;

    //   let tm = tdata.filter(item => item["사고유형대분류"] == sel1 && 
    //                               item["사고유형"] == sel2  
    //                             )
    //   setInfo(tm[0])
    // }, [selC2]);
    //16.사고유형이 선택되었을때 
    useEffect(() => {
      if (!selC1 || !selC2 || tdata.length === 0) return;

      const tm = tdata.filter(item =>
                              item["사고유형대분류"] === selC1 &&
                              item["사고유형"] === selC2
      );
      setInfo(tm[0]); // 첫 번째 항목을 선택
    }, [selC2]);

    //17.사고유형이 결정이되면
       useEffect(() => {
        console.log("info", info)
        if (!info) return;

        let tm =["사고건수","사망자수","중상자수","경상자수","부상신고자수"];
        tm = tm.map(item=><div key={item} className="flex text-lg p-2 mx-2
                                          border">
                          <div className="bg-blue-600 text-white font-bold rounded-lg">
                            {item}</div>
                          <div>{info[item]}</div>
                          </div>)
        setInfoTag(tm)
      }, [info]);
    
  return (
    <div>

      {c1 && <TreafficNav title="대분류" 
      c={c1} 
      sel = {selC1}
      setSel = {setSelC1}/>}

      {c2.length > 0 && (
      <TreafficNav
        title="중분류"
        c={c2}
        sel={selC2}
        setSel={setSelC2}
      />
    )}
      <div className="flex justify-center items-center grid-cols-5">
        {infoTag}
      </div>
    </div>
  )
}
