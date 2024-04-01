import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Cheryl is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="cheryl goh, cheryl, goh, web developer portfolio, cheryl web developer, cheryl developer, cheryl goh portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Cheryl's Portfolio" />
      <meta
        property="og:description"
        content="A front-end developer by day, A dancer by night"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image" content="https://cherriel-designs.vercel.app/me.jpeg" />
      <meta property="og:url" content="https://cherriel-designs.vercel.app" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Cheryl Goh | Front End Developer"
      />
      <meta
        name="twitter:description"
        content="A front-end developer by day, A dancer by night"
      />
      <meta name="twitter:image" content="https://cherriel-designs.vercel.app/me.jpeg" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Cheryl Goh',
};
