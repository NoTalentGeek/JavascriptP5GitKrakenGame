/*==================================================*/
var TrailGenerator_Object = function(){

    global_endNode_Point_Struct_Array[1]    = new Point_Struct(global_xUCNode_Int_Array[1], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[2]    = new Point_Struct(global_xUCNode_Int_Array[2], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[3]    = new Point_Struct(global_xUCNode_Int_Array[3], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[4]    = new Point_Struct(global_xUCNode_Int_Array[4], global_nodeSpawnPointY_Int);
    global_endNode_Point_Struct_Array[0]    = new Point_Struct(global_xUCNode_Int_Array[0], global_nodeSpawnPointY_Int);
    /*CAUTION: Change height in the last Point_Struct argument when I need to change the orientation
        of the movement of the node.*/
    global_startNode_Point_Struct_Array[1]  = new Point_Struct(global_xUCNode_Int_Array[1], height);
    global_startNode_Point_Struct_Array[2]  = new Point_Struct(global_xUCNode_Int_Array[2], height);
    global_startNode_Point_Struct_Array[3]  = new Point_Struct(global_xUCNode_Int_Array[3], height);
    global_startNode_Point_Struct_Array[4]  = new Point_Struct(global_xUCNode_Int_Array[4], height);
    global_startNode_Point_Struct_Array[0]  = new Point_Struct(global_xUCNode_Int_Array[0], height);





    /*For master branch make the trail to be always visible.*/
    global_Trail_Object_Array[0].draw_Bool = true;
    /*Also for master branch make sure that the trail is always
        at the default length.*/
    global_Trail_Object_Array[0].Draw_Trail_Object(
        global_startNode_Point_Struct_Array[0].x_Int,
        global_endNode_Point_Struct_Array[0].y_Int,
        global_startNode_Point_Struct_Array[0].y_Int
    );

    /*For master branch make the trail to be always visible.*/
    global_Trail_Object_Array[1].draw_Bool == true;
    /*Also for master branch make sure that the trail is always
        at the default length.*/
    global_Trail_Object_Array[1].Draw_Trail_Object(
            global_startNode_Point_Struct_Array[1].x_Int,
            global_endNode_Point_Struct_Array[1].y_Int,
            global_startNode_Point_Struct_Array[1].y_Int
    );





    //console.log(global_endNode_Point_Struct_Array[0].y_Int);
    //console.log(global_startNode_Point_Struct_Array[0].x_Int);
    //console.log(global_startNode_Point_Struct_Array[0].y_Int);

};
TrailGenerator_Object.prototype.constructor = TrailGenerator_Object;
/*==================================================*/





/*==================================================*/
TrailGenerator_Object.prototype.Update_TrailGenerator_Object = function(){

    /*For master branch make the trail to be always visible.*/
    global_Trail_Object_Array[0].draw_Bool = true;
    /*Also for master branch make sure that the trail is always
        at the default length.*/
    global_Trail_Object_Array[0].Draw_Trail_Object(
            global_startNode_Point_Struct_Array[0].x_Int,
            global_endNode_Point_Struct_Array[0].y_Int,
            global_startNode_Point_Struct_Array[0].y_Int
    );

    /*For master branch make the trail to be always visible.*/
    global_Trail_Object_Array[1].draw_Bool = true;
    /*Also for master branch make sure that the trail is always
        at the default length.*/
    global_Trail_Object_Array[1].Draw_Trail_Object(
            global_startNode_Point_Struct_Array[1].x_Int,
            global_endNode_Point_Struct_Array[1].y_Int,
            global_startNode_Point_Struct_Array[1].y_Int
    );

    /*For master branch make the trail to be always visible.*/
    global_Trail_Object_Array[2].draw_Bool = true;
    /*Also for master branch make sure that the trail is always
        at the default length.*/
    global_Trail_Object_Array[2].Draw_Trail_Object(
            global_startNode_Point_Struct_Array[2].x_Int,
            global_endNode_Point_Struct_Array[2].y_Int,
            global_startNode_Point_Struct_Array[2].y_Int
    );

    /*For master branch make the trail to be always visible.*/
    global_Trail_Object_Array[3].draw_Bool = true;
    /*Also for master branch make sure that the trail is always
        at the default length.*/
    global_Trail_Object_Array[3].Draw_Trail_Object(
            global_startNode_Point_Struct_Array[3].x_Int,
            global_endNode_Point_Struct_Array[3].y_Int,
            global_startNode_Point_Struct_Array[3].y_Int
    );

    /*For master branch make the trail to be always visible.*/
    global_Trail_Object_Array[4].draw_Bool = true;
    /*Also for master branch make sure that the trail is always
        at the default length.*/
    global_Trail_Object_Array[4].Draw_Trail_Object(
            global_startNode_Point_Struct_Array[4].x_Int,
            global_endNode_Point_Struct_Array[4].y_Int,
            global_startNode_Point_Struct_Array[4].y_Int
    );

    /*
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
    */

};
/*==================================================*/





/*==================================================*/
TrailGenerator_Object.prototype.DetermineStartEndNode_TrailGenerator_Object = function(){};
/*==================================================*/
