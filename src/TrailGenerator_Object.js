/*==================================================*/
var TrailGenerator_Object = function(){

    global_endNode_Point_Struct_Array[1]    = new Point_Struct(global_xUCNode_Int_Array[1], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[2]    = new Point_Struct(global_xUCNode_Int_Array[2], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[3]    = new Point_Struct(global_xUCNode_Int_Array[3], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[4]    = new Point_Struct(global_xUCNode_Int_Array[4], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[0]    = new Point_Struct(global_xUCNode_Int_Array[0], global_nodeSpawnPointY_Int);
    global_startNode_Point_Struct_Array[1]  = new Point_Struct(global_xUCNode_Int_Array[1], 0 - (global_height_Int/2));
    global_startNode_Point_Struct_Array[2]  = new Point_Struct(global_xUCNode_Int_Array[2], 0 - (global_height_Int/2));
    global_startNode_Point_Struct_Array[3]  = new Point_Struct(global_xUCNode_Int_Array[3], 0 - (global_height_Int/2));
    global_startNode_Point_Struct_Array[4]  = new Point_Struct(global_xUCNode_Int_Array[4], 0 - (global_height_Int/2));
    global_startNode_Point_Struct_Array[0]  = new Point_Struct(global_xUCNode_Int_Array[0], 0 - (global_height_Int/2));





    //console.log(global_startNode_Point_Struct_Array[0].y_Int);
    //console.log(global_startNode_Point_Struct_Array[0].x_Int);

};
TrailGenerator_Object.prototype.constructor = TrailGenerator_Object;
/*==================================================*/





/*==================================================*/
TrailGenerator_Object.prototype.Update_TrailGenerator_Object = function(){

    var yTrailEnd_Int;
    var yTrailStart_Int;
    if(global_Trail_Object_Array[0].draw_Bool == true){

        //console.log("Hello world!");





        if(
            global_start_Node_Object_Array[0] != null ||
            global_start_Node_Object_Array[0] !== undefined
        ){ yTrailStart_Int = global_start_Node_Object_Array[0].yC_Int; }
        else if(
            global_start_Node_Object_Array[0] == null ||
            global_start_Node_Object_Array[0] === undefined
        ){ yTrailStart_Int = global_startNode_Point_Struct_Array[0].y_Int; }

        global_Trail_Object_Array[0].Draw_Trail_Object(
            global_startNode_Point_Struct_Array[0].x_Int,
            global_endNode_Point_Struct_Array[0].y_Int,
            yTrailStart_Int
        );




        //console.log(global_endNode_Point_Struct_Array[0].y_Int);
        //console.log(global_startNode_Point_Struct_Array[0].x_Int);
        //console.log(yTrailStart_Int);

    }

};
/*==================================================*/





/*==================================================*/
TrailGenerator_Object.prototype.DetermineStartEndNode_TrailGenerator_Object = function(){



};
/*==================================================*/
