import React from 'react'
import { IconMenu } from 'vtex.store-icons'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['wrapperCashbackInfo', 'title', 'wrapperIconList']

const CashbackParticipation: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.wrapperCashbackInfo}`}>
      <h2 className={`${handles.title}`}>Veja como é fácil participar</h2>
      <div className={`${handles.wrapperIconList}`}>
        <div>
          <IconMenu />
          <p>COMPRE</p>
          <span>
            A cada um <strong>R$ 1</strong> em produtos
          </span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <p>GANHE</p>
          <span>
            <strong>1</strong> ponto
          </span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <p>TROQUE</p>
          <span>
            Por outros<strong>produtos ou serviços</strong> em lojas parceiras
          </span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <p>CADASTRE</p>
          <span>
            Para acessar a <strong>sua conta</strong> e veja seus pontos
          </span>
        </div>
      </div>
    </div>
  )
}

export default CashbackParticipation
