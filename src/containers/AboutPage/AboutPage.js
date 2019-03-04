import React from 'react';
import config from '../../config';
import { FormattedMessage } from 'react-intl';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return <StaticPage title="About Us" schema={{ '@context': 'http://schema.org', '@type': 'AboutPage', description: 'About SwolePatrol', name: 'About page' }}>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>
            ᕦ⁞ ✿ ᵒ̌ ᴥ ᵒ̌ ✿ ⁞ᕤ Welcome to the Swole Zone <br />
          </h1>

          <img className={css.coverImage} src={image} alt="Did this really not load?" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <ul className={css.listItem}>
                <NamedLink name="AboutPage" to={{ hash: '#joinus' }} className={css.link}>
                  <FormattedMessage id="FAQ.joinus" />
                </NamedLink>
              </ul>
            <ul className={css.listItem}>
              <NamedLink name="AboutPage" to={{ hash: '#FAQ' }} className={css.link}>
                <FormattedMessage id="FAQ.FAQ" />
              </NamedLink>
            </ul>
              <ul className={css.listItem}>
                <NamedLink name="AboutPage" to={{ hash: '#contact' }} className={css.link}>
                  <FormattedMessage id="FAQ.contact" />
                </NamedLink>
              </ul>

            </div>

            <div className={css.contentMain}>
              <h2 id="info">
                There are countless benefits to working out with a personal trainer. People of any
                age and experience level can see better results and live a healthier lifestyle. A
                personal trainer will help create a unique workout plan to fit your individual
                needs and goals, and can accommodate an injury or other obstacle that might
                otherwise prevent you from exercising.
              </h2>

              <p>i should think about how to format this info lol</p>

              <h3 id="joinus" className={css.subtitle}>
                Are you a certified personal trainer based in Los Angeles?
              </h3>

              <p>
                Join us today! Whether you're a fulltime trainer at the gym looking to
                earn some extra cash on the weekend or if you have your own business and looking to
                expand your clientbase, we have the perfect solution for you.
              </p>

              <h3 id="FAQ" className={css.subtitle}>
               Frequently Asked Questions
              </h3>
              <p className={css.question}>
                Why do you only operate in LA? When are you coming to *city of choice*?
              </p>
            <p className={css.answer}>
                We're actually a fairly new company and our trainers go through a very extensive vetting and background check process. Ensuring that only the top quality trainers are on this platform is our number one priority.
                <br></br>
                <br></br>
                That said, we really hope that you check us out again at a later point in time as we're growing fast into other regions.
              </p>
              <p className={css.question}>
                Why should I become a trainer/trainee with TrainerCrew?!
              </p>
              <p className = {css.answer}>
                For trainers - Our platform offers you the chance to get paid doing what you love WITHOUT the exorbitant gym middle man fees. You keep over 95% of the price as we only take a just enough to pay for our website operating costs. You're able to set your own schedule and your own prices. What could be better?
                <br></br>
                <br></br>
                For trainees - We've carefully handpicked the top personal trainers in the Los Angeles area to be on this platform. No contracts, no absurd "initiation fees", just book and get to work. It's that simple :).
              </p>
              <h3 id="contact" className={css.subtitle}>
                We'd love to hear your feedback!
              </h3>
              <p>Drop us a line at hey@goswolepatrol (dot) com. We respond pretty fast to email.</p>
              <p>
                Also peep the <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and <ExternalLink
                  href={siteTwitterPage}
                >
                  Twitter
                  </ExternalLink>.
                </p>

            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>;
};

export default AboutPage;
