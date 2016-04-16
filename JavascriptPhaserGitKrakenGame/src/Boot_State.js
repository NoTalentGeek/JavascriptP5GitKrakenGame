var boot_State = {

    /*==================================================*/
    init: function(){

        /*maxPointers is the total number pointers in the game.
        Normally the number of pointers in the desktop game is
            one (the only mouse pointer).
        However, mobile games can have more than one pointer.
        For this project I will choose at most two pointers that
            can be active at a time.*/
        this.input.maxPointers = 2;





        /*Align this application horizontally according to the
            parent container (usually browser itself).
        Does not work with re - sizable application.*/
        this.scale.pageAlignHorizontally    = true;





        /*Setting this to true will pause/halt this application
            when browser lose its focus (change tab or minimized).*/
        this.stage.disableVisibilityChange = true;

    },
    /*==================================================*/





    /*==================================================
    Override create function to change to the pre - load state.*/
    create: function(){ _Game.state.start("preload_State"); }
    /*==================================================*/

};