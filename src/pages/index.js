import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <StaticImage``
            src="../images/square_logo_foss4gna_stl_2024.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
          <h1 className="fw-light">September 9 - 11</h1>
          <p className="lead text-muted">Scaling Geospatial into the Future</p>
          <p>
            FOSS4G North America is the premier open geospatial technology and
            business conference with a vibrant and welcoming atmosphere for
            technologists, end-users, academics, and decision makers. This
            year's conference will be held at the Hyatt Regency St. Louis At The
            Arch. The conference dates are September 9th  through 11th.
          </p>
        </div>
      </div>
      <div className="row">
        <Link to="https://us19.list-manage.com/contact-form?u=8635900ee697ecbb8a595f92d&form_id=2a26281da80916604418c94616d3a1ac" className="btn btn-primary my-2">
          Join the mailing list for future announcements
        </Link>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const Head = () => <Seo />;
