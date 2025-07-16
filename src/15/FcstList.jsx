
import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react";
import getcode from "./getcode.json"

export default function FcstList() {
    const [sparams] = useSearchParams();
    const [tdata, setTdata] = useState([]); 
    const [selectedArea, setSelectedArea] = useState('');



    const gubun = sparams.get('gubun');
    const dt = sparams.get('dt');
    const area = sparams.get('area');
    const x = sparams.get('x');
    const y = sparams.get('y');

    // 예보 구분에 맞는 항목들만 필터링
    const ops = getcode.filter(item =>item['예보구분'] == `${gubun}예보`);
    console.log(ops);



    const getFetchData = async() => {
    const apikey = import.meta.env.VITE_DATA_API ;
    let baseUrl ;
        if(gubun == '초단기'){
            baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?'
        }else{
            baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        }
    let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json`;
        url = `${url}&base_date=${dt.replaceAll('-','')}&base_time=${gubun == '초단기' ? '0630':'0500' }`
        url = `${url}&nx=${x}&ny=${y}`
        console.log(url)

      const resp = await fetch(url) ;
      const data = await resp.json() ;
      const items = data.response.body.items.item;
      console.log("받아온 데이터:", items);

      setTdata(items) ;
  }

  // const handleShow = (e)=>{
  //   const unit = getcode.filter
  //   const skyUnit ={
  //     "0" : "맑음(0)",
  //     "3" : "구름많음(1☔)",
  //     "4" : "흐림(2☔❄)"
  //   }

  //   const ptyUnit = {
  //     "0" : "없음(0)",
  //     "1" : "비(1☔)",
  //     "2" : "비/눈(2☔❄)",
  //     "3" : "눈(3❄)",
  //     "4" : "소나기(4)",
  //     "5" : "빗방울(5💧)",
  //     "6" : "빗방울눈날림(6💧❄)",
  //     "7" : "눈날림(7❄)"
  //   }

  //   const tm = tdata.filter(item =>item["category"] == e.target.value)
  //   console.log(tm)

  // }

    const getCategoryInfo = (code) => {
    const match = getcode.find(item => item['항목값'] === code && item['예보구분'] === `${gubun}예보`);
    return match ? `${match['항목명']} [${match['항목값']}] ` : code;
     }; //${match['항목명']} [${match['항목값']}] [${match['단위']}]

     
      // fcstValue를 의미있는 텍스트로 변환하는 함수
    const getDisplayValue = (category, value) => {
        if (category === 'SKY') {
            const skyUnit = {
                "1": "맑음☀",
                "3": "구름많음☁",
                "4": "흐림🌪"
            };
            return skyUnit[value] || value;
        }
        if (category === 'PTY') {
            const ptyUnit = {
                "0": "없음",
                "1": "비🌧",
                "2": "비/눈🌧❄",
                "3": "눈🌨❄",
                "4": "소나기🌧",
                "5": "빗방울💧",
                "6": "빗방울눈날림💧❄",
                "7": "눈날림🌨❄"
            };
            return ptyUnit[value] || value;    
        }

        // 다른 항목들은 단위를 붙여서 반환
        const match = ops.find(item => item['항목값'] === category);
        const unit = match && match['단위'] && match['단위'] !== '없음' ? match['단위'] : '';


        // value가 숫자일 경우 단위를 괄호 없이 공백으로 붙임
        if (!isNaN(value)) {
            return unit ? `${value} ${unit}` : value;
        }

        // 문자열일 경우 단위를 [ ]로 감싸서 붙임
        return unit ? `${value} [${unit}]` : value;
    };

     //일자포멧
     const formatDate = (dateStr) => {
        if (dateStr.length === 8) {
          return `${dateStr.slice(0, 4)}.${dateStr.slice(4, 6)}.${dateStr.slice(6, 8)}`;
        }
        return dateStr;
      };

      //시간포멧
      const formatTime = (timeStr) => {
        if (timeStr.length === 4) {
          return `${timeStr.slice(0, 2)}:${timeStr.slice(2, 4)}`;
        }
        return timeStr;
      };


    const handleSelectChange = (e) => {
      setSelectedArea(e.target.value);
      console.log("select: "+e.target.value)
    };

    useEffect(()=>{
        console.log(gubun,dt,area,x,y)
        getFetchData();
    },[]) //[gubun, dt, area, x, y]); // 의존성 배열을 명확하게 하여 불필요한 재호출 방지
  return (
   
      <div className="w-9/12 flex flex-col items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div className="text-2xl font-bold">
            {area} {gubun} 예보  ({dt.replaceAll('-','.')})  
        </div>
             <select id="area" 
             onChange={handleSelectChange}
             className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
           <option value=''>---항목 선택---</option>
           {
            ops.map(item =>
            <option key={item['항목값']} value={item['항목값']}>
                        {`${item["항목명"]} [${item["항목값"]}]`}
            </option>
            )
           }

        </select>
      </div>


    <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">항목명[항목값]</th>
            <th scope="col" className="px-6 py-3 text-center">예측일자</th>
            <th scope="col" className="px-6 py-3 text-center">예측시간</th>
            <th scope="col" className="px-6 py-3 text-center">예측값</th>
          </tr>
        </thead>
        <tbody>
          {tdata
            .filter(item => item.category === selectedArea) // 예: 항목값 기준 필터
            .map((item, idx) => (
                <tr key={idx} 
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700
                          border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer
                          hover:text-blue-400"  >
                      <td className="px-6 py-4 text-center">{getCategoryInfo(item.category)}</td>
                      <td className="px-6 py-4 text-center">{formatDate(item.fcstDate)}</td>
                      <td className="px-6 py-4 text-center">{formatTime(item.fcstTime)}</td>
                      <td className="px-6 py-4 text-center">{getDisplayValue(item.category, item.fcstValue)}</td>                
                  </tr>  
             ))}     
        </tbody>  
      </table>
    </div>

       
      </div>
    
  
  )
}
