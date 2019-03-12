import Phaser from 'phaser';

import Config from './Config';
import HomeScreen from './scene/HomeScreen';


import './styles/index.scss';



const gameConfig = Object.assign({}, Config);
gameConfig.scene = HomeScreen;

new Phaser.Game(gameConfig);

