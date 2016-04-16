/*The initial variable for Phaser game.
This .js file can set all the available state in the game.*/
var _Game = new Phaser.Game(960, 540, Phaser.AUTO);
_Game.smoothed = false;
_Game.state.add("boot_State"     , boot_State);
_Game.state.add('main_State'     , main_State);
_Game.state.add('preload_State'  , preload_State);





_Game.state.start('boot_State');