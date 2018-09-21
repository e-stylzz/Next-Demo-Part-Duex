import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <title>Next.JS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href='https://fonts.googleapis.com/css?family=Dawning of a New Day' rel='stylesheet'></link>
    </Head>
    
    <style jsx global>{`
      body { 
        background: #FFF;
        font: 15px menlo;
        color: #000;
      }
    `}</style>
  </div>
)