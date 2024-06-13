import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const CardBgContainer = styled.div`
  background-image: linear-gradient(#344e7a, #3b4b69);
  height: 55vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50%;
    justify-content: space-around;
  }
`

export const CardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`

export const CardMainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const HorizontalLine = styled.hr`
  width: 200px;
  border: 2px solid #ffd773;
`

export const CardImageContainer = styled.div`
  height: 35vh;
  width: 90%;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 40px 30px;
  @media screen and (min-width: 768px) {
    height: 50vh;
    width: 90%;
    padding: 80px 40px 40px 40px;
  }
`

export const CardNumber = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const CardHolder = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;
  margin-top: 0px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const CardFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45vh;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100vh;
  }
`

export const FormCard = styled.form`
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`

export const FormHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 28px;
  margin-bottom: 60px;
  margin-top: 40px;
  line-height: 1.5;
`

export const CardNumberInput = styled.input`
    color: #344e7a;
    font-family: "Roboto"
    font-size: 16px;
    outline: none;
    border: 1px solid  #c3cad9;
    width: 80%;
    margin-bottom: 40px;
    padding: 10px 15px 10px 15px;
    @media screen and (min-width: 768px){
        width: 60%;
    }
`

export const CardHolderNameInput = styled(CardNumberInput)`
  margin-bottom: 40px;
`
