import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";

const ReadPage = () => {

  const { queryObj, moveList, moveRead } = useQueryObj()
  const { bno } = useParams()

  console.log(bno)
  console.log(queryObj)

  return (
    <div>
      Board Read
      <ReadComponent bno={bno}></ReadComponent>
      <button onClick={moveList}>Button</button>
    </div>
  );
}

export default ReadPage;