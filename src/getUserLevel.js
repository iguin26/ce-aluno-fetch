// getUserLevel.js
export const getUserLevel = async (headers, userId) => {
  const raw = JSON.stringify({
    SQLName: "getUserLevel",
    findManyToOne: false,
    findOneToMany: false,
    dynamicModel: {
      //   login: userLogin,
      id_usuario: userId, // no body nao esquecer que o nome do campo é diferente do de getUserQuestsDone
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
