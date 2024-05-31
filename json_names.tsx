
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