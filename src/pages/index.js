import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row">
        <Link
          to="https://talks.osgeo.org/foss4g-na-2024"
          className="btn btn-danger my-2"
        >
          Call For Presentations
        </Link>
      </div>
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <StaticImage
            src="../images/square_logo_foss4gna_stl_2024.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="FOSS4G NA 2024 Logo`"
            className="img-fluid"
          />
          <p className="lead text-muted">Scaling Geospatial into the Future</p>
          <p>
            Sept 9-11
            <br />
            Hyatt Regency St. Louis At The Arch
          </p>
          <div class="text-start">
            <div class="row my-4 ">
              <div class="col-1"></div>
              <div class="col-10">
                FOSS4G North America is the premier open geospatial technology
                and business conference with a vibrant and welcoming atmosphere
                for technologists, end-users, academics, and decision makers.
              </div>
              <div class="col-1"></div>
            </div>
            <div class="row text-center">
              <div class="col-12 font-weight-bold text-uppercase">
                Dates of interest
              </div>
            </div>
            <div class="row mt-1 ">
              <div class="col-2"></div>
              <div class="col-2">Soon</div>
              <div class="col-8">Request for Proposals (RFP)</div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-2">6/2</div>
              <div class="col-8">RFP Closes</div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-2 text-start">6/17</div>
              <div class="col-8 text-start">Announce The Program</div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-2">7/1</div>
              <div class="col-8">Open Registration</div>
            </div>
            <div class="row mt-2">
              <div class="col-2"></div>
              <div class="col-2">9/9</div>
              <div class="col-8">Workshop Day, B2B, Icebreaker</div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-2">9/10-11</div>
              <div class="col-8">Main Session Days</div>
            </div>
            <div class="row mb-4">
              <div class="col-2"></div>
              <div class="col-2">9/10</div>
              <div class="col-8">Gala</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Link
          to="https://us19.list-manage.com/contact-form?u=8635900ee697ecbb8a595f92d&form_id=2a26281da80916604418c94616d3a1ac"
          className="btn btn-primary my-2"
        >
          Join the mailing list for future announcements
        </Link>
      </div>
      <div className="row">
        <Link
          to="https://forms.gle/SqiZtPecLtKq6vrz9"
          className="btn btn-secondary my-2"
        >
          Contact Us
        </Link>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const Head = () => <Seo />;
