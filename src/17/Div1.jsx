import Div2 from "./Div2"
import { useAtom } from "jotai"
import { cntAtom2 } from "./CntAtoms"
export default function Div1() {
  const [cnt2] = useAtom(cntAtom2) ;
  return (
    <div className="w-4/5 max-w-3xl bg-blue-900
                    flex flex-col items-center
                    p-6 text-2xl text-white font-bold rounded">
        <div className="mb-4">Div n2= {cnt2}</div>
         <Div2 />
    </div>
  )
}
