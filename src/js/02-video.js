import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const video = document.querySelector("#vimeo-player");

const player = new Player(video);
const getLocal = localStorage.getItem('video-time');



player.on(
   "timeupdate",
   throttle((e) => {
      console.log(e);
      localStorage.setItem("video-time", e.seconds);
      // console.log(window.localStorage);
      // console.log(e.seconds);
      // console.log(localStorage);
      // console.log(localStorage.getItem("video-tim"));

   }, 1000),
);

getLocal && player.setCurrentTime(getLocal).then(() => {
   localStorage.removeItem('video-time')
}).catch(function (error) {
   console.error(error)
});;

