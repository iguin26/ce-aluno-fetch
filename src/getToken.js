// getToken.js
import fetch from "node-fetch";
import "dotenv/config";

export const getToken = async (userLogin, pass) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    language: "pt_BR",
    userName: userLogin,
    password: pass,
  });
  const requestOptions = {
    method: "POST",
    cache: "no-store",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(process.env.URL_LOGIN, requestOptions);

  const result = await response.json();

  myHeaders.append("authentication-token", result.sessionID);
  return myHeaders;

  //   return {
  //     token: result.sessionID,
  //     cookieHeader: `JSESSIONID=${jsessionid}`,
  //   };
};
