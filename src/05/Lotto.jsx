import TailButton from "../component/TailButton"
import TailBall from "../component/TailBall"

export default function Lotto() {
    const handleClick = () =>{
        console.log("lotto")
    }
  return (
    <div className="flex">
      <TailBall n="10"/>
      <TailBall n="20"/>
      <TailBall n="30"/>
      <TailBall n="40"/>
      <TailBall n="50"/>
      <TailBall n="60"/>
      <TailButton caption = "로또번호생성" color="blue" onHandle={handleClick}/>
    </div>
  )
}
