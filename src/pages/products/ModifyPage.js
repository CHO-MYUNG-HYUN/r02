import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";


const ModifyPage = () => {

  const { queryObj, moveList, moveRead, moveModify } = useQueryObj()
  const { pno } = useParams()

  return (
    <div>
      <div className="text-white">Product Modify Page - {pno}</div>
      <ModifyComponent
        pno={pno}
        moveList={moveList}
        moveRead={moveRead}>
      </ModifyComponent>
    </div>
  );
}

export default ModifyPage;