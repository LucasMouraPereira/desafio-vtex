/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { OrderQueueProvider } from 'vtex.order-manager/OrderQueue'
import { OrderFormProvider, useOrderForm } from 'vtex.order-manager/OrderForm'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'wrapperCashback',
  'cashbackTitle',
  'cashbackBody',
  'userName',
  'userPts',
  'cashbackTable',
  'cashbackTableHeader',
  'cashbackTitleHeader',
  'userTitle',
]

const Cashback = () => (
  <OrderQueueProvider>
    <OrderFormProvider>
      <UserSupport />
    </OrderFormProvider>
  </OrderQueueProvider>
)

const UserSupport = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { orderForm } = useOrderForm()
  const [pts, setPts] = useState(0)
  const [shoppingList, setShoppingList] = useState(null)

  const formatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format

  const requestOrderForm = async () => {
    const { data } = await axios.get(
      `/api/oms/pvt/orders?q=${orderForm.clientProfileData.email}&f_creationDate=creationDate%3A%5B2022-01-01T02%3A00%3A00.000Z%20TO%202024-01-01T01%3A59%3A59.999Z%5D&f_hasInputInvoice=false`,
      {
        headers: {
          'X-VTEX-API-AppKey': 'vtexappkey-controll-BDFXOB',
          'X-VTEX-API-AppToken':
            'PQVTMMHHLQHTACIEGHGSWGAGWUJLSGCYNSKOUKRUAINXUVGHYSMUGMUCJTVBNCTCEEWFPTNJZFKIGTRWMGULFMOQRXJQEQNVWEQLBOZVXXEUKIFLXTVMWEJTTYVEJVZQ',
        },
      }
    )
    setShoppingList(data.list)
    const response = data.list.reduce(
      (a, b) => a + Math.floor(b.totalValue / 100),
      0
    )
    setPts(response)
  }

  useEffect(() => {
    orderForm.clientProfileData && requestOrderForm()
  }, [orderForm.clientProfileData])

  return (
    <div className={`${handles.wrapperCashback}`}>
      <h1 className={`${handles.cashbackTitle}`}>
        Cashback - Seu dinheiro de volta
      </h1>
      {orderForm.clientProfileData && (
        <div className={`${handles.cashbackBody}`}>
          <p>
            Olá{' '}
            <span className={`${handles.userName}`}>
              {orderForm.clientProfileData.firstName}
            </span>
            ,
          </p>
          <div>
            <p>
              Vocẽ tem{' '}
              <strong className={`${handles.userPts}`}>{pts} pontos</strong>{' '}
              acumulados!
            </p>
          </div>
          {shoppingList !== null && (
            <div>
              <h3 className={`${handles.userTitle}`}>Consulte seu extrato</h3>
              <div>
                <table className={`${handles.cashbackTable}`}>
                  <tr className={`${handles.cashbackTableHeader}`}>
                    <td className={`${handles.cashbackTitleHeader}`}>Loja</td>
                    <td className={`${handles.cashbackTitleHeader}`}>Data</td>
                    <td className={`${handles.cashbackTitleHeader}`}>Valor</td>
                    <td className={`${handles.cashbackTitleHeader}`}>Pontos</td>
                  </tr>
                  {shoppingList.map(
                    ({ hostname, totalValue, creationDate }, index) => (
                      <tr
                        className={`${handles.cashbackTableHeader}`}
                        key={index}
                      >
                        <td>{hostname}-2</td>
                        <td>{moment(creationDate).format('DD/MM/YYYY')}</td>
                        <td>{formatPrice(totalValue / 100)}</td>
                        <td className={`${handles.userPts}`}>
                          {Math.floor(totalValue / 100)}
                        </td>
                      </tr>
                    )
                  )}
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Cashback
