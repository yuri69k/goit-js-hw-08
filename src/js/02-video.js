// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';
// import VimeoPlayer from "../../node_modules/@vimeo/player/src/player";
// const VimeoPlayer = require('@vimeo/player');
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const KEY = 'videoplayer-current-time';

afterReboot();

player.on(
  `timeupdate`,
  throttle(function ({ seconds }) {
    const timeupdate = JSON.stringify(seconds);
    localStorage.setItem(KEY, timeupdate);
  }, 1000)
);

function afterReboot() {
  const currentTime = localStorage.getItem(KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
