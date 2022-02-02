import axios from "axios";

const instance = axios.create({
  baseURL: "https://proyecto-25watts-back.herokuapp.com/"
})

const sendEmail = async (dataConsole) => {
  const response = await instance({
    method: "post",
    url: "/api/guardarUsuarios",
    data: dataConsole,
  });

  return response;
};

export { sendEmail };