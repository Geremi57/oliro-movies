export const getJson = async function (url) {
try {
    const response = await fetch(url);
    const res = await response.json();
    if (!res) throw new Error(`Error fetching data`);
    return res;
  } catch (err) {
    throw err;
  }
};
