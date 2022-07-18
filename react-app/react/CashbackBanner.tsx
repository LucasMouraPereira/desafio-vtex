import React from 'react'
// import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['container', 'value']

const CashbackBanner: StorefrontFunctionComponent = () => {
  // const productContextValue = useProduct()
  const handles = useCssHandles(CSS_HANDLES)
  // const [cashback, setCashback] = useState<number | null>(null)

  // useEffect(() => {
  //   const productPrice =
  //     productContextValue?.product?.priceRange?.sellingPrice?.highPrice

  //   productPrice && setCashback(Math.floor(productPrice))
  // }, [productContextValue])

  return (
    <div className={`${handles.container}`}>
      <div>
        <img src="../react/images/step-1.png" alt="camisas" />
      </div>
      <div>
        <h1>CASHBACK</h1>
        <h2>Smartbee</h2>
        <p>Com a Smartbee seu dinheiro de volta</p>
      </div>
    </div>
  )
}

export default CashbackBanner
