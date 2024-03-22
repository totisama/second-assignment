// vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  plugins: [
    basicSsl({
      /** name of certification */
      name: 'example.com',
      /** custom trust domains */
      domains: ['localhost'],
      /** custom certification directory */
      certDir: './example.com+5.pem',
    }),
  ],
}
