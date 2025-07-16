import TailButton from "../component/TailButton";
import { useAtom } from "jotai";
import {cntAtom, cntAtom2} from "./CntAtoms";

export default function Div3() {
  const [n, setN] = useAtom(cntAtom);

  return (
    <div className="w-4/5 max-w-xl bg-blue-100
                flex gap-4 items-center
                p-4 text-lg text-black font-bold rounded mx-auto">
      <span>Div3</span>
      <TailButton caption="증가" color="blue" onHandle={() => {setN(n+1)}} />
      <TailButton caption="감소" color="blue" onHandle={() => {setN(n-1)}} />
    </div>
  )
}
