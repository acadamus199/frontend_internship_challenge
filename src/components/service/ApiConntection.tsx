import axios from "axios";

export async function fetchDataFromApi(options = {}) {
    try {
        const response = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json", options);
        return response.data.feed.entry;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}