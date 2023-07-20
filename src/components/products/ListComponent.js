import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
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
    }).catch(err => {
      console.log(err)
    })

  }, [queryObj])



  return (
    <div className="h-full ">
      <div className="">
        <ul className="text-2xl text-white flex flex-wrap container justify-center ">
          {listData.dtoList.map((dto) =>
            <li
              className="w-2/5  m-2 p-2 rounded-lg shadow-lg border-4 border- border-purple-200
              hover:bg-gradient-to-br from-transparent to-pink-300 hover:backdrop-blur-lg
              hover:scale-105 duration-[400ms] ease-out :animate-ping cursor-pointer"
              key={dto.pno}
              onClick={() => moveRead(dto.pno)}
            >
              <div className="">
                <div className="font-extrabold">{dto.pno}</div>
                <div className="flex justify-center items-center">
                  <img src={`http://localhost/s_${dto.fname}`}></img>
                </div>
                <div className="text-center text-white font-extrabold">
                  {dto.pname} - {dto.price} 리뷰 {dto.reviewCnt} - {dto.reviewAvg}
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>

      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

    </div>
  );
}

export default ListComponent;


