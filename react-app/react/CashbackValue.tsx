import React, { useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['container', 'value']

const CashbackValue: StorefrontFunctionComponent = () => {
  const productContextValue = useProduct()
  const handles = useCssHandles(CSS_HANDLES)
  const [cashback, setCashback] = useState<number | null>(null)

  useEffect(() => {
    const productPrice =
      productContextValue?.product?.priceRange?.sellingPrice?.highPrice

    productPrice && setCashback(Math.floor(productPrice))
  }, [productContextValue])

  return (
    <div className={`${handles.container}`}>
      <span>
        Você receberá:
        {` `}
        <strong className={`${handles.value}`}>{cashback}</strong>
        {` `}
        pontos
      </span>
    </div>
  )
}

export default CashbackValue
