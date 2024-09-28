import * as fs from "fs";
const md = require("markdown-it")({
  html: true,
  breaks: true,
  linkify: true
});

interface ProfileConfig {
  githubUsername: string;
  socialLinks: {
    twitter: string;
    stackoverflow: string;
    huggingface: string;
  };
  focus: string;
  currentWork: string;
  learning: string;
}

const profileConfig: ProfileConfig = {
  githubUsername: 'MK2112',
  socialLinks: {
    twitter: 'https://x.com/marcus_or_so',
    stackoverflow: 'https://stackoverflow.com/users/11304860/mk2112',
    huggingface: 'https://huggingface.co/Marcus2112',
  },
  focus: 'efficient applied AI',
  currentWork: 'autonomous systems',
  learning: 'JAX and PyTorch',
};

function generateBadge(name: string, url: string, logo?: string): string {
  const logoParam = logo ? `&logo=${logo}&logoColor=white` : '';
  return `[![${name}](https://img.shields.io/badge/-${name}-grey?style=flat-square${logoParam})](${url})`;
}

function generateGitHubStatsCard(mode: 'light' | 'dark'): string {
  const { githubUsername } = profileConfig;
  const textColor = mode === 'light' ? '474A4E' : 'FFF';
  return `
[![GitHub-Stats-Card-${mode}](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=${textColor}&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-${mode}-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-${mode}-mode-only)
  `.trim();
}

function generateGitHubLangCard(mode: 'light' | 'dark'): string {
  const { githubUsername } = profileConfig;
  const textColor = mode === 'light' ? '474A4E' : 'FFF';
  return `
[![GitHub-Lang-Card-${mode}](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&card_width=600&custom_title=Most%20Used%20Languages&title_color=3B7EBF&text_color=${textColor}&theme=transparent#gh-${mode}-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-${mode}-mode-only)
  `.trim();
}

function generateMarkdown(): string {
  const { githubUsername, socialLinks, focus, currentWork, learning } = profileConfig;

  const badges = [
    generateBadge('HuggingFace', socialLinks.huggingface, 'huggingface'),
    generateBadge('Stack Overflow', socialLinks.stackoverflow, 'stackoverflow'),
    generateBadge('Twitter', socialLinks.twitter, 'twitter'),
    `![Profile Views](https://komarev.com/ghpvc/?username=${githubUsername}&color=grey&style=flat-square)`,
  ].join(' ');

  return md.render(`
<div align="center">

${badges}

---

## Hey there 👋

I'm Marcus. Specializing in ${focus}.

- 🔭 Currently working on **${currentWork}**
- 🌱 Improving on **${learning}**
- 💬 Happy to help!

---

${generateGitHubStatsCard('dark')}
${generateGitHubLangCard('dark')}
${generateGitHubStatsCard('light')}
${generateGitHubLangCard('light')}

</div>
  `);
}

fs.writeFile('README.md', generateMarkdown(), (error) => {
  if (error) throw new Error(`Failed to generate README.md: ${error.message}`);
  console.log('✅ README.md file was successfully generated.');
});