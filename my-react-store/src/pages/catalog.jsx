import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog(){
    const [products, setProducts] =useState([]);
    const [categories, setCategories] = useState([]);//to hold categories
    //const products = [];
    const [productsToShow, setProductsToShow] = useState([]);//to hold products to show

    function loadCatalog(){
        let cats = ["fruit","clothes","grocery"];
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        setCategories(cats);
        
    }

    useEffect (()=> {
        //load your data here
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        loadCatalog();
    }, []);//we specify  how many times tthis effect runs

    function filter(category){
        let list = [];
        // find products that match the category
        //create the for loop to travel the array
        for (let i=0; i<products.length; i++)
        {
            let prod = products[i];
            if(prod.category === category){
                list.push(prod);
            }
        }
        setProductsToShow(list);
    }

    function clearFilter(){
        setProductsToShow(products);
    }

    return(
        <div className="catalog">
            <h1>Our Amazing Catalog</h1>
            {/*please render all the products */}
            {/* you need to create a function that clears the filter   */}
            <button className="btn btn-dark" onClick={clearFilter}>ALL</button>
            <br></br>


            
            {categories.map(cat => <button key={cat} onClick={()=>filter(cat)}>{cat}</button>)}
            {/* for (i=0;i<categories.length;i++)
                let cat = categories[i];
                <button>{cat}</button>
            */}

            {productsToShow.map(prod => <Product key={prod._id} data={prod}/>)}
        </div>
    );
}



export default Catalog;