import { useRef, useState } from "react";
import { postProduct } from "../../api/productAPI";

const initState = {
  pname: "Ice Coffee",
  pdesc: "Coffee...",
  price: 4000
}

const RegisterComponent = ({ moveList }) => {

  const fileRef = useRef();
  const [product, setProduct] = useState({ ...initState })

  const handleChange = (e) => {

    product[e.target.name] = e.target.value

    setProduct({ ...product })

  }

  const handleClickSave = (e) => {

    const formData = new FormData();

    formData.append("pname", product.pname)
    formData.append("pdesc", product.pdesc)
    formData.append("price", product.price)

    console.dir(fileRef.current)

    const arr = fileRef.current.files

    for (let file of arr) {
      formData.append("files", file)
    }

    postProduct(formData).then(data => {
      const rno = data.result
      alert(`${rno}번 상품이 등록되었습니다.`)
      moveList()
    })

  }

  const handleClickClear = (e) => {

    fileRef.current.value = ""

  }

  return (
    <div className="ml-[35%] p-2 w-[30%] font-bold">

      <div className="m-2 p-2 border-4 rounded-xl flex justify-center w-[300px] hover:backdrop-blur-sm">
        <input className="rounded-lg bg-transparent h-[50px] text-center
        focus:bg-pink-400 focus:bg-opacity-50"
          type="text" name="pname" value={product.pname} onChange={handleChange}></input>
      </div>

      <div className="m-2 p-2 border-4 rounded-xl flex justify-center w-[300px] hover:backdrop-blur-sm">
        <input className="rounded-lg bg-transparent h-[50px] text-center
        focus:bg-pink-400 focus:bg-opacity-50"
          type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
      </div>

      <div className="m-2 p-2 border-4 rounded-xl flex justify-center w-[300px] hover:backdrop-blur-sm">
        <input className="rounded-lg bg-transparent h-[50px] text-center
        focus:bg-pink-400 focus:bg-opacity-50"
          type="text" name="price" value={product.price} onChange={handleChange}></input>
      </div>

      <div className="m-2 p-2 border-4 rounded-xl flex justify-center w-[300px] hover:backdrop-blur-sm">
        <input className="rounded-lg bg-transparent h-[50px] text-center
        file:cursor-pointer
        focus:bg-pink-400 focus:bg-opacity-50
         file:py-2 file:px-4
      file:rounded-lg file:border-4
      file:text-sm "
          type="file" ref={fileRef} multiple name="images" onChange={handleChange} ></input>
      </div>

      <div className="m-2 p-2 border-4 rounded-xl flex justify-around w-[300px] h-[50px">
        <button className=" rounded-xl " onClick={handleClickSave}>Save</button>
        <button onClick={handleClickClear}>Clear</button>
      </div>
    </div>
  );
}

export default RegisterComponent;