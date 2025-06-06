// server.js
import { getUserInfos } from "./src/getUserInfos.js";
import { getUserQuestsDone } from "./src/getUserQuestsDone.js";
import { getToken } from "./src/getToken.js";
import { getUserLevel } from "./src/getUserLevel.js";
import { getUserGroup } from "./src/getUserGroup.js";
import { parentScreen } from "./src/parentScreen.js";

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
  const userLevel = await getUserLevel(headers, userId);

  const userGroupRaw = await getUserGroup(headers);
  const userGroups = userGroupRaw.RESPONSE.groups;

  //func q retorna true caso algum dos grups do usuario seja responsavel.
  // caso retorne true renderizar tela dos reponsaveis, caso seja false, renderizar a dos alunos
  parentScreen(userGroups);

  // console.log(userGroups);
  // console.log(userInfos["payload"]);
  // console.log(userQuests["payload"]);
  // console.log(userLevel["payload"]);
};

main();
