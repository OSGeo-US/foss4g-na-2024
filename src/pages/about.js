import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

const AboutPage = () => (
  <Layout>
    <div className="container">
      <div className="container">
        <div className="row my-3">
          <h1 className="text-center text-uppercase bg-secondary text-white">
            About
          </h1>
          <div className="row my2">
            <div className="row my2">
              <div className="col-md-12 col-lg-4 my-2">
                This event aims to share knowledge and experiences with open
                source geospatial technologies and open data. It will empower
                individuals and organizations to leverage their resources to
                communicate common issues and institute effective, scalable, and
                resilient solutions.
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                The annual FOSS4G NA conference is North America's largest
                gathering focused on open source geospatial software. FOSS4G NA
                brings together developers, users, decision-makers, and
                observers from a broad spectrum of organizations and fields of
                operation. FOSS4G NA participants create practical and relevant
                geospatial products, standards, and protocols through three days
                of workshops, presentations, discussions, and cooperation.
                FOSS4G NA has been held in Baltimore, Raleigh, and many other
                cities across North America.
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                FOSS4GNA is a volunteer-run conference. Technocation, a
                non-profit dedicated to creating educational opportunities for
                IT professionals, is the financial sponsor. OSGeo US Local
                Chapter produces this event.
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <h1 className="text-center text-uppercase bg-secondary text-white">
            Code Of Conduct
          </h1>
          <div className="row my2">
            <div className="row my2">
              <div className="col-md-12 col-lg-4 my-2">
                Participants at the FOSS4G-NA St Louis 2024 conference are
                expected to act respectfully toward others per our{" "}
                <a href="http://2023.foss4gna.org/assets/pdf/foss4gna-2023-COC.pdf">
                  FOSS4G NA Code of Conduct
                </a>
                . Once the program is available, this code of conduct will be
                expanded with more details.
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                The FOSS4G NA organizing committee is dedicated to providing a
                harassment-free conference experience for everyone, regardless
                of gender, gender identity and expression, age, sexual
                orientation, disability, physical appearance, body size, race,
                religion, or technology choices. We do not tolerate harassment
                of conference participants in any form. All communication should
                be appropriate for a professional audience, including people of
                different backgrounds.
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                Sexual language and imagery are not appropriate for any
                conference venue, including talks, workshops, social media, or
                parties. Be kind to others. Do not insult or put down other
                attendees. Behave professionally. Remember that harassment and
                sexist, racist, or exclusionary jokes are not appropriate for
                FOSS4G. Attendees violating these rules may be asked to leave
                the conference without a refund at the sole discretion of the
                conference organizers. Thank you for helping make this a
                welcoming, friendly event for all.
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <h1 className="text-center text-uppercase bg-secondary text-white">
            Accommodations
          </h1>
          <div className="row my2">
            <div className="col-md-12 col-lg-4">
              The host hotel for this year's FOSS4G NA is the &nbsp;
              <a href="https://www.hyatt.com/hyatt-regency/en-US/stlrs-hyatt-regency-st-louis-at-the-arch">
                <strong>Hyatt Regency St. Louis at the Arch</strong>
              </a>
              , located in downtown St. Louis and offering easy access to the
              most desirable attractions.
            </div>
            <div className="col-md-12 col-lg-4">
              Our conference group room rate is $189. It is available until
              August 19th.
              <div className="text-center my-2">
                <a
                  href="https://www.hyatt.com/en-US/group-booking/STLRS/G-FOSS"
                  className="btn btn-primary my-2"
                >
                  Reserve your room now
                </a>
              </div>
            </div>
            <div className="col-md-12 col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;

export const Head = () => <Seo title="About FOSS4GNA St. Louis 2024" />;
