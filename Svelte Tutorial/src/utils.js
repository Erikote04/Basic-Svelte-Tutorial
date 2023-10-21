export async function getRandomNumber() {
  const res = await fetch("/random-number"); // Fetch a random number between 0 and 100 (with a delay, so that we can see it)
  if (res.ok) {
    return await res.text();
  } else {
    throw new Error("Request failed"); // Sometimes the API will fail!
  }
}
