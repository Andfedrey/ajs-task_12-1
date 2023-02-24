export default interface interfaceMovie {
  id: number,
  title: string,
  price: number,
  engTitle: string,
  year: number,
  country: string,
  tagline: string,
  genre: Array<string>,
  time: string,
  img: string,
  discount?: number,
}
