import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'wrapperButton',
  'accountButton'
]

const CashbackButton: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.wrapperButton}`}>
      <button className={`${handles.accountButton}`} type="button" onClick={()=> ({})}>Veja sua pontuação</button>
    </div>
  )
}

export default CashbackButton
