function Octokit() {}

const octokit = new Octokit({
  auth: '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'
})

async function searchRep() {
  const rep = await octokit.request('get "https://api.github.com/search/repositories?q="+this.search+"+in:name&sort=stars"', {});
  console.log(rep);
}