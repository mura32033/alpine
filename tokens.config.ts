import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      backgroundColor: {
        initial: '{color.gray.50}',
        dark: '{color.gray.800}'
      },
      color: {
        initial: '{color.gray.800}',
        dark: '{color.gray.200}'
      }
    }
  }
})
