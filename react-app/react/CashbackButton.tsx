import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import axios from 'axios';

const CSS_HANDLES = [
  'wrapperButton',
  'accountButton',
  'errorInformation'
]

const CashbackButton: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [error, setError] = useState(false);

  const requestProfile = async() => {
    const { data } = await axios.get(`/no-cache/profileSystem/getProfile`);
    if(data.IsUserDefined) {
      window.location.href = '/account#/cashback'
      return
    }

    if(!data.IsUserDefined) {
      setError(true);
    }
  }

  return (
    <div className={`${handles.wrapperButton}`}>
      <button
        className={`${handles.accountButton}`}
        type="button"
        onClick={()=> {
          requestProfile()
        }}>
        Veja sua pontuação
      </button>
      {error ? (
        <div className={`${handles.errorInformation}`}>
          <span>Você precisa acessar sua conta</span>
        </div>
      ) : null}
    </div>
  )
}

export default CashbackButton
