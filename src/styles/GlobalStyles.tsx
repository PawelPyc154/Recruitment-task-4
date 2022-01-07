import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  .light {
    --bg-primary: #f5f1f1;
    --bg-secondary: #f1f1f1;
    /* --text-primary: #475569; */
    /* --text-secondary: #1E293B; */
   
  }
  .dark {
    --bg-primary: #303030;
    --bg-secondary: #424242;
    /* --text-primary: #CBD5E1; */
    /* --text-secondary: #FFFFFF; */

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
