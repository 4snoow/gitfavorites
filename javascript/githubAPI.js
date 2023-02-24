export class GithubAPI{
  static getUser(username){
    const endpoint = `https://api.github.com/users/${username}`

    fetch(endpoint)
    .then(data => data.json())
    .then(({login, name, public_repos, followers}) => ({
      login,
      name,
      public_repos,
      followers
    }))
  }
}