import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return <StaticPage title="About Us" schema={{ '@context': 'http://schema.org', '@type': 'AboutPage', description: 'About Saunatime', name: 'About page' }}>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the unique Finnish home sauna.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that XYZ?</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                There are countless benefits to working out with a personal trainer. People of any
                age and experience level can see better results and live a healthier lifestyle. A
                personal trainer will help create a unique workout plan to fit your individual
                needs and goals, and can accommodate an injury or other obstacle that might
                otherwise prevent you from exercising.
              </h2>

              <p>
                To truly experience a Finnish sauna, you need to look beyond the public saunas,
                and instead visit a real home or cottage sauna. Saunatime makes this possible for
                everyone. All our saunas are owned by individuals willing to let tourists and
                other curious visitors to enter their sacred spaces.
              </p>

              <h3 className={css.subtitle}>Are you a sauna owner?</h3>

              <p>
                Saunatime offers you a good way to earn some extra cash! If you're not using your
                sauna every evening, why not rent it to other people while it's free. And even if
                you are using your sauna every evening (we understand, it's so good), why not
                invite other people to join you when the sauna is already warm! A shared sauna
                experience is often a more fulfilling one.
              </p>

              <h3 id="contact2" className={css.subtitle}>
                Create your own marketplace like Saunatime
              </h3>
              <p>
                Saunatime is brought to you by the good folks at <ExternalLink href="http://sharetribe.com">
                  Sharetribe
                </ExternalLink>. Would you like to create your own marketplace platform a bit like Saunatime? Or perhaps a mobile app? With Sharetribe it's really easy. If you have a marketplace idea in mind, do get in touch!
              </p>
              <p>
                You can also checkout our <ExternalLink href={siteFacebookPage}>
                  Facebook
                </ExternalLink> and <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>. (Working on the social medias ok?)
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
