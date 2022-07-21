import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'wrapperPromotion',
  'wrapperTitle',
  'promotionTitle',
  'wrapperInfo',
  'promotionInfo',
  'promotionText',
]

const PromotionBanner: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.wrapperPromotion}`}>
      <div className={`${handles.wrapperTitle}`}>
        <h1 className={`${handles.promotionTitle}`}>PROMOÇÃO</h1>
      </div>
      <div className={`${handles.wrapperInfo}`}>
        <h2 className={`${handles.promotionInfo}`}>30%</h2>
        <p className={`${handles.promotionText}`}>ITEMS</p>
        <p className={`${handles.promotionText}`}>SELECIONADOS</p>
      </div>
    </div>
  )
}

export default PromotionBanner
