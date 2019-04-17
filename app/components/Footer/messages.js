import { defineMessages } from 'react-intl';

const scope = 'Footer';

const messages = defineMessages({
  new: {
    id: `${scope}.new`,
    defaultMessage: 'NEW',
  },
  move: {
    id: `${scope}.move`,
    defaultMessage: 'MOVE',
  },
  delete: {
    id: `${scope}.delete`,
    defaultMessage: 'DELETE',
  },
});

export default messages;
