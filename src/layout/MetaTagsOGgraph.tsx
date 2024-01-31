import { Helmet } from 'react-helmet'


type MetaType = {
  title: string;
  description: string;
  url: string;
  image: string;
}
export const MetaTags = ({ title, description, url, image }: MetaType) => {

  return (
    <Helmet>
      {/* FACEBOOK OG-graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="article" />

      {/* TWITTER CARD */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
} 