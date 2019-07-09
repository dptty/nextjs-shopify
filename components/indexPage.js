import withShopContext from "../lib/withShopContext"

const IndexPage = props => {
  const {
    state: { products = [] }
  } = props.shopContext

  return (
    <div>
      <h1>Index Page</h1>
      {products.length > 0 && (
        <ul>
          {products.map((product, i) => (
            <li key={i}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default withShopContext(IndexPage)
