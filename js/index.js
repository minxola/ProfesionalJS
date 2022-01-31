import MediaPlayer from './player.js';
import AutoPlay from '../plugins/autoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer(
    {
        item: video,
        plugins: [
            new AutoPlay()
        ]
    }
);

const buttonPlay = document.querySelector('button.playUnplay');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('button.muted');
buttonMute.onclick = () => player.sound();