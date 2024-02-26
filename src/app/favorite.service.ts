import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class FavoriteService {
  private favoriteItems: any[] = [];

  constructor() { }

  addFavoriteItem(item: any): void {
    this.favoriteItems.push(item);
    
    // console.log("added", this.favoriteItems);
  }

  removeFavoriteItem(item: any): void {
    const index = this.favoriteItems.indexOf(item);
    if (index > -1) {
      this.favoriteItems.splice(index, 1);
    }
    // console.log("removed", this.favoriteItems);
  }

  getFavoriteItems(): any[] {
    return this.favoriteItems;
  }

  isItemInFavorites(item: any): boolean {
    return this.favoriteItems.includes(item);
  }

  updateData(data: any) {
    this.favoriteItems = data;
  }

}
