import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

const SponsorPage = () => (
  <Layout>
    <div className="container">
      <div className="container">
        <div className="row my-3">
          <h1 className="text-center text-uppercase text-secondary fw-bold my-4">
            SPONSORS OF FOSS4G NORTH AMERICA HAVE A UNIQUE OPPORTUNITY TO BE AN
            INTEGRAL PART OF THE ENTIRE EVENT
          </h1>
          <div className="row my2">
            <div className="row my2">
              <div className="col-md-12 col-lg-4 my-2">
                <p>
                  The Global FOSS4G movement delivers camaraderie, and
                  networking opportunities that lead to synergies in the
                  community as well as opportunities to give and receive help on
                  specific technical issues or to generate business
                  opportunities.
                </p>
                <p>
                  The 2024 conference program will include hands-on workshops,
                  B2B opportunities and technical sessions on current topics
                  relevant to the FOSS4G community including web mapping, AI,
                  3D, AR/VR, IoT, Visualization, Analysis, Spatial Databases,
                  geoprocessing, Big Data and more.
                </p>
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                <p>
                  Here is a partial list of well-known organizations who have
                  attended FOSS4G NA: DigitalGlobe, Boeing, Esri, Dell, Google,
                  Ericsson, Mapbox, Boundless, CARTO, IBM, Lockheed Martin, NGA,
                  NASA, Red Cross, NOAA, U.S. Army Corps of Engineers, U.S.
                  Department of Defense, U.S. Geological Survey, Azavea, Oak
                  Ridge National, Laboratory, Oracle, Red Hat, Planet Labs,
                  Cisco, Thales, CCRI, Analytical Graphics, Amazon, Rackspace,
                  Hortonworks, Saab, Github, Apple, Factual, World Bank, Tesla,
                  Trimble and Twitter.
                </p>
                <a
                  href={"foss4gna-2024-exhibitor-and-sponsor-brochure.pdf"}
                  className="btn btn-primary my-2"
                >
                  Download The Prospectus
                </a>
              </div>
              <div className="col-md-12 col-lg-4 my-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default SponsorPage;

export const Head = () => <Seo title="Sponsor FOSS4GNA St. Louis 2024" />;
