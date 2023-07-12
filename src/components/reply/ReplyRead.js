import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
  rno: 0,
  bno: 0,
  replyText: '',
  replyFile: '',
  replyer: ''
}

const ReplyRead = ({ rno, cancelRead, refreshPage }) => {

  console.log("ReplyRead..........." + rno)

  const [reply, setReply] = useState(initState)

  useEffect(() => {
    getReply(rno).then(data => {
      console.log(data)
      setReply(data)
    })
  }, [rno])

  const handleClickDelete = () => {

    deleteReply(rno).then(data => {
      alert(`${data.result}번 댓글이 삭제되었습니다.`)
      refreshPage(true)
    })

  }

  const handleChange = (e) => {
    reply[e.target.name] = e.target.value
    setReply({ ...reply })
  }

  const handleClickModify = () => {

    putReply(reply).then(data => {
      alert(`${data.result} 수정되었습니다`)
      refreshPage(true)
    })

  }

  if (reply.replyText === '해당 글은 삭제되었습니다.') {
    return <></>
  }


  return (
    <div className="m-8 bg-blue-200 border-4 ml-[37%] w-[30%] border-blue-300 rounded-2xl">
      <div className=" m-2 font-extrabold">Reply Read {rno}</div>
      <div>
        <div className="mx-4 my-2">{rno}</div>
        <div className="mx-4 my-2">
          <input
            className="w-[80%]"
            type="text"
            name="replyText"
            onChange={handleChange}
            value={reply.replyText}
          />
        </div>
        <div className="mx-4 my-2">{reply.replyer}</div>
      </div>
      <div>
        <button
          className="bg-yellow-300 m-2 p-1 border-amber-400 border-4 rounded-xl"
          onClick={handleClickModify}
        >
          MODIFY
        </button>
        <button
          className="bg-red-400 m-2 p-1 border-red-600 border-4 rounded-xl"
          onClick={handleClickDelete}
        >
          DELETE
        </button>
        <button
          className="bg-stone-400 m-2 p-1 border-stone-600 border-4 rounded-xl"
          onClick={cancelRead}
        >
          CANCEL
        </button>
      </div>

    </div>
  );
}

export default ReplyRead;