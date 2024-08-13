import axios from "axios";

// TODO: [14] Kilka uwag co do organizacji
// ::::: - Rozszerzenie .ts a nie .tsx, bo to nie komponent
// ::::: - Nazwa ApiConnection jest zbyt ogólna, tak samo fetchDataFromApi. W sensie w każdej aplikacji jest jakieś fetchowanie danych
// :::::   Semantyczna nazwa w tym przypadku powinna nam powiedzieć jakie dane fetchujemy
// :::::   Proponuję albumService.ts na nazwe pliku i getAlbums() na nazwę funkcji (get, od metody HTTP GET)
// :::::   Czyli jak będziesz chciał np. robić requesty o dodanie/update albumu (HTTP POST, PUT, DELETE itp.),
// :::::   możesz dodać kolejne funkcje w tym samym pliku, addAlbum(), updateAlbum() itp.
// ::::: - Serwis to nie komponent, więc nie pownien być w /src/components. Proponuję przenieść np. do /src/services/albumService.ts
export async function fetchDataFromApi(options = {}) {
    try {
        const response = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json", options);
        // TODO: [12] O w tym miejscu można by wykorzystać funkcje mapującą, która mogłaby być w /src/utils/index.ts (przykład w TODO [13])
        // ::::: I tutaj by było:
        // ::::: const mappedData = getMappedData(response.data.feed.entry);
        // ::::: return mappedData;
        return response.data.feed.entry;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// TODO: [13] Przykład funkcji mapującej w /src/utils/index.ts
// ::::: function mapITunesData(data) {
// :::::     return data.map((album) => ({
// :::::         title: album['im:name'].label,
// :::::         artist: album['im:artist'].label,
// :::::         ...
// :::::     }))
// ::::: }
