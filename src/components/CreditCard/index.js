import {useState} from 'react'
import {
  BgContainer,
  CardBgContainer,
  CardHeadingContainer,
  CardMainHeading,
  HorizontalLine,
  CardImageContainer,
  CardNumber,
  CardHolder,
  CardHolderName,
  CardFormContainer,
  FormCard,
  FormHeading,
  CardNumberInput,
  CardHolderNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, getCardNumber] = useState('')
  const [cardName, getCardName] = useState('')

  const onChangeCardNumber = event => {
    getCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    getCardName(event.target.value)
  }

  return (
    <BgContainer>
      <CardBgContainer>
        <CardHeadingContainer>
          <CardMainHeading>CREDIT CARD</CardMainHeading>
          <HorizontalLine />
        </CardHeadingContainer>
        <CardImageContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolder>CARDHOLDER NAME</CardHolder>
          <CardHolderName>{cardName.toUpperCase()}</CardHolderName>
        </CardImageContainer>
      </CardBgContainer>
      <CardFormContainer>
        <FormCard>
          <FormHeading>Payment Method</FormHeading>
          <CardNumberInput
            placeholder="Card Number"
            onChange={onChangeCardNumber}
          />
          <CardHolderNameInput
            placeholder="Cardholder Name"
            onChange={onChangeCardName}
          />
        </FormCard>
      </CardFormContainer>
    </BgContainer>
  )
}

export default CreditCard
