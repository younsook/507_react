import Div1 from "./Div1"
import { useEffect, useState } from "react"
import { useAtom } from "jotai";
import {cntAtom, cntAtom2} from "./CntAtoms";

export default function DivMain() {
    const [n, setN] = useAtom(cntAtom);
    const [n2] = useAtom(cntAtom2);

    const state = { n, n2, setN };


  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        {/* 상태 출력 */}
        <div className="mb-4 text-xl font-bold text-gray-800">
            n = {n} | n2 = {n2}
        </div>

        {/* DivMain 텍스트 + Div1을 감싸는 박스 */}
        <div className="mb-4 w-4/5 max-w-4xl text-white bg-amber-800 p-6 rounded shadow-lg">
            <div className="text-2xl font-bold mb-4">DivMain useAtom</div>

            {/* Div1을 감싸는 파란색 박스 */}
            <div className="bg-blue-900 p-6 rounded shadow w-full">
            <Div1  />
            </div>
        </div>
</div>

  )
}
