const api_key = "4sKG6jfWrkU6sOg1dfvc0FDKIKr7EQio";
const url = new URL("https://api.giphy.com/v1/gifs/search");
url.searchParams.set("api_key", api_key);
url.searchParams.set("limit", "20");

export const getGifs = async (category) => {
	url.searchParams.set("q", category);
	const res = await fetch(url);
	const { data } = await res.json();
	const gifts = data.map((item) => ({
		id: item.id,
		title: item.title,
		url: item.images.downsized_medium.url,
	}));
	return gifts;
};
