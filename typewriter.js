
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  for (const char of sentence) {
    console.log(char);
  sleep(50);
}
 }, 1000)

