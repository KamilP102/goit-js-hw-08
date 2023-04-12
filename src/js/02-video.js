import _ from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveUpdate = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};
const getSavedTime = () => {
  return localStorage.getItem('videoplayer-current-time');
};

player
  .setCurrentTime(getSavedTime())
  .then(function (data) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on('timeupdate', _.throttle(saveUpdate, 1000));
