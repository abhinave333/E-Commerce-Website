import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Footer from "../components/Footer"

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`
const Option = styled.option`

`
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (Asc)</Option>
            <Option>Price (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}

export default ProductList