const catalog = [
    {
        "title":"hoodie",
        "category":"clothes",
        "price":45.00,
        "image":"th (1).jpg",
        "_id": "1",
    },
    {
        "title":"shoes",
        "category":"clothes",
        "price":30.00,
        "image":"th (2).jpg",
        "_id": "2",
    },
    {
        "title":"shoes",
        "category":"clothes",
        "price":25.00,
        "image":"th (3).jpg",
        "_id": "3",
    },
    {
        "title":"shoes",
        "category":"clothes",
        "price":15.00,
        "image":"th (4).jpg",
        "_id": "4",
    },
    {
        "title":"oranges",
        "category":"fruit",
        "price":10.00,
        "image":"oranges.jpg",
        "_id": "5",
    },
    {
        "title":"apples",
        "category":"fruit",
        "price":15.00,
        "image":"apples.jpg",
        "_id": "6",
    },
    {
        "title":"cereal",
        "category":"grocery",
        "price":7.00,
        "image":"groceries.jpg",
        "_id": "7",
    },
];


class DataService {
    getProducts()
    {
        return catalog;
    }
};

export default DataService;