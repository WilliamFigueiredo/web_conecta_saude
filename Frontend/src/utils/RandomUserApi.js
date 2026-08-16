const BASE_URL = "https://randomuser.me/api/";

export async function getRandomProfessionals(gender, count) {
  const params = new URLSearchParams({
    results: count,
    nat: "br",
  });

  if (gender) {
    params.append("gender", gender);
  }

  const response = await fetch(`${BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar profissionais");
  }

  const data = await response.json();

  return data.results.map((pessoa) => `${pessoa.name.first} ${pessoa.name.last}`);
}

export async function getCachedProfessionals(cacheKey, gender, count) {
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  const nomes = await getRandomProfessionals(gender, count);
  localStorage.setItem(cacheKey, JSON.stringify(nomes));
  return nomes;
}
