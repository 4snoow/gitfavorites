import { GithubView } from "./githubFavoritesView.js";
import { GithubAPI } from "./githubAPI.js";

export class GithubData{
  constructor(root){
    this.root = document.querySelector(root);
    this.tbody = document.querySelector('table tbody');

    this.loadUserEntries()
    
  }

  loadUserEntries(){
    this.userEntries = JSON.parse(localStorage.getItem('@userGithub')) || []
    // [
    // {
    //   login:'4snoow',
    //   name:'Gabriel Bastos',
    //   public_repos: 123,
    //   followers: 1234,
    // },
    // {
    //   login:'maykbrito',
    //   name:'Mayk Brito',
    //   public_repos:12,
    //   followers:1234
    // }]
  }

  async getUserByApi(username){
    try{
      const apiGit = await GithubAPI.getUser(username)
      console.log(apiGit)

      if(apiGit.login === undefined){
        throw new Error('Usuário não encontrado!')   
      } 
    } catch(error){
      alert(error.message)
    }
  }

  
  updateScreen(){
    this.removetrElement()

    this.userEntries.forEach(user => {
      const row = this.createCustomtrElement()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent=`${user.name}`
      row.querySelector('.user a span').textContent = `${user.login}`
      row.querySelector('.repositories').textContent = `${user.public_repos}`
      row.querySelector('.followers').textContent = `${user.followers}`


      row.querySelector('.remove').onclick = () => {
        const confirmForDelete = confirm('Deseja realmente deletar esse usuário ?')

        if(confirmForDelete){
          this.deleteUser(user)
        }
      }
      


      this.tbody.append(row)

    })
  }




  createCustomtrElement(){
    const tr = document.createElement('tr')

    tr.innerHTML = 
    `
    <td class="user">
      <img src="https://github.com/4snoow.png" alt="imagem de perfil do github" >
      <a href=""https://github.com/4snoow" target = "_blank">
      <p>Gabriel Bastos</p>
      <span>4snoow</span>
      </a>
    </td>
    <td class="repositories">123</td>
    <td class="followers">1234</td>
    <td><button class="remove">Remover</button></td>
  `

    return tr
  }

  removetrElement(){
    const tr = this.tbody.querySelectorAll('tr')
    tr.forEach(tr => tr.remove())
  }

}

