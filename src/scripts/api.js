function convert(text){

    const textBefore   = ["\n\r", "\n\n", "\r\n", "\n", "\r", "m3", "CO2"];
    const textAfter = ["<br><br>", "<br><br>", "<br><br>", "<br><br>", "<br><br>", "m<sup>3</sup>", "CO<sub>2</sub>"];
    let newText = '';

    for (let i = 0; i < textBefore.length; i++) {
        newText = text.replaceAll(textBefore[i], textAfter[i]);
    }
    return newText;
}

export function getBrand(marki) {
    fetch(
        `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/brands.json?orderBy="name"&equalTo="${marki}"`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const brandKey = Object.keys(data)[0];
            return data[brandKey];

        })
        .then((res) => {

            let {name: brand, description: describe, image: picture, years: range, families: rodziny} = res;

            describe = convert(describe);

            const tryArray = describe.split(/\n/g);

            const newArray = {
                name: brand,
                description: tryArray,
                image: picture,
                years: range,
                families: rodziny
            }

            return newArray;
        })
        .then((data) => {
            setLoadedBrands(data);
        });
}