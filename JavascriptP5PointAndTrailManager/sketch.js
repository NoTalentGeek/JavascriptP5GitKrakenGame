/*TESTING.*/
var test_Container_Object;
var testCounter_Int = 0;
/*END TESTING.*/





/*==================================================*/
function setup() {

    createCanvas(960,540);





    /*TESTING.*/
    test_Container_Object = new Container_Object(global_offset_Int, global_offset_Int, width - global_offset_Int*2, height - global_offset_Int*2);
    var test_Trail_Object = new Trail_Object(0 + global_offset_Int, height - global_offset_Int, test_Container_Object);
    test_Container_Object.AddComponent_Container_Object(test_Trail_Object);
    /*END TESTING.*/

}
/*==================================================*/





/*==================================================*/
function draw() {

    background(global_backgroundColor_String);
    test_Container_Object.Draw_Container_Object();
    Update_global_Trail_Object_Array_Void();





    /*TESTING.*/
    testCounter_Int ++;
    if(testCounter_Int%100 == 0){

        var test_Trail_Object = new Trail_Object(0 + global_offset_Int, height - global_offset_Int, test_Container_Object);
        test_Container_Object.AddComponent_Container_Object(test_Trail_Object);

    }
    test_Container_Object.x_Int += 1;
    for(
        var i_Int = 0;
        i_Int < test_Container_Object.insideComponent_Dynamic_Array.length;
        i_Int ++
    ){

        if(
            test_Container_Object.insideComponent_Dynamic_Array[i_Int] != null &&
            test_Container_Object.insideComponent_Dynamic_Array[i_Int] !== undefined
        ){

            var maxLength_Int;
            if(
                test_Container_Object.insideComponent_Dynamic_Array[i_Int]._Container_Object_Object != null &&
                test_Container_Object.insideComponent_Dynamic_Array[i_Int]._Container_Object_Object !== undefined
            ){ maxLength_Int = _Container_Object.width; }
            else if(
                test_Container_Object.insideComponent_Dynamic_Array[i_Int]._Container_Object_Object == null ||
                test_Container_Object.insideComponent_Dynamic_Array[i_Int]._Container_Object_Object === undefined
            ){ maxLength_Int = width; }




            //console.log(maxLength_Int);





            global_Trail_Object_Array[i_Int].DetermineDestinedAxis_Trail_Object(maxLength_Int);

        }

    }
    /*END TESTING.*/

}
/*==================================================*/