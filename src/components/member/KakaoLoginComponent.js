import { Link } from "react-router-dom";


const REST_KEY = "c186ee3709be5d2318b919a09b7f46e6"
const REDIRECT_URI = "http://localhost:3000/member/kakao"
// const REDIRECT_URI = "http://localhost:8080/api/member/kakao"

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
  return (  
    <div className="text-3xl text-white m-2 p-2">
      <Link to={kakaoURL}>KAKAO LOGIN</Link>
    </div>
  );
}
 
export default KakaoLoginComponent;