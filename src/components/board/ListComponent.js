import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import { useEffect, useState } from "react";

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

const ListComponent = ({ queryObj, movePage }) => {

  const [listData, setListData] = useState(initState)

  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    })

  }, [queryObj])

  const handleClickPage = (pageNum) => {
    movePage(pageNum)
  }

  return (
    <div className="h-96 bg-red-300 relative">
      <div>List Components</div>
      <div className="relative">
        <ul className="">
          {listData.dtoList.map(({ bno, title, writer, replyCount }) =>
            <li key={bno}>{bno} - {title} - [{replyCount}]</li>
          )}
        </ul>
      </div>
      <div className=" m-2 p-2 bg-black  absolute bottom-0">
        <ul className=" flex border-4 left-1/2 ">
          {listData.prev ? <li 
          className="m-1 pb-1 px-1 bg-blue-800 border-2 text-white font-bold rounded-md"
          onClick={() => movePage(listData.start-1)}
          >
             PREV</li> : <></>}

          {listData.pageNums.map(num =>
            <li
             className="  m-1 pb-1 px-1 bg-blue-800 border-2 text-white font-bold rounded-md" key={num}
              onClick={() => movePage(num)}
            >
              [{num}]</li>)}

          {listData.next ? 
          <li 
          className="m-1 pb-1 px-1 bg-blue-800 border-2 text-white font-bold rounded-md"
          onClick={() => movePage(listData.end+1)}
          >
            NEXT</li> : <></>}
        </ul>
      </div>
    </div>
  );
}

export default ListComponent;


