import { GithubData } from "./githubFavoritesData.js"

export class GithubView extends GithubData{
  constructor(root){
    super(root)
    this.updateScreen()
  }

  
}