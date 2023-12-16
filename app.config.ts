export default defineAppConfig({
  alpine: {
    title: 'むらのブログ',
    description: 'むらの日常をつらつらと',

    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },

    header: {
      position: 'center', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'むらのアイコン' // alt of the logo
      }
    },

    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: '',

        text: 'むらのブログ'
      },
      navigation: false, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    socials: {
      twitter: '',
      instagram: '',

      linkedin: '',

      github: ''
    },

    form: {
      successMessage: 'Message sent. Thank you!'
    },

    backToTop: {
      text: '上に戻る'
    }
  }
})