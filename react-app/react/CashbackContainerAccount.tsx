import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'wrapperAccount',
  'title',
  'textInformation'
]

const CashbackContainerAccount: StorefrontFunctionComponent = ({ children } : any) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.wrapperAccount}`}>
      <h3 className={`${handles.title}`}>
        Veja sua Pontuação
      </h3>
      <p className={`${handles.textInformation}`}>Acesse sua conta</p>
      {children}
    </div>
  )
}

export default CashbackContainerAccount
