import styled from "styled-components"
import {products} from "../data"
import Product from "./Product"
import { useEffect, useState } from "react"
import axios from "axios";

const Container = styled.div`
    padding: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
 
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products");
        setProducts(res.data);
      }catch(err){}
    };
    getProducts()
  },[cat]);

  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      );
    }else if(sort==="asc"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.price - b.price)
      );
    }else{
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.price - a.price)
      );
    }
  },[sort]);

  return (
    <Container>
        {/* {cat
          ? filteredProducts.map((item)=><Product item={item} key={item.id}/>)
          : products.slice(0,8)
            .map((item)=><Product item={item} key={item.id}/>) 
        } */}
        {
          products.map((item) => (
            <Product item={item} key={item.id} />
          ))
        }
    </Container>
  )
}

export default Products