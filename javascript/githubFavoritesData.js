import { GithubView } from "./githubFavoritesView.js";

export class GithubData{
  constructor(root){
    this.root = document.querySelector(root);
    this.tbody = document.querySelector('table tbody')
  }

  loadUserEntries(){
    this.userEntries = {
      username:'4snoow',
      repositories: 123,
      followers: 1234
    },
    {
      username:'maykbrito',
      repositories:123,
      followers:123
    }
  }

   


  
  updateScreen(){
    this.removetrElement()
  }





  createCustomtrElement(){
    const tr = document.createElement('tr')

    tr.innerHTML = 
    `
    <td class="user">
      <img src="https://avatars.githubusercontent.com/u/61155055?v=4" alt="imagem de perfil do github">
      <a href="#">
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

