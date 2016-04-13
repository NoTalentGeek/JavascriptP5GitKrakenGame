/*==================================================*/
var TrailGenerator_Object = function(){

    global_endNode1_Point_Struct            = new Point_Struct(global_xUC1Node_Int      , global_nodeSpawnPointY_Int);
    global_endNode2_Point_Struct            = new Point_Struct(global_xUC2Node_Int      , global_nodeSpawnPointY_Int);
    global_endNode3_Point_Struct            = new Point_Struct(global_xUC3Node_Int      , global_nodeSpawnPointY_Int);
    global_endNode4_Point_Struct            = new Point_Struct(global_xUC4Node_Int      , global_nodeSpawnPointY_Int);
    global_endNodeMaster_Point_Struct       = new Point_Struct(global_xUCMasterNode_Int , global_nodeSpawnPointY_Int);
    global_startNode1_Point_Struct          = new Point_Struct(global_xUC1Node_Int      , 0 - (global_height_Int/2));
    global_startNode2_Point_Struct          = new Point_Struct(global_xUC2Node_Int      , 0 - (global_height_Int/2));
    global_startNode3_Point_Struct          = new Point_Struct(global_xUC3Node_Int      , 0 - (global_height_Int/2));
    global_startNode4_Point_Struct          = new Point_Struct(global_xUC4Node_Int      , 0 - (global_height_Int/2));
    global_startNodeMaster_Point_Struct     = new Point_Struct(global_xUCMasterNode_Int , 0 - (global_height_Int/2));





    2//console.log(global_startNodeMaster_Point_Struct.y_Int);
    //console.log(global_startNodeMaster_Point_Struct.x_Int);

};
TrailGenerator_Object.prototype.constructor = TrailGenerator_Object;
/*==================================================*/





/*==================================================*/
TrailGenerator_Object.prototype.Update_TrailGenerator_Object = function(){

    var yTrailEnd_Int;
    var yTrailStart_Int;
    if(global_nodeMaster_Trail_Object.draw_Bool == true){

        //console.log("Hello world!");





        if(
            global_startNodeMaster_Node_Object != null ||
            global_startNodeMaster_Node_Object !== undefined
        ){ yTrailStart_Int = global_startNodeMaster_Node_Object.yC_Int; }
        else if(
            global_startNodeMaster_Node_Object == null ||
            global_startNodeMaster_Node_Object === undefined
        ){ yTrailStart_Int = global_startNodeMaster_Point_Struct.y_Int; }

        global_nodeMaster_Trail_Object.Draw_Trail_Object(
            global_startNodeMaster_Point_Struct.x_Int,
            global_endNodeMaster_Point_Struct.y_Int,
            yTrailStart_Int
        );




        //console.log(global_endNodeMaster_Point_Struct.y_Int);
        console.log(global_startNodeMaster_Point_Struct.x_Int);
        //console.log(yTrailStart_Int);

    }

};
/*==================================================*/





/*==================================================*/
TrailGenerator_Object.prototype.DetermineStartEndNode_TrailGenerator_Object = function(){



};
/*==================================================*/
