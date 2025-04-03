// server.js
import { getUserInfos } from "./src/getUserInfos.js";
import { getUserQuestsDone } from "./src/getUserQuestsDone.js";
import { getToken } from "./src/getToken.js";

const main = async () => {
  const login = process.env.MY_USER; //substituir pelo login q o user digitou
  const pass = process.env.PASSWORD; //substituir pela senha q o user digitou
  const userLogin = process.env.BIZ_DOMAIN_USER + login;

  const headers = await getToken(userLogin, pass);

  const userInfos = await getUserInfos(headers, userLogin);

  const userId = userInfos["payload"][0]["user_id"];
  console.log(userId); //id do usuario so vem dps de puxar o userInfos. Ele é necessario para puxar
  // as quests feitas pelo jogador com o userQuests

  const userQuests = await getUserQuestsDone(headers, userId);

  // console.log(userInfos["payload"]);
  console.log(userQuests["payload"]);
};

main();
