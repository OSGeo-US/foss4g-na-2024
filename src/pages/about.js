import * as React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

const AboutPage = () => (
  <Layout>
    <div className="container">
      <div className="container">
        <div className="row my-3">
          <h1 className="text-center text-uppercase text-secondary fw-bold my-4">
            About
          </h1>
          <div className="row my2">
            <div className="row my2">
              <div className="col-md-12 col-lg-4 my-2">
                <p>
                  The Free and Open Source Software for Geospatial North America
                  (FOSS4G NA) conference is a yearly event that brings together
                  developers, users, managers, and the rest of the community to
                  share and connect. It is a unique chance to hear talks about
                  projects and technologies that leverage FOSS4G technology in
                  many different ways.
                </p>
                <p>
                  Through presentations, panels, posters, and workshops,
                  everyone can share what they are passionate about in the
                  FOSS4G ecosystem. It's a unique opportunity to discuss the
                  changing landscape of geospatial technology with a community
                  that uses and develops mission-critical solutions for many
                  organizations.
                </p>
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                <p>
                  Beyond the conference content, there are many opportunities to
                  connect with other community members. An Ice-Breaker event and
                  a Gala are held during the conference, allowing everyone to
                  continue the conversation from the day or meet new people.{" "}
                </p>
                <p>
                  Last year, the gala was held at the Baltimore Science Museum,
                  and many participants enjoyed exploring the exhibits and
                  variety of food stations. Conference attendees created
                  informal gatherings, from user group meetups to morning runs.
                </p>
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                <p className="text-center float-start m-3">
                  <a href="https://osgeo.us/">
                    <StaticImage
                      src="../images/osgeous.jpg"
                      width={100}
                      quality={95}
                      formats={["AUTO", "WEBP"]}
                      alt="OSGeo NA 2024 Logo`"
                      className="img-fluid"
                    />
                  </a>
                </p>
                <p>
                  FOSS4G NA, a conference driven by a vibrant volunteer
                  community, is a testament to the power of collaboration.
                  Technocation, a non-profit dedicated to creating educational
                  opportunities for IT professionals, is the financial sponsor.
                  OSGeo US Local Chapter produces this event, fostering a sense
                  of belonging and camaraderie.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <h1 className="text-center text-uppercase text-secondary fw-bold my-4">
            Code Of Conduct
          </h1>
          <div className="row my2">
            <div className="row my2">
              <div className="col-md-12 col-lg-4 my-2">
                <p>
                  Participants at the FOSS4G NA St Louis 2024 conference follow
                  the FOSS4G NA Code of Conduct and will act respectfully toward
                  others. The code of conduct may be expanded with more details
                  when the program is available.
                </p>
                <p>
                  Our code of conduct follows the{" "}
                  <a href="https://www.osgeo.org/code_of_conduct/">
                    OSGeo Code of Conduct
                  </a>
                  , which governs how we behave within this community.
                </p>
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                <p>
                  The FOSS4G NA organizing committee is dedicated to providing a
                  harassment-free conference experience for everyone, regardless
                  of gender, gender identity and expression, age, sexual
                  orientation, disability, physical appearance, body size, race,
                  religion, or technology choices.
                </p>
                <p>
                  We do not tolerate harassment of conference participants in
                  any form. All communication should be appropriate for a
                  professional audience, including people of different
                  backgrounds.
                </p>
              </div>
              <div className="col-md-12 col-lg-4 my-2">
                <p>
                  Sexual language and imagery are not appropriate for any
                  conference venue, including talks, workshops, social media, or
                  parties. Remember that harassment and sexist, racist, or
                  exclusionary jokes are not appropriate for FOSS4G.
                </p>
                <p>
                  Be kind to others. Do not insult or put down other attendees.
                  Please behave professionally.
                </p>
                <p>
                  Attendees violating these rules may be asked to leave the
                  conference without a refund at the sole discretion of the
                  conference organizers. Thank you for helping make this a
                  welcoming, friendly event for all.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <h1 className="text-center text-uppercase text-secondary fw-bold my-4">
            Accommodations
          </h1>
          <div className="row my2">
            <div className="col-md-12 col-lg-4">
              <p>
                The FOSS4G NA 2023 is going to be held at{" "}
                <a href="https://www.hyatt.com/hyatt-regency/en-US/stlrs-hyatt-regency-st-louis-at-the-arch">
                  <strong>Hyatt Regency St. Louis at the Arch</strong>
                </a>
                . The hotel is in downtown St. Louis and offers easy access to
                the most desirable attractions.
              </p>
              <p>
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
              </p>
            </div>
            <div className="col-md-12 col-lg-4"></div>
            <div className="col-md-12 col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;

export const Head = () => <Seo title="About FOSS4GNA St. Louis 2024" />;
