import joker from "give-me-a-joke";

export function dadJoke() {
  return new Promise(function (resolve, reject) {
    joker.getRandomDadJoke(resolve);
  });
}
