// github api
// octokit 封装好的 github api 库
const { Octokit } = require('octokit')
const dayjs = require('dayjs')
const core = require('@actions/core')

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const token = core.getInput("token")
const octokit = new Octokit({ auth: token });

// creates an installation access token as needed
// assumes that installationId 123 belongs to @octocat, otherwise the request will fail
octokit.rest.issues.create({
    owner: "Leiloloaa",
    repo: "daily-plan",
    title: getTitle(),
    body: getBody()
});

// YYYY-mm-dd
function getTitle() {
    // 如何处理
    // 转换时间
    return dayjs().format('YYYY-MM-DD')
}

function getBody() {
    return "[个人简介](https://github.com/Leiloloaa/Leiloloaa/blob/main/README.md)"
}