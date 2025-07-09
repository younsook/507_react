import TailCard from "../component/TailCard"
import { useEffect, useState, useRef } from "react";

export default function Festival() {
    const [festivals, setFestivals] = useState([]);
    const [gugunList, setGugunList] = useState([]); // 구 리스트 저장
    const [selectedGugun, setSelectedGugun] = useState("");
    const [Tag, setTag] = useState(null);   // JSX 요소로 구성된 리스트
    const selRef =useRef();

     useEffect(() => {
    const fetchFestivalData = async () => {
      const apiKey = import.meta.env.VITE_DATA_API; 
      const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apiKey}&pageNo=1&numOfRows=41&resultType=json`;

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        const items = data?.getFestivalKr?.item ?? [];
        // 전체 축제 데이터 저장
        setFestivals(Array.isArray(items) ? items : [items]); //setTdata

        console.log(items)
        // 구 정보 추출 및 중복 제거
        const guguns = [
          ...new Set(items.map((item) => item.GUGUN_NM).filter(Boolean)),
        ].sort();

        setGugunList(guguns);
      } catch (err) {
        console.error("축제 데이터 패치 실패:", err);
        setFestivals([]);
      }
    };

    fetchFestivalData();
  }, []);
    // 선택된 구에 따라 필터링
  const filteredFestivals = selectedGugun
    ? festivals.filter((item) => item.GUGUN_NM === selectedGugun)
    : festivals;

  return (
    <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">부산축제정보</h2>
      <form className="max-w-sm mx-auto mb-6 w-full px-4">
        <div className="flex items-center gap-2">
            <label htmlFor="gu" className="text-base font-medium  text-gray-900 whitespace-nowrap ">
                지역선택:</label>
            <select
            id="gugun"
            ref={selRef}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={selectedGugun}
            onChange={(e) => setSelectedGugun(e.target.value)}
            >
            <option value="">-- 전체 구 축제 --</option>
            {gugunList.map((gugun) => (
                <option key={gugun} value={gugun}>
                {gugun}
                </option>
            ))}
            </select>
        </div>
        </form>
        {/* <div className="m-8">
           <TailCard
            galTitle="예시 제목"
            galWebImageUrl="https://via.placeholder.com/400x300"
            galPhotographyLocation="부산 해운대구"
            galSearchKeyword="축제, 부산"
            />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] max-w-6xl ">
            {filteredFestivals.map((item) => (
                <TailCard
                    key={item.UC_SEQ}
                    galTitle={item.TITLE}
                    galWebImageUrl={item.MAIN_IMG_NORMAL}
                    galPhotographyLocation={item.USAGE_DAY_WEEK_AND_TIME || item.MAIN_PLACE}
                    galSearchKeyword={item.PLACE || item.SUBTITLE}
                />
            ))}
      </div>
    </div>
  )
}
