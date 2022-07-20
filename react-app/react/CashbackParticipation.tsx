import React from 'react'
import {
  IconPlus,
  IconCart,
  IconHeart,
  IconSearch,
  IconProfile,
} from 'vtex.store-icons'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'wrapperCashbackInfo',
  'title',
  'wrapperIconList',
  'wrapperIcon',
  'iconTitle',
  'iconText',
  'iconText2',
  'iconInfo',
  'plus',
]

const CashbackParticipation: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.wrapperCashbackInfo}`}>
      <h2 className={`${handles.title}`}>Veja como é fácil participar</h2>
      <div className={`${handles.wrapperIconList}`}>
        <div className={`${handles.wrapperIcon}`}>
          <IconCart size={80} />
          <p className={`${handles.iconTitle}`}>COMPRE</p>
          <span className={`${handles.iconText}`}>
            A cada <strong className={`${handles.iconInfo}`}>R$ 1</strong> em
            produtos
          </span>
        </div>
        <div className={`${handles.plus}`}>
          <IconPlus />
        </div>
        <div className={`${handles.wrapperIcon}`}>
          <IconHeart size={80} />
          <p className={`${handles.iconTitle}`}>GANHE</p>
          <span className={`${handles.iconText}`}>
            <strong className={`${handles.iconInfo}`}>1</strong> ponto
          </span>
        </div>
        <div className={`${handles.plus}`}>
          <IconPlus />
        </div>
        <div className={`${handles.wrapperIcon}`}>
          <IconSearch size={80} />
          <p className={`${handles.iconTitle}`}>TROQUE</p>
          <span className={`${handles.iconText2}`}>
            Por outros{' '}
            <strong className={`${handles.iconInfo}`}>
              produtos ou serviços
            </strong>{' '}
            em lojas parceiras
          </span>
        </div>
        <div className={`${handles.plus}`}>
          <IconPlus />
        </div>
        <div className={`${handles.wrapperIcon}`}>
          <IconProfile size={80} />
          <p className={`${handles.iconTitle}`}>CADASTRE</p>
          <span className={`${handles.iconText2}`}>
            Para acessar a{' '}
            <strong className={`${handles.iconInfo}`}>sua conta</strong> e veja
            seus pontos
          </span>
        </div>
      </div>
    </div>
  )
}

export default CashbackParticipation
