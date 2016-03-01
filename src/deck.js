import Card from "./card.js";
import _ from "underscore";

export default class Deck {
  unShuffled() {
    return _.chain(Card.ranksInImagesOrder)
      .map(function (rank) {
        return Card.suitsInImagesOrder.map(function (suit) {
          return {
            suit: suit,
            rank: rank
          };
        });
      })
      .flatten()
      .map(function (card) {
        return new Card(card);
      })
      .value();
  }

  shuffled() {
    return _.shuffle(this.unShuffled());
  }
}