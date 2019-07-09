import React from "react"
import Client from "shopify-buy"

export const ShopContext = React.createContext()

export class ShopProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.client = null
  }

  initShop = async () => {
    this.client = Client.buildClient({
      domain: "xxxx.myshopify.com",
      storefrontAccessToken: "xxxx"
    })

    const products = await this.client.product
      .fetchAll()
      .then(products => {
        this.setState({ products: products })
      })
      .catch(err => console.log(err)) // eslint-disable-line no-console
  }

  componentDidMount() {
    this.initShop()
  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}
