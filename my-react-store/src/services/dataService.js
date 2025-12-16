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
];


class DataService {
    getProducts()
    {
        return catalog;
    }
};

export default DataService;