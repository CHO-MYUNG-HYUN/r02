import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartNav from "./CartNav";
import { requestLogout } from "../../reducers/loginSlice";



const LoginNav = () => {

  const { email, nickname } = useSelector(state => state.login)

  console.log("LoginNav.....", email)

  const dispatch = useDispatch()

  if (email !== "") {
    return (
      <div>
        <div className="flex">
          {email} - {nickname} - 
          <div onClick={() => dispatch(requestLogout())}>　Logout</div>
        </div>
        <CartNav></CartNav>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Link to="/member/login">LOGIN</Link>
      </div>
    </div>
  );
}

export default LoginNav;