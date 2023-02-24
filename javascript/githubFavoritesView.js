import { GithubData } from "./githubFavoritesData.js"

export class GithubView extends GithubData{
  constructor(root){
    super(root)
    this.updateScreen()
    this.addUser()
  }

  deleteUser(userDelete){
    const filterUserForDelete = this.userEntries.filter(userEntry => userEntry.login !== userDelete.login);
    this.userEntries = filterUserForDelete

    this.updateScreen()
  }

  addUser(){
    const favoriteBtn = this.root.querySelector('.search button')

    favoriteBtn.onclick = ()=>{
      const {value} = this.root.querySelector('.search input')
    }
  }
  
}