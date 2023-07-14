const ListPageComponent = ({ movePage, start, end, prev, next, pageNums, page }) => {

  const handleClickPage = (pageNum) => {
    movePage(pageNum)
  }

  return (
    <div className="flex m-2 p-2 justify-center items-center font-sans">
      <ul className="flex">
        {prev ?
          <li
            className="m-1 pb-1 px-1 bg-blue-600  text-white font-bold rounded-md"
            onClick={() => handleClickPage(start - 1)}
          >
            PREV
          </li> : <></>
        }
        {pageNums.map(num =>
          <li
            className="  m-1 pb-1 px-1 bg-blue-400 border-2 text-white font-bold rounded-md active:bg-violet-700"
            key={num}
            onClick={() => handleClickPage(num)}
          >
            {page === num ? <span className="text-black">[{num}]</span> : <span>[{num}]</span>}
          </li>
        )}
        {next ?
          <li
            className="m-1 pb-1 px-1 bg-blue-600 border-2 text-white font-bold rounded-md"
            onClick={() => handleClickPage(end + 1)}
          >
            NEXT
          </li> : <></>
        }
      </ul>
    </div>
  );
}

export default ListPageComponent;