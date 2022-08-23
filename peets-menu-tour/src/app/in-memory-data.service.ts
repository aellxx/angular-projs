import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  // create new database with InMemoryDbService
  createDb() {
    const menus = [
      {id: "americano", name: 'Americano', price: 3.35, description: "An Americano is two ingredients: espresso and hot water. When rich, hand-pulled Espresso Forte is poured into hot water, you retain the perfect crema in a pleasantly sippable cup with notes of malty hazelnut. The Americano is said to have been invented in Italy during WWII, when American GIs craved a mug of coffee they could sip and savor, but the Italians only had espresso machines for brewing.", imageId: "https://peets-shop.imgix.net/products/caffe-americano.png?v=1597269387&auto=format,compress&w=1080"},
      {id: "cappuccino", name: 'Cappuccino', price: 3.85, description: "This coffee-forward classic has just two ingredients, but requires the utmost barista skill. We hand-pull a perfect espresso and marble it with creamy microfoam (thick steamed milk), stretching the espresso's caramel notes and providing a smooth texture.", imageId: "https://peets-shop.imgix.net/products/cappuccino.png?v=1597269390&auto=format,compress&w=1080"},
      {id: "caffe-latte", name: "Caffe Latte", price: 3.90, description: "The word \"latte\" means \"milk\" in Italian. In our Caffe Latte, milk rounds out espresso's assertive flavors in a soft, enjoyable drink. Rich, hand-pulled Espresso Forte meets smooth steamed milk, topped with a layer of silky foam.", imageId: "https://peets-shop.imgix.net/products/caffe-latte.png?v=1597269391&auto=format,compress&w=1080"},
      {id: "caffe-mocha", name: "Caffe Mocha", price: 4.35, description: "Chocolate and espresso meet for the ultimate indulgence. Rich espresso and house-made chocolate sauce rendezvous with creamy steamed milk under a blanket of fresh whipped cream.", imageId: "https://peets-shop.imgix.net/products/caffe-mocha.png?v=1597269393&auto=format,compress&w=1080"},
      {id: "iced-matcha-green-tea-latte",name: "Iced Matcha Green Tea Latte", price: 4.85, description: "Our refreshing take on the Matcha Green Tea Latte begins with pure Matcha green tea. We mix with cold milk over ice and foam. We can make it unsweetened, or with a splash of simple syrup.", imageId: "https://peets-shop.imgix.net/products/iced-matcha-green-tea-latte.png?v=1597269392&auto=format,compress&w=1080"},
      {id: "yuzu-citrus-black-tea-shaker", name: "Yuzu Citrus Black Tea Shaker", price: 3.85, description: "Summer Solstice black tea, hand-shaken with lemonade, refreshing yuzu puree, ice, and a slice of lemon.", imageId:"https://peets-shop.imgix.net/products/yuzu-citrus-black-tea-shaker.png?v=1597269396&auto=format,compress&w=1080"},
      {id: "tropical-berry-green-tea-shaker", name: "Tropical Berry Green Tea Shaker", price: 3.85, description: "Green Tea Tropical hand-shaken with lemonade, sweet strawberry puree, ice, and real strawberries."},
    ]; 
    return menus;
  }
}
