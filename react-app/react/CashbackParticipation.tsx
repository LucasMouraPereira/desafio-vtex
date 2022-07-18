import React from 'react'
import { IconPlus } from 'vtex.store-icons'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'wrapperCashbackInfo',
  'title',
  'wrapperIconList',
  'wrapperIcon',
  'IconTitle',
  'IconText',
]

const CashbackParticipation: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.wrapperCashbackInfo}`}>
      <h2 className={`${handles.title}`}>Veja como é fácil participar</h2>
      <div className={`${handles.wrapperIconList}`}>
        <div className={`${handles.wrapperIcon}`}>
          <img src="" alt="" />
          <p className={`${handles.IconTitle}`}>COMPRE</p>
          <span className={`${handles.IconText}`}>
            A cada um <strong>R$ 1</strong> em produtos
          </span>
        </div>
        <div>
          <IconPlus />
        </div>
        <div className={`${handles.wrapperIcon}`}>
          <img src="" alt="" />
          <p className={`${handles.IconTitle}`}>GANHE</p>
          <span className={`${handles.IconText}`}>
            <strong>1</strong> ponto
          </span>
        </div>
        <div>
          <IconPlus />
        </div>
        <div className={`${handles.wrapperIcon}`}>
          <img src="" alt="" />
          <p className={`${handles.IconTitle}`}>TROQUE</p>
          <span className={`${handles.IconText}`}>
            Por outros<strong>produtos ou serviços</strong> em lojas parceiras
          </span>
        </div>
        <div>
          <IconPlus />
        </div>
        <div className={`${handles.wrapperIcon}`}>
          <img src="" alt="" />
          <p className={`${handles.IconTitle}`}>CADASTRE</p>
          <span className={`${handles.IconText}`}>
            Para acessar a <strong>sua conta</strong> e veja seus pontos
          </span>
        </div>
      </div>
    </div>
  )
}

export default CashbackParticipation
