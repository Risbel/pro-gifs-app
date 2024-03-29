export const getGifs = async (category) => {
  const api_key = "AhtPMEYCwdPXIbGr75J140h1QDNtvnVg";

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}}&limit=12&api_key=${api_key}`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
