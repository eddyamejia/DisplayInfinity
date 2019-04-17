import { defineMessages } from 'react-intl';

const scope = 'DashboardScreen';

const messages = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Dashboard',
  },
  motionSensor: {
    id: `${scope}.motionSensor`,
    defaultMessage: 'Motion Sensor',
  },
  yes: {
    id: `${scope}.yes`,
    defaultMessage: 'YES',
  },
  no: {
    id: `${scope}.no`,
    defaultMessage: 'NO',
  },
  time: {
    id: `${scope}.time`,
    defaultMessage: 'TIME',
  },
  sec: {
    id: `${scope}.sec`,
    defaultMessage: 'SEC',
  },
});

export default messages;
