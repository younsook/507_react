import TailCard from "../component/TailCard"
import TailSearch from "../component/TailSearch"
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
        const kwRef = useRef();         // 검색어 ref
        const [keyword, setKeyword] = useState("");  // 상태로 저장
        const [items, setItems] = useState([]);
        const [Tag, setTag] = useState(null);   // JSX 요소로 구성된 리스트
        const [tdata, setTdata] = useState([]);

        const handleOk = async (e) => {
            e.preventDefault();
            const kw = kwRef.current.value.trim();
            if (!kw) {
            alert("검색어를 입력하세요.");
            kwRef.current.focus(); 
            return;
            }
            setKeyword(kw);

            const apiKey = import.meta.env.VITE_DATA_API;
            const baseUrl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
            const url = `${baseUrl}serviceKey=${apiKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURIComponent(kw)}&_type=json`;

            try {
                const resp = await fetch(url);
                const data = await resp.json();

                const items = data?.response?.body?.items?.item ?? [];

                setTdata(Array.isArray(items) ? items : [items]);
                // // 단일 객체일 경우 배열로 변환
                // setItems(Array.isArray(items) ? items : [items]);
            } catch (err) {
                console.error("fetch 실패:", err);
                setItems([]); // 실패시 비워주기
            }


        };

        const handleCancel = (e) => {
            e.preventDefault();
            if (kwRef.current) kwRef.current.value = "";
            setKeyword("");
        };

        useEffect(() => {
            kwRef.current?.focus(); // 마운트 시 포커스
        }, []);

         // ✅ tdata가 변경되면 Tag 목록 생성
        useEffect(() => {
            const cards = tdata
            .filter(Boolean)
            .map((item) => (
                    <TailCard
                                key={item.galContentId}
                                galTitle={item.galTitle}
                                galWebImageUrl={item.galWebImageUrl}
                                galPhotographyLocation={item.galPhotographyLocation}
                                galSearchKeyword={item.galSearchKeyword}
                    />
            ));
            setTag(cards); // set JSX elements
        }, [tdata]);

        // const dummy = [
        //     {
        //         galContentId: "3392559",
        //         galTitle: "해운대블루라인파크",
        //         galWebImageUrl: "http://tong.visitkorea.or.kr/cms2/website/59/3392559.jpg",
        //         galPhotographyLocation: "부산광역시 해운대구 중동",
        //         galSearchKeyword:
        //         "해운대블루라인파크, 부산광역시 해운대구, 테마파크, 체험관광지, 해운대 스카이캡슐, 드론촬영, 드론사진, 항공촬영, 8월 추천여행지, 사진기자단, 프레임코리아2기",
        //     },
        //     ];

        //     useEffect(() => {
        //     setItems(dummy); // 임시로 카드 1장 보이게
        //     }, []);

  return (
    <div className="w-full flex flex-col items-center">
        <div className="text-2xl font-bold ">
                한국관광공사 관광사진 정보
        </div>
        
      <TailSearch kwRef={kwRef} onOk={handleOk} onCancel={handleCancel} />

      <div className="mt-10 w-[90%] max-w-4xl">
        {keyword ? (
          <div className="text-xl font-bold text-blue-600 mb-4">
            🔍 검색어: <span className="text-black">{keyword}</span>
          </div>
        ) : (
          <div className="text-gray-400">검색어를 입력하세요.</div>
        )}


        {/* JSX로 구성된 Tag 리스트를 렌더링 */}
        {Tag && Tag.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Tag}
          </div>
        )}

        
      </div>
    </div>
  )
}
