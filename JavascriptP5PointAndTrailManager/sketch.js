var test_Container_Object;
var testCounter_Int = 0;





/*==================================================*/
function setup() {

    createCanvas(960,540);





    test_Container_Object = new Container_Object(global_offset_Int, global_offset_Int, width - global_offset_Int*2, height - global_offset_Int*2);
    var test_Trail_Object = new Trail_Object("1", 0 + global_offset_Int, height - global_offset_Int, false, test_Container_Object);
    test_Container_Object.AddComponent_Container_Object(test_Trail_Object);

}
/*==================================================*/





/*==================================================*/
function draw() {

    background(global_backgroundColor_String);


    testCounter_Int ++;
    if(testCounter_Int%100 == 0){

        var test_Trail_Object = new Trail_Object("1", 0 + global_offset_Int, height - global_offset_Int, false, test_Container_Object);
        test_Container_Object.AddComponent_Container_Object(test_Trail_Object);

    }


    test_Container_Object.Draw_Container_Object();
    //test_Container_Object.x_Int ++;
    //console.log(test_Container_Object.insideComponent_Dynamic_Array.length);
    //if(test_Container_Object.insideComponent_Dynamic_Array[0] != null){ test_Container_Object.insideComponent_Dynamic_Array[0].Set_staticAxis_Int(test_Container_Object.insideComponent_Dynamic_Array[0].staticAxis_Int + 1); }
    /*
    for(
        var i_Int = 0;
        i_Int < test_Container_Object.insideComponent_Dynamic_Array.length;
        i_Int
    ){

        test_Container_Object
            .insideComponent_Dynamic_Array[i_Int]
            .DetermineDestinedAxis_Trail_Object(test_Container_Object.width);

        console.log(test_Container_Object.insideComponent_Dynamic_Array[i_Int].staticAxis_Int + 1);

    }
    */
    Update_global_Trail_Object_Array_Void();





    //rect(0, 0, 100, 100);

}
/*==================================================*/