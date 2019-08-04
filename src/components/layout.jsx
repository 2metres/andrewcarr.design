const Layout = ({ children }) => {

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <title>Andrew Carr – Product Designer</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,200,300,400,500,600,700,800,900|Roboto:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="/styles/tailwind.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default Layout