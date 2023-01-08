import Player from '@vimeo/player';
import { throttle } from 'lodash';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
  }, 1000)
);

function setCurrentTime() {
  player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY));
}
setCurrentTime();
