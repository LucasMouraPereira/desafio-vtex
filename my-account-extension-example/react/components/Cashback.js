/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import { OrderQueueProvider } from 'vtex.order-manager/OrderQueue'
import { OrderFormProvider, useOrderForm } from 'vtex.order-manager/OrderForm'

const Cashback = () => (
  <OrderQueueProvider>
    <OrderFormProvider>
      <UserSupport />
    </OrderFormProvider>
  </OrderQueueProvider>
)

const UserSupport = () => {
  const { orderForm } = useOrderForm()
  console.log(orderForm)
  return (
    <div>
      <h1>Cashback - Seu dinheiro de volta</h1>
      <div>How can I help you today?</div>
    </div>
  )
}

export default Cashback
