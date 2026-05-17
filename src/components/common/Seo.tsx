import { Helmet } from "react-helmet-async";

type Props = {
  title: string;

  description: string;

  keywords?: string;

  image?: string;
};

const Seo = ({ title, description, keywords, image }: Props) => {
  return (
    <Helmet>
      <link rel="canonical" href="https://www.speedlinetransfers.com" />
      {/* TITLE */}
      <title>{title}</title>

      {/* META */}
      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content={image} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
