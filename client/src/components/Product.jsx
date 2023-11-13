import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {useLocation} from "react-router-dom"
import {publicRequest} from "../requestMethods"
import {useEffect, useState} from "react"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Info = styled.div`
    opacity: 0;    
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 40px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 60%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`

const Product = ({item}) => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=>{
          try{
            const res = await publicRequest.get("/products/find/"+id);
            setProduct(res.data);        
          }catch{}
        }
        getProduct()
      },[id])
    
    const handleClick = ()=>{
        dispatch(addProduct({...product,quantity}));
        
      }
    
    return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            {/* <Icon>
                <Link onClick={handleClick}>
                <ShoppingCartOutlined/>
                </Link>
            </Icon> */}
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            {/* <Icon>
                <FavoriteBorderOutlined/>
            </Icon> */}
        </Info>
    </Container>
  )
}

export default Product