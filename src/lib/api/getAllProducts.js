export default async function getAllProducts() {
  let data = [];

  try {
    const response = await fetch(`http://localhost:4003/products`);
    data = await response.json();
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  return data;
}
