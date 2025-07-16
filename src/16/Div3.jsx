import TailButton from "../component/TailButton";

export default function Div3({n, setN}) {

  const handleUp = () => {
    setN(n + 1) ;
  }

  const handleDown = () => {
    setN(n - 1) ;
  }

  return (
    <div className="w-full bg-blue-300
                    flex gap-4 items-center
                    p-4 text-lg text-white font-bold rounded">
      <span>Div3</span>
      <TailButton caption="증가" color="blue" onHandle={handleUp} />
      <TailButton caption="감소" color="blue" onHandle={handleDown} />
    </div>
  )
}
