import { Facebook, Instagram, MailOutline, Phone, Room } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding; 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Social = styled.div`
    display: flex;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    boder-radius: 50%;
    color: white;
    background-color: #3b5999;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Contact = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Desc>
                <Social>
                    <Icon>
                        <Facebook/>
                    </Icon>
                    <Icon>
                        <Instagram/>
                    </Icon>
                </Social>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Orders</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <Contact>
                    <Room style={{marginRight:"10px"}}/>Aloor, Thrissur
                </Contact>
                <Contact>
                    <Phone style={{marginRight:"10px"}}/>+91 90007 70009
                </Contact>
                <Contact>
                    <MailOutline style={{marginRight:"10px"}}/>contact@gmail.com
                </Contact>
            </Right>
        </Container>
  )
}

export default Footer