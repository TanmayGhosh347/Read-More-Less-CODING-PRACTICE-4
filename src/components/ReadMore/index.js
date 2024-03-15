import {useState} from 'react'
import {
  AppContainer,
  MainContainer,
  Heading,
  Paragraph,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [readMore, isReadMore] = useState(false)
  const onToggleButton = () => {
    isReadMore(prevState => !prevState)
  }
  console.log(readMore)
  const {reactHooksDescription} = props
  const description =
    readMore === true
      ? reactHooksDescription
      : reactHooksDescription.slice(0, 170)
  const buttonText = readMore ? 'Read Less' : 'Read More'
  return (
    <AppContainer>
      <MainContainer>
        <Heading>React Hooks</Heading>
        <Paragraph>Hooks are a new addition to React</Paragraph>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onToggleButton}>
          {buttonText}
        </Button>
      </MainContainer>
    </AppContainer>
  )
}

export default ReadMore
