import interfaceMovie from "./interface/interfaceMovie";

export default class Movie implements interfaceMovie {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly engTitle: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: Array<string>,
    readonly time: string,
    readonly img: string,
    readonly discount?: number
  ) { }
}