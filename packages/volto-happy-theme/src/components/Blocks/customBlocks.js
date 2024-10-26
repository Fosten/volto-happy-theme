import BylineView from './Byline/View';
import BylineEdit from './Byline/Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const customBlocks = {
  byline: {
    id: 'byline',
    title: 'Byline',
    edit: BylineEdit,
    view: BylineView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
};
export default customBlocks;
