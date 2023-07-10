import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const ReadPage = () => {

  const { queryObj, moveList, moveRead } = useQueryObj()
  const { bno } = useParams()

  console.log(bno)
  console.log(queryObj)

  return (
    <div>
      Board Read
      <ReadComponent bno={bno}></ReadComponent>
      <ReplyWrapper bno={bno}></ReplyWrapper>
      <button onClick={moveList}> [Go List] </button>
    </div>
  );
}

export default ReadPage;