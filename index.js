const { Octokit } = require('Octokit');
const core = require('@actions/core');
const dayjs = require('dayjs');

// (function main() {
//     const octokit = github.getOctokit(token);

//     createIssue(octokit);
// })();

const token = core.getInput('token');
const octokit = new Octokit({
    auth: token
})

createIssue()

function createIssue() {
    octokit.rest.issues.create({
        owner: 'Leiloloaa',
        repo: 'create-daily-plan-issue-action',
        title: getTitle(),
        body: getBody()
    });
}

function getTitle() {
    return `【每日计划】 ${getDate()}`;
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