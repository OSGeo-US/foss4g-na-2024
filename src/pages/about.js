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
            Code Of Conduct
          </h1>
          <div className="row my2">
            <div className="row my2">
              <div className="col-md-12 col-lg-4">
                Participants at the FOSS4G-NA St Louis 2024 conference are
                expected to act respectfully toward others in accordance
                <a href="http://2023.foss4gna.org/assets/pdf/foss4gna-2023-COC.pdf">
                  with our FOSS4G NA Code of Conduct
                </a>
                . Once the full program is available, this code of conduct will
                be expanded upon with more details. Participants at FOSS4G-NA St
                Louis 2024 conference are expected to act respectfully toward
                others in accordance{" "}
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                OSS4G is dedicated to providing a harassment-free conference
                experience for everyone, regardless of gender, gender identity
                and expression, age, sexual orientation, disability, physical
                appearance, body size, race, religion, or technology choices. We
                do not tolerate harassment of conference participants in any
                form. All communication should be appropriate for a professional
                audience, including people of different backgrounds.{" "}
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                Sexual language and imagery is not appropriate for any
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
              &nbsp;(315 Chestnut St, St. Louis, MO 63102), located in downtown
              St. Louis and offering easy access to the most desirable
              attractions. Our conference group room rate is $189, and it is
              available until August 19th.
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
