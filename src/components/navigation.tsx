import 'twin.macro'
import { ThemeToggle } from './styles/themeToggle'

const Navigation = () => (
  <div tw="bg-orange flex justify-between items-center py-4 px-8">
    <div tw="text-3xl">LOGO</div>
    <ThemeToggle />
  </div>
)

export { Navigation }
