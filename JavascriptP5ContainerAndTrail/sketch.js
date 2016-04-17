/*TESTING.*/
var test_Container_Object;
var testCounter_Int         = 0;
/*END TESTING.*/





/*==================================================*/
function setup() {

    createCanvas(960,540);





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
    test_Container_Object = new Container_Object(global_offset_Int, global_offset_Int, width - global_offset_Int*2, height - global_offset_Int*2);
    var test_Trail_Object = new Trail_Object(0 + global_offset_Int, height - global_offset_Int, test_Container_Object);
    test_Container_Object.AddComponent_Container_Object(test_Trail_Object);
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





    /*Global function to update all trail object.*/
    Update_global_Trail_Object_Array_Void();





    /*TESTING.*/
    /*In this test I tried to automatically add a new trail
        object per interval (100 application ticks).*/
    testCounter_Int ++;
    if(testCounter_Int%100 == 0){

        var test_Trail_Object = new Trail_Object(0 + global_offset_Int, height - global_offset_Int, test_Container_Object);
        test_Container_Object.AddComponent_Container_Object(test_Trail_Object);

    }





    /*In this interval I tried to move the container to see if the components
        inside are also moving.*/
    test_Container_Object.x_Int += 1;
    /*END TESTING.*/

}
/*==================================================*/