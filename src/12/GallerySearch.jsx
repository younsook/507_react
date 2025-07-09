import TailButton from "../component/TailButton";
import TailSearch from "../component/TailSearch";

export default function GallerySearch({kwRef, onOk, onCancel}) {

  return (
    <form className="w-8/10 lg:w-6/10 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">       
        <input
            type="text"
            id="kw" ref={kwRef}
            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 px-3 py-2
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />       
        <TailButton caption="확인" color="blue" onHandle={onOk} />
        <TailButton caption="취소" color="blue" onHandle={onCancel} />
    </form>
  )
}
