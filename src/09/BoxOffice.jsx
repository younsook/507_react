import { useState, useEffect, useRef  } from "react"

export default function BoxOffice() {
    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const [info, setInfo] = useState('');
    const [today, setToday] = useState("");
    const yRef = useRef();  // ✅ 날짜를 ref로 관리

    const yesterday = () => {
    let yday = new Date();
    yday.setDate(yday.getDate() - 1); //어제 날짜

    return yday.toISOString().slice(0, 10);
    }

    const getFetchData = async () =>{
        const apikey = import.meta.env.VITE_MV_API; //VITE 프로젝트 경우
            //console.log("apikey: ",apikey)
        
        const dt = yRef.current.value.replaceAll("-", ""); // YYYY-MM-DD → YYYYMMDD
        const baseUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;

            console.log("url: ",url)
        const resp = await fetch(url);
        const data = await resp.json();
        // setTdata 10개를 넣었다.
        setTdata(data.boxOfficeResult.dailyBoxOfficeList)
            //console.log("data", data.boxOfficeResult.dailyBoxOfficeList)

        // fetch(url)
        // .then(resp => resp.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
            // console.log()
    }

    
    const handleItem =(item) => {
        console.log(item)
        setInfo(`[${item.movieNm}] 상영스크린수 : ${item.scrnCnt} 
          상영횟수 ${item.showCnt} 개봉일 ${item.openDt}`)  
    }

    useEffect(() => {
    console.log ('yesterday=', yesterday())
    yRef.current.max = yesterday() ;
    yRef.current.value= yesterday() ;
    getFetchData();
  }, []);

    const handleDateChange = () => {
    const selectedDate = dateRef.current.value;
    if (selectedDate) {
      getFetchData(selectedDate);
    }
  };

    // useEffect (()=>{
    //     getFetchData(); //getFetchData("apikey", apikey);
    // }, []);

    useEffect(() => {
      if (today) {
        getFetchData(today);  // today는 YYYY-MM-DD 형식
      }
    }, [today]);

   

    useEffect(()=>{
            console.log("tdata",tdata) //10개 배열로온다. (아무것도없는것은 setData초기설정시 빈값)
            //<tr key={item.movieCd}
        let tm = tdata.map((item) => 
         <tr key={item.movieCd} 
          onClick={() => handleItem(item)}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700
                     border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer
                     hover:text-blue-400"  >
                {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input
                        id="checkbox-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="checkbox-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <td className="px-6 py-4 text-center">{item.rank}</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.movieNm}
                </th>
                <td className="px-6 py-4 text-right">{parseInt(item.salesAmt).toLocaleString()}원</td>
                <td className="px-6 py-4 text-right">{parseInt(item.audiCnt).toLocaleString()}명</td>
                <td className="px-6 py-4 text-right">{parseInt(item.salesAcc).toLocaleString()}원</td>
                <td className="px-6 py-4 text-right">{parseInt(item.audiAcc).toLocaleString()}명</td>
                <td className="px-6 py-4 text-center">{item.rankOldAndNew == 'OLD'? "" : 
                        <span className="text-red-500 font-bold">new</span>}</td>
            </tr>
        )
        setTag(tm);
    }, [tdata]); //setTdata 여기로 온다.


    useEffect(() => {
      const now = new Date();
      now.setDate(now.getDate() - 1); // 🔥 하루 빼기 (어제)
      const formatted = now.toISOString().split("T")[0]; // YYYY-MM-DD
      setToday(formatted);
    }, []);

  return (
<div>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="text-sm text-gray-600 mb-2 text-right">
          {/* 날짜 기준:{" "}
          <input
            type="date"
            className="text-sm text-gray-600 border border-gray-300 rounded p-1"
            value={today}
            onChange={(e) => setToday(e.target.value)} //onChange={getFetchData}
          /> */}
          <labe for="dt" className='p-4 ps-10 text-gray-800 font-bold' >날짜선택</labe>
          <input type="date"  id="dt"
                 className="text-sm text-gray-600 border border-gray-300 rounded p-1"
                 ref={yRef} 
                 onChange={getFetchData}/>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th> */}
            <th scope="col" className="px-6 py-3 text-center">순위</th>
            <th scope="col" className="px-6 py-3 text-center">영화명</th>
            <th scope="col" className="px-6 py-3 text-center">매출액</th>
            <th scope="col" className="px-6 py-3 text-center">관객수</th>
            <th scope="col" className="px-6 py-3 text-center">누적 매출액</th>
            <th scope="col" className="px-6 py-3 text-center">누적 관객수</th>
            <th scope="col" className="px-6 py-3 text-center">신규진입여부</th>
          </tr>
        </thead>
        <tbody>
            {tag}             
        </tbody>  
      </table>
    </div>
    <div className="w-full h-10 bg-amber-100 mt-5
                flex justify-center items-center text-blue-800 font-bold">
      {info}
    </div>
</div>
  )
}
