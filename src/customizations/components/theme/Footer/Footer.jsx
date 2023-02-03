/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

 import React from 'react';
 import { Container, List, Segment } from 'semantic-ui-react';
 import { Link } from 'react-router-dom';
 import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
 
 import { Logo } from '@plone/volto/components';
 
 const messages = defineMessages({
   copyright: {
     id: 'Copyright',
     defaultMessage: 'Copyright',
   },
 });
 
 /**
  * Component to display the footer.
  * @function Footer
  * @param {Object} intl Intl object
  * @returns {string} Markup of the component
  */
 const Footer = ({ intl }) => (
   <Segment
     role="contentinfo"
     vertical
     padded
     inverted
     color="grey"
     textAlign="center"
     id="footer"
   >
     <Container>
       <Segment basic inverted color="grey" className="discreet">
 <div className="footersitemap">
   <div className="footercol1">
   <h2><a href="/rankings">Rankings</a></h2>
     <ul><li><a href="/rankings/redraft-rankings">Re-draft Rankings</a></li>
     <li><a href="/rankings/dynasty-rankings">Dynasty Rankings</a></li>
     <li><a href="/rankings/top-25-under-25">Top 25 Under 25</a></li></ul>
   </div>
   <div className="footercol2">
   <h2><a href="/leagues">Leagues</a></h2>
     <ul><li><a href="/leagues/league-rules/calendar">Calendar</a></li>
     <li><a href="/leagues/league-rules/draftime-primer">Draftime Primer</a></li>
     <li><a href="/leagues/standings">Standings</a></li></ul>
   </div>
   <div className="footercol3">
     <h2><a href="/articles">Collectibles</a></h2>
     <ul><li><a href="/collectibles/baseball-cards">Baseball Cards</a></li>
         <li><a href="/collectibles/funko-pops">Funko Pops</a></li>
         <li><a href="/collectibles/danbury-mint">Danbury Mint</a></li>
     </ul>
   </div>
   <div className="footercol4">
     <div className="logo"><Logo /><a href="/">Happy Baseball</a>
       <div className="slogan">"Baseball makes me happy."</div>
     </div>
   </div>
 </div>
       </Segment>
       <Segment basic inverted color="grey" className="discreet">
         {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
         <div className="footerbar">
           <div className="companyinfo">
             <div className="email"><a href="mailto:info@happybaseball.com">info@happybaseball.com</a></div>
             <div className="youtube"><a href="http://www.youtube.com/" target="_blank">Subscribe to us on Youtube</a></div>
             <div className="twitter"><a href="http://www.twitter.com/" target="_blank">Follow us on Twitter</a></div>
             <div className="facebook"><a href="http://www.facebook.com/" target="_blank">Connect with us on Facebook</a></div>
             <div className="accessibility"><a href="/accessibility">Accessibility</a></div>
           </div>
         </div>
       </Segment>
     </Container>
   </Segment>
 );
 
 /**
  * Property types.
  * @property {Object} propTypes Property types.
  * @static
  */
 Footer.propTypes = {
   /**
    * i18n object
    */
 };
 
 export default injectIntl(Footer);
 