import Div1 from "./Div1"
import { useEffect, useState } from "react"

export default function DivMain() {
    const [n, setN] = useState(0);
    const [n2, setN2] = useState(0);

    useEffect(() => {
    setN2(n * 2)
  } , [n]) ;

    const state = { n, n2, setN, setN2 };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        {/* 상태 출력 */}
        <div className="mb-4 text-xl font-bold text-gray-800">
            n = {n} | n2 = {n2}
        </div>

        {/* DivMain 텍스트 + Div1을 감싸는 박스 */}
        <div className="mb-4 w-4/5 max-w-4xl text-black bg-amber-200 p-6 rounded shadow-lg">
            <div className="text-2xl font-bold mb-4">DivMain</div>

            {/* Div1을 감싸는 파란색 박스 */}
            <div className="bg-blue-900 p-6 rounded shadow w-full">
            <Div1 n={n} setN={setN} />
            </div>
        </div>
</div>

  )
}
