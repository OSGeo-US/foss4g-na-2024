import * as React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row">
        <a
          href="https://talks.osgeo.org/foss4g-na-2024"
          className="btn btn-danger my-2"
        >
          The Call For Presentations is Open! Click Here to Learn More!
        </a>
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
            Sept 9th - 11th
            <br />
            <a href="https://www.hyatt.com/hyatt-regency/en-US/stlrs-hyatt-regency-st-louis-at-the-arch">
              Hyatt Regency St. Louis At The Arch
            </a>
          </p>
          <div className="text-start">
            <div className="row my-3">
              <div className="col-1"></div>
              <div className="col-10">
                FOSS4G North America is the premier open geospatial technology
                and business conference with a vibrant and welcoming atmosphere
                for technologists, end-users, academics, and decision makers.
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row mb-5">
              <div className="col-1"></div>
              <div className="col-10">
                Checkout some of last years sessions on{" "}
                <a href="https://www.projectgeospatial.com/foss4gna2023">
                  Project Geospatial
                </a>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-2 bg-secondary"></div>
              <div className="col-8 bg-secondary fw-bolder text-uppercase text-white">
                Dates of interest
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-2">6/2</div>
              <div className="col-8">RFP Closes</div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-2 text-start">6/17</div>
              <div className="col-8 text-start">Announce The Program</div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-2">7/1</div>
              <div className="col-8">Open Registration</div>
            </div>
            <div className="row mt-2">
              <div className="col-1"></div>
              <div className="col-2">9/9</div>
              <div className="col-8">Workshop Day, B2B, Icebreaker</div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-2">9/10-11</div>
              <div className="col-8">Main Session Days</div>
            </div>
            <div className="row mb-4">
              <div className="col-1"></div>
              <div className="col-2">9/10</div>
              <div className="col-8">Gala</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <a
          href="https://us19.list-manage.com/contact-form?u=8635900ee697ecbb8a595f92d&form_id=2a26281da80916604418c94616d3a1ac"
          className="btn btn-primary my-2"
        >
          Join the mailing list for future announcements
        </a>
      </div>
      <div className="row">
        <a
          href="https://forms.gle/SqiZtPecLtKq6vrz9"
          className="btn btn-secondary my-2"
        >
          Click Here to Contact Us
        </a>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const Head = () => <Seo />;
