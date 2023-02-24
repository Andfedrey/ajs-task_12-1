import interfaceMovie from "./interface/interfaceMovie";
import Movie from './Movie'

export default class Cart {
  private items: interfaceMovie[] = [];

  add(item: interfaceMovie): void {
    this.items.push(item)
  }

  getAll(): interfaceMovie[] {
    return [...this.items]
  }

  getTotalCost(): number {
    return this.items.reduce((acc, val) => acc + val.price, 0);
  }

  getTotalCostWithDiscount(): number {
    return this.items.reduce((acc, val) => acc + (val.price * (val.discount || 1)), 0)
  }

  dellMovie(id: number): interfaceMovie[] {
    return this.items = this.items.filter((el) => el.id !== id)
  }
}

let cart = new Cart;
let avengers = new Movie(
  12, 'Мстители', 450, 'avengers', 2019, 'USA', 'Сила этой страны не в кирпичных и стальных зданиях. Это в сердцах тех, кто поклялся бороться за ее свободу', ['фантастика'], "122", "/averange.jpeg"
)

console.log(cart)