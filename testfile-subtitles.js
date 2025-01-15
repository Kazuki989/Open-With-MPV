const myutils = require('MyUtils.js');
const axios = require('axios');



url = "https://www.opensubtitles.com/download/C1444426A83E2F7C4BBFE4E1A24E9A78BF1F947ABD1DAA07AD18CE3E03C3A736D7B6589741C61BE2350560970ED5D66E0591E5C561C599815F9B2EE91C65F9B5C0C3A48FCBA3F2A712ACBFC76EA01DA992C363C054C0E66198B4ECE9BD4C2FA8FC053997D33ECDB09114BBED46F1467B90A2EF122050C128183C33F0F5ED21C0903680C6ECFBE8AAEE0BAE76AE35F8D3F1C18058D9BBA8AD5E8C73462CEBDE09A04C2B1C9583A8833E99E779472E8E009A2DADB884398F43292CE0084C3ABAB13BA2CE43D314F83E5B6ED8DBC58F7C758CD08D6794EB1B1FEDF8BA154874E4E44AB3AC40A5D9D9EBBA9215111B08D4BD0F50177D9548A9F9E3357E3955D25AEE2E5A62DA8F59BD7707C78ABC8D9C727E4C03FFACAF3261A0FC204E1A4933996FB464013DFBCC33284F363E148A3B4053665E4CE8C480D29DD06A4CE4CFC6C6F6/subfile/The.Lord.Of.The.Rings.The.Return.Of.The.King.2003.EXTENDED.2160p.4K.BluRay.x265.10bit.AAC5.1-%5BYTS.MX%5D.srt"
url = "https://s.megastatics.com/subtitle/73fd2e74257659a8ef9b9cdd004623a5/eng-2.vtt"
url = "https://cca.megafiles.store/bc/29/bc29f4ff9607c5e3a948dfe76a38fb09/ger-8.vtt"
url = "https://cca.megafiles.store/bc/29/bc29f4ff9607c5e3a948dfe76a38fb09/chi-35.vtt"

const fetch = axios.create ({
    baseURL: url,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    },

});


async function cleansub() {
    const { data } = await fetch();
    const lines = data.split('\n');
    let cleanedData = lines.reduce((acc, line) => {
        if (line && !/\d/.test(line)) {
            const cleanedLine = line
                .replace(/WEBVTT/g, '')
                .replace(/<i>/g, '')
                .replace(/<\/i>/g, '')
                .replace(/(\r\n|\n|\r)/g, '');
            if (cleanedLine.trim()) {
                acc.push(cleanedLine.trim());
            }
        }
        return acc;

    }, []);
    const { franc } = await import('./franc.js');
    console.log(franc(cleanedData.toString().trim()));
    // console.log(cleanedData.toString().trim());
}

cleansub()
