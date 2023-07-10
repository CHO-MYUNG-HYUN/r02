import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";


const initState = {
  bno: 0,
  replyText: '',
  replyFile: '',
  replyer: ''
}

const ReplyInput = ({ bno, refreshLast }) => {

  const [reply, setReply] = useState({ ...initState })


  const handleChange = (e) => {
    reply[e.target.name] = e.target.value
    setReply({ ...reply })
  }

  const handleClickRegister = (e) => {

    reply.bno = bno

    // {result:223}
    postReply(reply).then(data => {

      console.log(data)

      alert(`${data.result}번 댓글이 등록완료`)

      refreshLast()

      setReply({ ...initState })

    })

  }

  return (
    <div className=" m-8 p-1 bg-lime-200 border-2 ml-[37%] w-[30%] border-lime-400 border-4 rounded-2xl">
      <div className="font-extrabold m-2">Reply Input</div>
      <div className="m-4 ">
        <input
          className="w-[80%]"
          type="text" name="replyText"
          value={reply.replyText}
          onChange={handleChange} />
      </div>
      <div className="m-4">
        <input
          className="w-[80%]"
          type="text" name="replyer"
          value={reply.replyer}
          onChange={handleChange} />
      </div>
      <div className="m-2">
        <button
          className="p-1 border-4 bg-lime-400 rounded-xl border-lime-500"
          onClick={handleClickRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default ReplyInput;