export { }

interface IData {
    dt: string,
    quantity: number,
    age: null | number,
    temp: ITemp
}

interface ITemp {
    temperature: string,
    city: string,
    optional?: boolean
}

let data: IData[] = [
    {
        "dt": "01-01-2021",
        "quantity": 100,
        "age": null,
        "temp": {
            "temperature": "100 degrees",
            "city": "Norway"
        }
    },
    {
        "dt": "02-01-2021",
        "quantity": 150,
        "age": 23,
        "temp": {
            "temperature": "103 degrees",
            "city": "Egypt"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Kypris"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 150,
        "age": 22,
        "temp": {
            "temperature": "98 degrees",
            "city": "Holland"
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    },
    {
        "dt": "03-01-2021",
        "quantity": 700,
        "age": 27,
        "temp": {
            "temperature": "50 degrees",
            "city": "Kursk",
            "optional": true
        }
    }
]

let getUniqueDate = new Set(data.map(function (item) {
    return item['dt'];
}));

console.log(getUniqueDate);

let getDataByDate = new Map();

data.forEach(function (item) {
    return getDataByDate.set(item['dt'], item);
});

console.log(getDataByDate);
