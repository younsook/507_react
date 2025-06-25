import { useState } from 'react'; // useState 가 가지고 오는 값을 배열로 나눠서 쓴다.
export default function MyListItem({title, imgUrl, content}) {
  //let cnt = 0;
  //state 변수(중요) 
  // 배열 cnt, setCnt 변수명 바꿀수있음
  const [cnt, setCnt] = useState(0);
  

  const handleUp = () => {
    // cnt = cnt +1;
    setCnt(cnt+1);
    console.log(title, cnt);
  }

  const handleDown = () => {
   
    //(cnt -1) < 0 ? setCnt(0)
    //cnt > 0 ? setCnt(cnt - 1) : null;

    if(cnt > 0){
      setCnt(cnt-1);
    }

  }

    return (
    <div className='w-full h-50 flex justify-start items-start
                    border-gray-400
                    border rounded-xl overflow-hidden'>
      <div className='w-1/3 h-full                                        
                      flex items-start justify-start'>
        <img src={imgUrl} />
      </div>
      <div className='w-3/4 p-5 h-full flex flex-col justify-between items-start'>
            <div className='w-full flex flex-col justify-start items-start'>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="w-full text-left text-sm flex justify-start items-start">{content}</p>
            </div>
            <div className='w-full h-4 flex justify-end items-center '>
              <span className='mx-4 cursor-pointer hover:text-red-300' onClick={handleUp}>❤좋아요</span>
              <span className='text-2xl'>{cnt}</span>
              <span className='mx-4 cursor-pointer hover:text-red-300' onClick={handleDown}>🤦‍♀️싫어요</span>
             
            </div>
      </div>
    </div>
  )
}
