import TailButton from "../component/TailButton"
import TailBall from "../component/TailBall"
import { useState } from "react"

export default function Lotto() {
    const [lottoTag, setLottoTag] = useState([]);
    const handleClick = () =>{
        // console.log(lotto")
        //로또 번호 생성 버튼이 눌러지면 배열 항상 초기화
        let num= [];

        //중복되지 않는 7개 숫자
        while(num.length < 7){
          let n= Math.floor(Math.random() * 45)+1; //1~45

          if(!num.includes(n)) num.push(n);//num.includes(n) = n이 포함되어있느냐
         
        }
        //보너스
        let bonus = num.splice(-1);
         
         //num배열 정렬
         num.sort((a,b)=> a-b);
         console.log(num, bonus)

         //화면 출력을 위한 배열
         let lotto = [...num, '+', ...bonus];
         lotto = lotto.map(item=> item == '+' ? <span className="text-3xl font-bold m-2"
                                                      key={`n${item}`}>
                                                      {item} 
                                                </span>
                                                : <TailBall key={`n${item}`} 
                                                            n={item} />);

         console.log(lotto)
         setLottoTag(lotto)

    }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center my-10 h-10">
        {lottoTag}
      </div>
      <div>
        <TailButton caption = "로또번호생성" color="blue" onHandle={handleClick}/>
      </div>
    </div>
  )
}
