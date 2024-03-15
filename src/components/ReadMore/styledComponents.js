import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 56%;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 32px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 24px;
`

export const Image = styled.img`
  width: 100%;
  height: 50vh;
`

export const Description = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 18px;
`

export const Button = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  background-color: #1f81ff;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 8px;
`
