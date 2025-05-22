import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Property listing application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to ALX Listing App
        </h1>
      </main>
    </>
  );
} 