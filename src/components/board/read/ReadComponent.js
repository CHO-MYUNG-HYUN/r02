import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";

const initState = {
  bno: 0,
  title: "",
  content: "",
  writer: "",
  regDate: "",
  modDate: ""
}

const ReadComponent = ({bno}) => {

  const [board, setBoard] = useState(initState)

  useEffect(() => {
    getOne(bno).then(data => {
      setBoard(data)
    })
  }, [bno])

  return (
    <div>
      <div>
        bno - {board.bno}
      </div>
      <div>
        title - {board.title}
      </div>
      <div>
        content - {board.content}
      </div>
      <div>
        writer - {board.writer}
      </div>
      <div>
        regDate - {board.regDate}
      </div>
    </div>
  );
}

export default ReadComponent;