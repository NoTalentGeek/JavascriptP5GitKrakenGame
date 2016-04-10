var test_Bar_Object;
var test_MasterNode_Object;





/*==================================================*/
function setup(){

    createCanvas(960, 540);





    global_screen_Area_Struct = new Area_Struct(
        width,
        height,
        0,
        0
    );





    text_Bar_Object             = new Bar_Object();
    test_MasterNode_Object      = new MasterNode_Object();

}
/*==================================================*/





/*==================================================*/
function draw(){

    background(global_backgroundColor_String);
    CheckNearestBarNode_Void();
    StartBarPressedCountdown_Void();





    test_MasterNode_Object.Update_MasterNode_Object();





    text_Bar_Object.Update_Bar_Object();

}
/*==================================================*/





/*==================================================*/
function keyTyped(){

    if(key == "a"){

        global_barPressed_Bool = true;
        global_barPressedCountdown_Int
            = global_barPressedCountdownFixed_Int;

        console.log("Lowercase a was just pressed.");

    }
    if(key == "s"){

        global_barPressed_Bool = true;
        global_barPressedCountdown_Int
            = global_barPressedCountdownFixed_Int;

        console.log("Lowercase s was just pressed.");

    }





    console.log("Hello world!");




    return false;

}
/*==================================================*/




/*==================================================
Start countdown to set back bar pressed boolean to false.*/
function StartBarPressedCountdown_Void(){

    if(global_barPressedCountdown_Int > 0){

        global_barPressedCountdown_Int --;
        if(global_barPressedCountdown_Int <= 0){

            global_barPressed_Bool          = false;
            global_barPressedCountdown_Int  = 0;

        }

    }

}
/*==================================================*/