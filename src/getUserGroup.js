// getUserLevel.js
export const getUserGroup = async (headers, userId) => {
  const raw = JSON.stringify({
    PARAMS: {},
  });

  const response = await fetch(process.env.URL_GROUP, {
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
