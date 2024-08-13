// TODO: [11] Mega doceniam kreatywność, ale kilka uwag
// ::::: - To nie jest komponent (nie zwraca JSX.Element), więc rozszerzenie .ts a nie .tsx
// ::::: - Pliki w folderze root aplikacji dotyczą tylko jakichś globalnych konfiguracji, kod samej apki jest w /src
// :::::   Czyli ten plik powinien być przeniesiony do /src, najlpiej wgl do /src/utils
// ::::: - Zastanawiam się jaki jest sens istnienia takeigo consta. Bo musisz wtedy mappować dane za każdym razem gdy chcesz ich użyć
// :::::   Jak wam mówiłam o funkcji mapującej, chodziło mi o to, żeby w pliku gdzie masz axiosa zwracać od razu zmapowane dane
// :::::   Bo inaczej będzie trochę syfu w kodzie, np. masz:
// :::::   <Modal
// :::::       key={`${JSON_NAMES.title(prop)}-${index}`}
// :::::       title={JSON_NAMES.title(prop)}
// :::::       artist={JSON_NAMES.artist(prop)}
// :::::       imageModal={JSON_NAMES.image(prop, 2)}
// :::::       price={JSON_NAMES.price(prop)}
// :::::       priceCurrency={JSON_NAMES.priceCurrency(prop)}
// :::::       itemCount={JSON_NAMES.itemCount(prop)}
// :::::       releaseDate={JSON_NAMES.releaseDate(prop)}
// :::::       link={JSON_NAMES.link(prop)}
// :::::   >
// :::::   A mogłoby być po prostu tak:
// :::::   <Modal
// :::::       key={`${data.title}-${index}`}
// :::::       title={data.title}
// :::::       artist={data.artist}
// :::::       imageModal={data.image}
// :::::       price={data.price}
// :::::       priceCurrency={data.priceCurrency}
// :::::       itemCount={data.itemCount}
// :::::       releaseDate={data.releaseDate}
// :::::       link={data.link}
// :::::   >
export const JSON_NAMES = {
        image: (prop : any, index : number) => {return prop['im:image'][index].label},
        title: (prop : any) => {return prop['im:name'].label},
        itemCount: (prop : any) => {return prop['im:itemCount'].label},
        price: (prop : any) => {return prop['im:price'].label},
        priceCurrency: (prop : any) => {return prop["im:price"].attributes.currency},
        contentType: (prop : any) => {return prop['im:contentType'].attributes.label},
        artist: (prop : any) => {return prop['im:artist'].label},
        releaseDate: (prop : any) => {return prop['im:releaseDate'].attributes.label},
        link: (prop: any) => {return prop['link'].attributes.href}
};
