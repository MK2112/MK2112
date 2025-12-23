import * as fs from "fs";
const md = require("markdown-it")({
  html: true,
  breaks: true,
  linkify: true
});

/*
 * import { fetchGitHubData } from "./fetchGitHubData";
 * ${await fetchGitHubData(githubUsername, ossProjectRepos)}

 * const ossProjectRepos = [
 *  "nn-zero-to-hero-notes",
 *  "any_to_any.py",
 *  "CarND"
 *];
 */

const githubUsername = "MK2112";
const twitterUrl = "https://twitter.com/marcus_or_so";
const stackoverflowUrl = "https://stackoverflow.com/users/11304860/mk2112";
const huggingfaceUrl = "https://huggingface.co/Marcus2112";

async function generateMarkdown() {
  const stackoverflowBadge = `[![Stackoverflow-Badge](https://img.shields.io/badge/-MK2112-grey?logo=stackoverflow&logoColor=white)](${stackoverflowUrl})`;
  const huggingfaceBadge = `[![Huggingface-Badge](https://img.shields.io/badge/%F0%9F%A4%97-Marcus2112-grey)](${huggingfaceUrl})`;
  const twitterBadge = `[![Twitter-Badge](https://img.shields.io/badge/-Marcus%5For_so-grey?logo=x)](${twitterUrl})`;
  const profileCountBadge = `![Profile-Views-Count-Badge](https://komarev.com/ghpvc/?username=${githubUsername}&color=grey)`;

  const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&card_width=600&hide_title=true&text_color=474A4E&icon_color=3B7EBF&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;
  const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&card_width=600&hide_title=true&text_color=FFF&icon_color=3B7EBF&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;

  const githubLangCardLight = `[![GitHub-Lang-Card-Light](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&card_width=600&hide_title=true&text_color=474A4E&icon_color=3B7EBF&hide=contribs,reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;
  const githubLangCardDark = `[![GitHub-Lang-Card-Dark](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&card_width=600&hide_title=true&text_color=FFF&icon_color=3B7EBF&hide=contribs,reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
  const githubCard = `![Github-Card](https://githubcard.com/MK2112.svg?d=xDUr2-pV)`;

  const markdownText = `<div align="center">\n

  ${huggingfaceBadge} ${stackoverflowBadge} ${twitterBadge} ${profileCountBadge}\n

  ---\n

  <h2>Hi, I'm Marcus 👋</h2>\n
  <p align="center">
    🔭 &nbsp; Currently working on <b>autonomous systems</b><br/>
    🌱 &nbsp; Using <b>Python</b>, <b>JAX</b>, <b>Rust</b>, <b>C++</b> and <b>JavaScript</b><br/>
    💬 &nbsp; Happy to help!
  </p>\n

  ---\n

  <!-- ${githubStatsCardDark} ${githubLangCardDark} -->\n
  <!-- ${githubStatsCardLight} ${githubLangCardLight} -->\n
  ${githubCard}\n

  </div>`;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
