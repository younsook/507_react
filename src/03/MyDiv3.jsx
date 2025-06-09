import { CgChevronRight } from "react-icons/cg";

export default function MyDiv3({a,b,c}) {
  return (
    <div className='w-9/10 h-3/5 bg-blue-300
                    flex justify-start
                    p-10 text-2xl
                    text-white font-bold'>
      {a} <CgChevronRight className="text-4xl"/> {b}
      <CgChevronRight className="text-4xl"/> {c}
    </div>
  )
}
