const GITHUB_USER = "andrexi1";
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;

const IMPORTANT_REPOS = [
  "Gif-Search",
  "lifeCompany-react",
  "subscriptions",
  "mi-portafolio",
];

export async function getGithubProjects() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data
    .filter(
      (repo) =>
        IMPORTANT_REPOS.includes(repo.name) &&
        !repo.fork
    )
    .map((repo) => ({
      id: repo.id,
      title: repo.name.replace(/-/g, " "),
      description: repo.description || "Proyecto destacado",
      stack: repo.language || "JavaScript",
      github: repo.html_url,
      homepage: repo.homepage,
    }));
}
