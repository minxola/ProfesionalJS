import MediaPlayer from './player.js';

const video = document.querySelector('video');
const player = new MediaPlayer({item: video});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();