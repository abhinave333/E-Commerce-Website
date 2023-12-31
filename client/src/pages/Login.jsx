import styled from "styled-components"
import {mobile} from "../responsive"
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  const [Username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  const handleClick = (e)=>{
    e.preventDefault()
    login(dispatch,{Username,password})
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create an Account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login