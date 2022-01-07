import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  .light {
    --bg-primary: #0077ff;
    --bg-secondary: #009cf6;
  }
  .dark {
    --bg-primary: #303030;
    --bg-secondary: #424242;
  }
  body {
    ${tw`text-white bg-primary`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export { GlobalStyles }
