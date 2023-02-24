import Cart from '../src/Cart'
import Movie from '../src/Movie'


describe('Cart', () => {
  let cart: Cart;
  let movie1: Movie;
  let movie2: Movie;

  beforeEach(() => {
    cart = new Cart();
    movie1 = new Movie(1, 'The Shawshank Redemption', 10, 'Shawshank Redemption', 1994, 'USA', 'Fear can hold you prisoner. Hope can set you free.', ['Drama'], '2h 22min', 'https://www.example.com/shawshank-redemption.jpg');
    movie2 = new Movie(2, 'The Godfather', 12, 'Godfather', 1972, 'USA', 'An offer you can\'t refuse.', ['Crime', 'Drama'], '2h 55min', 'https://www.example.com/godfather.jpg', 0.9);
  });

  test('should add movies to the cart', () => {
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.getAll()).toEqual([movie1, movie2]);
  });

  test('should calculate the total cost of movies in the cart', () => {
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.getTotalCost()).toBe(22);
  });

  test('should calculate the total cost of movies in the cart with discount', () => {
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.getTotalCostWithDiscount()).toBe(20.7);
  });

  test('should remove a movie from the cart by ID', () => {
    cart.add(movie1);
    cart.add(movie2);
    cart.dellMovie(1);
    expect(cart.getAll()).toEqual([movie2]);
  });
});