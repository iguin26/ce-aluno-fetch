// getUserQuestsDone.js
export const getUserQuestsDone = async (headers, userId) => {
  //   const headers = new Headers();
  //   headers.append("Accept", "application/json");
  //   headers.append("Content-Type", "application/json");
  //   headers.append("authentication-token", token);
  //   headers.append("Cookie", cookieHeader);

  const raw = JSON.stringify({
    SQLName: "getUserQuestsDone",
    findManyToOne: false,
    findOneToMany: false,
    dynamicModel: {
      //   login: userLogin,
      idusuario: userId,
      base_url: "",
    },
  });

  const response = await fetch(process.env.URL2, {
    method: "POST",
    cache: "no-store",
    headers: headers,
    body: raw,
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Erro:", response.status);
    console.error("Resposta (HTML):", text);
    return;
  }

  const result = await response.json();
  return result;
};
