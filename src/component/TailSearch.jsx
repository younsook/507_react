import TailButton from "../component/TailButton";

export default function TailSearch({kwRef, onOk, onCancel}) {
  return (
    <form className="w-8/10 lg:w-6/10 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">       
        <input
            type="text"
            id="kw" ref={kwRef}
            placeholder="검색어를 입력하세요"
            className="h-[60px] w-full px-4 text-sm text-gray-900 rounded-lg border border-gray-300 
             bg-gray-50 focus:ring-blue-500 focus:border-blue-500 leading-[60px]" />       
        <TailButton caption="확인" color="blue" onHandle={onOk} />
        <TailButton caption="취소" color="blue" onHandle={onCancel} />
    </form>
  )
}
