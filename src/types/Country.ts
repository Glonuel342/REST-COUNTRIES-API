export interface CountryTS{
    name: string,
    nativeName: string,
    population: number,
    subregion: string,
    capital: string,
    flags: {
        png:string
    }
    topLevelDomain:[
        string
    ],
    currencies:[
        {
            name: string
        }
    ],
    languages:[
        {
            name: string
        }
    ],
    borders: [
        string
    ]
}