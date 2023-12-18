export async function fetchGitHubData(owner: String, repos: Array<string>): Promise<string> {
    const list = await Promise.all(
      repos.map(async (repo) => {
        console.log(`fetching data for ${repo}`);
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!response.ok) {
          throw new Error(`"${owner}/${repo}" not found. Kindy review repository list.`);
        }
        const data = await response.json();
  
        const {
          html_url: url,
          full_name: name,
          stargazers_count: stars,
          forks_count: forks,
          description: desc
        } = data;

        return `<li><a href=${url} target="_blank" rel="noopener noreferrer">${name}</a> (<b>${stars}</b> ✨ and <b>${forks}</b> 🍴):<br/>${desc}</li>`;
      })
    );
    return `<ul>${list.join("")}\n</ul>`;
  }
  