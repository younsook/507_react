import { useState, useEffect } from "react";
import TailButton from "../component/TailButton";

export default function TreafficNav({ title, c, sel, setSel  }) {

  const [tag, setTag] = useState([]);

  useEffect(() => {
    let tm = c.map((item, idx) => (
                                    <TailButton
                                      key={item}
                                      caption={item}
                                      color={item == sel ? "orange" : "blue"}
                                      onHandle={() => setSel(item)}
                                    />
    ));
    setTag(tm);
  }, [c, sel, setSel]);

  const handleClick = (item) => {
    console.log("handleClick", item);
  };

  return (
    <div className="w-5xl flex justify-between items-center">
      <div className="text-lg font-semibold h-3.5">
        교통사고 {title}
      </div>
      <div className="flex flex-wrap gap-2 justify-end">
        {tag}
      </div>
    </div>
  );
}
