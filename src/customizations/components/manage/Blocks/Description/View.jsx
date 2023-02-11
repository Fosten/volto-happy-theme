/**
 * View description block.
 * @module components/Description/DescriptionBlockView
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * View description block component.
 * @class View
 * @extends Component
 */
const ViewDescriptionBlock2 = ({ properties, metadata }) => {
  return (
    <p className="documentDescription">
      {(metadata || properties)['description'] || ''}
    </p>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewDescriptionBlock2.propTypes = {
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  metadata: PropTypes.objectOf(PropTypes.any),
};

export default ViewDescriptionBlock2;
