import React from "react"
import { ShopContext } from "./shopContext"

const withShopContext = Component => {
  return class extends React.Component {
    render() {
      return (
        <ShopContext.Consumer>
          {context => {
            return <Component {...this.props} shopContext={context} />
          }}
        </ShopContext.Consumer>
      )
    }
  }
}

export default withShopContext
