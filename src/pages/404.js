import React from "react";
import { Link } from "gatsby";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";

export default function NotFound() {
  return (
    <Layout title="Page non trouvée !">
      <SEO title="404: Not found" />
      <p>Whoops, on dirait que cette page n'existe plus.</p>
      <p>
        Vous pouvez accéder à la <Link to="/">page d'accueil</Link> ou
        directement à la <a href="https://tenoco.net">plateforme</a>.
      </p>
    </Layout>
  );
}
