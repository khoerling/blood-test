import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://js.stripe.com/v3/" />
          <link
            href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Manjari:100,400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
