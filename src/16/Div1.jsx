import Div2 from "./Div2"

export default function Div1({n, setN}) {
  return (
    <div className="w-4/5 max-w-3xl bg-blue-900
                    flex flex-col items-start
                    p-6 text-2xl text-white font-bold rounded">
        <div className="mb-4">Div1</div>
         <Div2 n={n} setN={setN}/>
    </div>
  )
}
