import Div3 from "./Div3"

export default function Div2({n, setN}) {
  return (
    <div className="w-full bg-blue-500
                    flex flex-col items-start
                    p-4 text-xl text-white font-bold rounded">
      <div className="mb-4">Div2</div>
      <Div3 n={n} setN={setN}/>
    </div>
  )
}

