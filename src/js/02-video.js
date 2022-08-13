import Player from '@vimeo/player';
import ILLIA from 'lodash.throttle';


const video = document.querySelector("#vimeo-player");

const player = new Player(video);


const getLocal = localStorage.getItem('videoplayer-current-time');



player.on(
   "timeupdate",
   ILLIA((e) => {

      localStorage.setItem("videoplayer-current-time", e.seconds);
   }, 1000),
);

getLocal && player.setCurrentTime(getLocal).then(() => {
   localStorage.removeItem("videoplayer-current-time")
}).catch(function (error) {
   console.error(error)
});

