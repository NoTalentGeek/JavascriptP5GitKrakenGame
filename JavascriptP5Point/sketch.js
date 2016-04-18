/*TESTING.*/
var test_Container_Object;
var testCounter1_Int        = 0;
var testCounter2_Int        = 0;
var testCounter3_Int        = 1;
var testCounter4_Int        = 10;
var testCounter5_Int        = 0;
/*END TESTING.*/





/*==================================================*/
function setup() {

    createCanvas(960,540);
    frameRate(60);





    /*Determine the true length of the trail main array.*/
    global_trailObjectArrayTrueLength_Int =
        DetermineTrueArrayLength_Int(global_Trail_Object_Array);





    /*TESTING.*/
    /*This is simple method on how to add an object into container object.
    Things that should be put into the container is a visual object.
    So any objects that only do calculations and logic without any visual
        are not necessarily to be in a container object.
    The methods are.
    1. Initiate the container object.
    2. Initiate the visual object (in this case it is the Trail or the node object).
    3. Using AddComponent_Container_Object() function from the container object to
        the visual object.*/
    test_Container_Object = new Container_Object(width + global_offset_Int, global_offset_Int, width - global_offset_Int*2, height - global_offset_Int*2);
    //var temp_Trail_Object = new Trail_Object(0, height, test_Container_Object);
    //test_Container_Object.AddComponent_Container_Object(temp_Trail_Object);




    test_PointSet_Object = new PointSet_Object();
    /*END TESTING.*/

}
/*==================================================*/





/*==================================================*/
function draw() {

    background(global_backgroundColor_String);





    /*TESTING.*/
    /*Draw function for the container object is not necessarily to be executed.
    Only if I need to know the position of the container (so draw function
        in a container object is mostly for visual debugging).*/
    test_Container_Object.Draw_Container_Object();
    /*END TESTING.*/





    /*Determine the true length of the trail main array.*/
    global_trailObjectArrayTrueLength_Int =
        DetermineTrueArrayLength_Int(global_Trail_Object_Array);
    /*Global function to update all trail object.*/
    Update_global_Trail_Object_Array_Void();
    Update_global_PointSet_Object_Array_Void(test_Container_Object);





    /*TESTING.*/
    /*In this test I tried to automatically add a new trail
        object per interval (100 application ticks).*/
    testCounter1_Int ++;
    if(testCounter1_Int%100 == 0){

        if(global_Trail_Object_Array.length < 5){

            var temp_Trail_Object = new Trail_Object(0 + global_offset_Int, height - global_offset_Int, test_Container_Object);
            test_Container_Object.AddComponent_Container_Object(temp_Trail_Object);

        }

    }





    testCounter2_Int ++;
    if(testCounter2_Int%testCounter3_Int == 0){

        var temp_PointSet_Object = new PointSet_Object();





        if(testCounter3_Int == 1){ testCounter5_Int = 1; }
        else if(testCounter3_Int == testCounter4_Int){ testCounter5_Int = -1; }
        testCounter3_Int += testCounter5_Int;
        testCounter2_Int = 0;
        //console.log(testCounter3_Int + " " + testCounter2_Int);

    }




    /*In this interval I tried to move the container to see if the components
        inside are also moving.*/
    if(test_Container_Object.x_Int > global_offset_Int){ test_Container_Object.x_Int -= 10; }





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