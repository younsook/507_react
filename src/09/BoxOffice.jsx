import { useState, useEffect } from "react"

export default function BoxOffice() {
    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const getFetchData = async () =>{
        const apikey = import.meta.env.VITE_MV_API; //VITE 프로젝트 경우
            console.log("apikey: ",apikey)
        const dt = "20250702"
        const baseUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;

            console.log("url: ",url)
        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.boxOfficeResult.dailyBoxOfficeList)
            //console.log("data", data.boxOfficeResult.dailyBoxOfficeList)

        // fetch(url)
        // .then(resp => resp.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
            // console.log()
    }
    useEffect (()=>{
        getFetchData(); //getFetchData("apikey", apikey);
    }, []);

    useEffect(()=>{
            console.log("tdata1",tdata)
        let tm = tdata.map((item) => 
         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                <td className="px-6 py-4">{item.rank}</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.movieNm}
                </th>
                <td className="px-6 py-4">{parseInt(item.salesAmt).toLocaleString()}원</td>
                <td className="px-6 py-4">{parseInt(item.audiCnt).toLocaleString()}명</td>
                <td className="px-6 py-4">{parseInt(item.salesAcc).toLocaleString()}원</td>
                <td className="px-6 py-4">{parseInt(item.audiAcc).toLocaleString()}명</td>
            </tr>
        )
        setTag(tm);
    }, [tdata]);

    useEffect(()=>{

    },[tag])
  return (
    <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
        <th scope="col" className="px-6 py-3">순위</th>
        <th scope="col" className="px-6 py-3">영화명</th>
        <th scope="col" className="px-6 py-3">매출액</th>
        <th scope="col" className="px-6 py-3">관객수</th>
        <th scope="col" className="px-6 py-3">누적 매출액</th>
        <th scope="col" className="px-6 py-3">누적 관객수</th>
      </tr>
    </thead>
    <tbody>
        {tag}
    </tbody>
  </table>
</div>


    </div>
  )
}
