var main_State = {

    /*==================================================*/
    create: function(){

        _Game.stage.backgroundColor = 0x222034;
        console.log("Hello world!");

    },
    /*==================================================*/

    render: function(){

        _Game.debug.geom(
            /*Creating prototype for nodes.
            Creating circle.*/
            new Phaser.Circle(
                _Game.world.centerX,
                _Game.world.centerY,
                10
            ),
            "#CFFFFF"
        );

    }

};