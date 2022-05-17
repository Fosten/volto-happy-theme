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
 <h2><a href="/articles">Articles</a></h2>
     <ul><li><a href="/articles/test1">Test1</a></li>
         <li><a href="/articles/test2">Test2</a></li>
         <li><a href="/articles/test3">Test3</a></li>
         <li><a href="/articles/test4">Test4</a></li>
         <li><a href="/articles/test5">Test5</a></li>
     </ul>
 </div>
 <div className="footercol2">
 <h2><a href="/rankings">Rankings</a></h2>
   <ul><li><a href="/rankings/test1">Test1</a></li>
   <li><a href="/rankings/test2">Test2</a></li>
   <li><a href="/rankings/test3">Test3</a></li>
   <li><a href="/rankings/test4">Test4</a></li>
   <li><a href="/rankings/test5">Test5</a></li></ul>
 </div>
 <div className="footercol3">
 <h2><a href="/fantasy-leagues">Fantasy Leagues</a></h2>
   <ul><li><a href="/fantasy-leagues/test1">Test1</a></li>
   <li><a href="/fantasy-leagues/test2">Test2</a></li>
   <li><a href="/fantasy-leagues/test3">Test3</a></li>
   <li><a href="/fantasy-leagues/test4">Test4</a></li>
   <li><a href="/fantasy-leagues/test5">Test5</a></li></ul>
 </div>
 <div className="footercol4">
  <div className="logo"><Logo /><a href="/">Happy Baseball</a>
  <div className="slogan">"Baseball makes me happy."</div>
 </div>
 </div></div>
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
 