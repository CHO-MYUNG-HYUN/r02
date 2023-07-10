import { useEffect, useState } from "react";

const ListSearchComponent = ({ moveSearch, queryObj }) => {

  console.log("SearchComponent..............")

  const [searchObj, setSearchObj] = useState({ type: "", keyword: "" })

  useEffect(() => {

    searchObj.type = queryObj.type || ''
    searchObj.keyword = queryObj.keyword || ''

    setSearchObj({ ...searchObj })

  }, [queryObj])

  return (
    <div className="m-4 p-4 border-4 bg-no-repeat w-[34%] ml-[35%] bg-cover
    bg-[url('https://cdn.pixabay.com/photo/2023/06/03/15/26/ginkgo-8037886_1280.jpg')]
    ">
      <select
        className="border-2 m-1 p-2"
        value={searchObj.type}
        onChange={e => {
          searchObj.type = e.target.value
          setSearchObj({ ...searchObj })
        }}
      >
        <option value={""}>----</option>
        <option value={"t"}>제목</option>
        <option value={"c"}>내용</option>
        <option value={"w"}>작성자</option>
        <option value={"tc"}>제목+내용</option>
        <option value={"tcw"}>제목+내용+작성자</option>
      </select>

      <input
        type="text"
        className="m-1 p-2 border-2"
        value={searchObj.keyword}
        onChange={e => {
          searchObj.keyword = e.target.value
          setSearchObj({ ...searchObj })
        }}
      />

      <button 
      className="m-1 p-2 border-2"
      onClick={ e => {
        moveSearch(searchObj.type, searchObj.keyword)
      }}
      >
        SEARCH</button>

    </div>
  );
}

export default ListSearchComponent;