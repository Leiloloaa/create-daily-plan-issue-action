const core = require('@actions/core');
const github = require('@actions/github');
const dayjs = require('dayjs');
const myWisdom = require('./wisdom');

(function main() {
  const token = core.getInput('token');
  const octokit = github.getOctokit(token);

  createIssue(octokit);
})();

function createIssue(octokit) {
  octokit.rest.issues.create({
    owner: 'Leiloloaa',
    repo: 'study-every-day',
    title: getTitle(),
    body: getBody()
  });
}

function getTitle() {
  // let saying = myWisdom.wisdom
  // ${saying[Math.floor(Math.random() * saying.length)]
  return `【每日计划】 ${getDate()}}`;
}

function getDate() {
  // 运行环境是 UTC 时区
  // 需要转换成 中国时区
  // 中国时区 = UTC时区 + 8小时
  return dayjs().add('8', 'hour').format('YYYY-MM-DD');
}

function getBody() {
  return '[个人简介](https://github.com/Leiloloaa/Leiloloaa/blob/main/README.md)';
}
