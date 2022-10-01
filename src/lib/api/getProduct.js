export default async function getProduct(id) {
  let data = {};

  try {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    data = await response.json();
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  return data;
}
