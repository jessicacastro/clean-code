// Código em inglês 
import { useState, ChangeEvent } from "react"

interface Product {
  title: string;
  price: string;
}

const productsList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])

  function searchProducts(search: string) {
    const searchedProductsByUser = productsList.filter(product => product.title.includes(search))

    setSearchedProducts(searchedProductsByUser)
  }

  return (
    <div>
      <input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => searchProducts(event.target.value)} />

      {searchedProducts.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}