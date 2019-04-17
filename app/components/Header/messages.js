import { defineMessages } from 'react-intl';

const scope = 'Header';

const messages = defineMessages({
  title: {
    id: `appName`,
    defaultMessage: '',
  },
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: 'Sub Titlew',
  },
});

export default messages;
