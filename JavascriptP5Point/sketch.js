/*TESTING.*/
var test_counter1_Int           = 0;
var test_counter2_Int           = 0;
var test_counter3_Int           = 1;
var test_counter4_Int           = 10;
var test_counter5_Int           = 0;
var test_switchAnimation_Int    = -1;
/*END TESTING.*/





/*==================================================*/
function setup() {

    createCanvas(960,540);
    frameRate(60);





    /*Set up some global variables*/
    global_endNodeMinPosition_Int               = global_offset_Int;
    global_playContainerInitialHeight_Int       = height - (global_offset_Int*2);
    global_playContainerInitialWidth_Int        = width - (global_offset_Int*2);
    global_playContainerInitialX_Int            = width + global_offset_Int;        /*Put the container slightly right off screen.*/
    global_playContainerInitialY_Int            = global_offset_Int;
    global_trailObjectArrayTrueLength_Int       =
        DetermineTrueArrayLength_Int(global_Trail_Object_Array);





    global_play_Container_Object                = new Container_Object(
        global_playContainerInitialX_Int,
        global_playContainerInitialY_Int,
        global_playContainerInitialWidth_Int,
        global_playContainerInitialHeight_Int
    );





    global_startNodeMinPosition_Int             = global_play_Container_Object.height_Int - global_offset_Int;

}
/*==================================================*/





/*==================================================*/
function draw() {

    background(global_backgroundColor_String);



    /*Update all necessary global variables.
    Determine the true length of the trail main array.*/
    global_trailObjectArrayTrueLength_Int =
        DetermineTrueArrayLength_Int(global_Trail_Object_Array);





    /*Update all necessary global object.
    Draw function for the container object is not necessarily to be executed.
    Only if I need to know the position of the container (so draw function
        in a container object is mostly for visual debugging).*/
    global_play_Container_Object.Draw_Container_Object();





    /*Run all global functions.*/
    Update_global_Trail_Object_Array_Void();
    Update_global_PointSet_Object_Array_Void(global_play_Container_Object);





    /*Simple in animation for the container object for the main game object.*/
    if(
        global_play_Container_Object.x_Int > 0 &&
        global_playContainerObjectInitialAnimationDone_Bool == false
    ){

        global_play_Container_Object.x_Int -= 10;
        if(global_play_Container_Object.x_Int <= 0){

            global_play_Container_Object.x_Int = 0;
            global_playContainerObjectInitialAnimationDone_Bool = true;

        }

    }
    if(global_playContainerObjectInitialAnimationDone_Bool == true){

        if(global_play_Container_Object.x_Int <= 0){ test_switchAnimation_Int = 1; }
        else if(global_play_Container_Object.x_Int + global_play_Container_Object.width_Int >= width)
            { test_switchAnimation_Int = -1; }

        global_play_Container_Object.x_Int += test_switchAnimation_Int;

    }





    /*TESTING.*/
    /*In this test I tried to automatically add a new trail
        object per interval (100 application ticks).
    And then stop after five trail objects are added into the scene.*/
    test_counter1_Int ++;
    if(test_counter1_Int%100 == 0){
        if(global_Trail_Object_Array.length < 5){
            var temp_Trail_Object = new Trail_Object(
                global_endNodeMinPosition_Int,
                global_startNodeMinPosition_Int
            );
            global_play_Container_Object.AddComponent_Container_Object(temp_Trail_Object);
        }
    }
    /*Added set of point object in a trigonometric periodic.*/
    test_counter2_Int ++;
    if(test_counter2_Int%test_counter3_Int == 0){
        var temp_PointSet_Object = new PointSet_Object();
        if(test_counter3_Int == 1){ test_counter5_Int = 1; }
        else if(test_counter3_Int == test_counter4_Int){ test_counter5_Int = -1; }
        test_counter3_Int += test_counter5_Int;
        test_counter2_Int = 0;
        //console.log(test_counter3_Int + " " + test_counter2_Int);
    }
    /*
    strokeWeight(25);
    point(10, 10);
    strokeWeight(1);
    */
    //test_PointSet_Object.Update_PointSet_Object();
    //console.log(frameRate());
    /*END TESTING.*/

}
/*==================================================*/