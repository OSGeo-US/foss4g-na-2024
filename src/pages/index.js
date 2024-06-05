import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row">
        <p>
          <a
            href="https://talks.osgeo.org/foss4g-na-2024"
            className="btn btn-danger float"
          >
            The Call For Presentations is Open!
            <br />
            Closing June 9th
            <br />
            Click Here to Learn More!
          </a>
        </p>
      </div>
      <div className="row py-lg-2">
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
        </div>
        <div className="col-lg-6 col-md-8 mx-auto">
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
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                Checkout some of last years sessions on{" "}
                <a href="https://www.projectgeospatial.com/foss4gna2023">
                  Project Geospatial
                </a>
              </div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-7 fw-bold text-uppercase text-center text-secondary my-3">
                Dates of interest
              </div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-3 border">6/9 (Midnight CST)</div>
              <div className="col-5 border">RFP Closes at </div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-3 border">6/17</div>
              <div className="col-5  border">Announce The Program</div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-3 border">7/1</div>
              <div className="col-5 border">Open Registration</div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-3 border">9/9</div>
              <div className="col-5 border">Workshop Day, B2B, Icebreaker</div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-3 border">9/10-9/11</div>
              <div className="col-5 border">Main Session Days</div>
            </div>
            <div className="row  justify-content-center">
              <div className="col-3 border">9/10</div>
              <div className="col-5 border">Gala</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <p>
          <a
            href="https://us19.list-manage.com/contact-form?u=8635900ee697ecbb8a595f92d&form_id=2a26281da80916604418c94616d3a1ac"
            className="btn btn-primary mt-3 mb-2"
          >
            Join the mailing list for future announcements
          </a>
        </p>
      </div>
      <div className="row">
        <p>
          <a
            href="https://forms.gle/SqiZtPecLtKq6vrz9"
            className="btn btn-secondary mb-2"
          >
            Click Here to Contact Us
          </a>
        </p>
      </div>
      <div className="row">
        <h1 className="text-center text-uppercase text-secondary fw-bold my-4">
          Sponsors
        </h1>
        <p>
          Learn more about contributing to this conference aas a sponsor on our{" "}
          <Link to="/sponsor/">Sponsor Page</Link>.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
