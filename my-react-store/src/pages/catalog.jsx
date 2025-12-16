import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog(){
    const [products, setProducts] =useState([]);
    //const products = [];

    useEffect (()=> {
        //load your data here
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    }, []);//we specify  how many times tthis effect runs

    return(
        <div className="catalog">
            <h1>Our Amazing Catalog</h1>
            {products.map(prod => <Product key={prod._id} data={prod}/>)}
        </div>
    );
}



export default Catalog;