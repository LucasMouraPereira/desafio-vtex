import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'wrapperBanner',
  'bannerTitle',
  'bannerSubtitle',
  'bannerText',
]

const CashbackBanner: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.wrapperBanner}`}>
      <h1 className={`${handles.bannerTitle}`}>CASHBACK</h1>
      <h2 className={`${handles.bannerSubtitle}`}>Smartbee</h2>
      <p className={`${handles.bannerText}`}>
        Com a Smartbee seu dinheiro de volta
      </p>
    </div>
  )
}

export default CashbackBanner
