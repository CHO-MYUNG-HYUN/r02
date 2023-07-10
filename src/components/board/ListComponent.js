import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import { useEffect, useState } from "react";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
  dtoList: [],
  end: 0,
  start: 0,
  next: false,
  prev: false,
  pageNums: [],
  page: 0,
  size: 0,
  requestDTO: null
}

const ListComponent = ({ queryObj, movePage, moveRead }) => {

  const [listData, setListData] = useState(initState)

  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    })

  }, [queryObj])



  return (
    <div className="h-full ml-[40%] ">
      <div className="">
        <ul className="text-2xl text-white">
          {listData.dtoList.map(({ bno, title, writer, replyCount }) =>
            <li
              key={bno}
              onClick={() => moveRead(bno)}
            >
              {bno} - {title} - [{replyCount}]
            </li>
          )}
        </ul>
      </div>

      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

    </div>
  );
}

export default ListComponent;


