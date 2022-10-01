export default async function getRoutes() {
  const apiUrl = process.env.API_URL;
  let data = {};

  try {
    const response = await fetch(`${apiUrl}/routes`);
    data = await response.json();
  } catch (e) {
    console.log(`Error Getting Routes: ${e.message}`);
  }

  return data;
}
