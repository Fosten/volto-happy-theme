/**
 * View description block.
 * @module components/manage/Blocks/Description/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from '@plone/volto/components';

/**
 * View description block class.
 * @class View
 * @extends Component
 */
const View = ({ content }) => (
<p className="documentByline">By {content.creators} on <FormattedDate date={content.effective} /></p>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;