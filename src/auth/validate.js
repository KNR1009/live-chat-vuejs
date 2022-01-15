import axios from "axios";

const validate = async () => {
  // ローカルストレージからデータを取得
  const uid = window.localStorage.getItem("uid");
  const client = window.localStorage.getItem("client");
  const accessToken = window.localStorage.getItem("access-token");

  try {
    // セッションが有効かを図るエンドポイントを叩く
    const res = await axios.get("http://localhost:3000/auth/validate_token", {
      headers: {
        uid: uid,
        "access-token": accessToken,
        client: client,
      },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};
// カスタムフック化して他ファイルで呼び出し
const useValidate = () => {
  return { validate };
};

export default useValidate;
