import Div3 from "./Div3"
import { useAtom } from "jotai"
import { cntAtom } from "./CntAtoms"
export default function Div2() {
   const [cnt] = useAtom(cntAtom) ;
  return (
    <div className="w-4/5 max-w-2xl bg-blue-500
                flex flex-col items-start
                p-4 text-xl text-white font-bold rounded mx-auto">
      <div className="mb-4">Div2 n={cnt}</div>
      <Div3 />
    </div>
  )
}
