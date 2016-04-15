/*==================================================*/
var Point_Object = function(
    _x_Int,
    _yEnd_Int,
    _yStart_Int,
    _index_Int_Array
){

    this.x_Int          = _x_Int;
    this.yEnd_Int       = _yEnd_Int;
    this.yStart_Int     = height;





    this.y_Int          = this.yEnd_Int;





    //console.log(global_branch_Point_Object_Array.length);
    //console.log(global_branch_Point_Object_Array[_index_Int_Array].length);





    global_branch_Point_Object_Array[_index_Int_Array].push(this);

};
Point_Object.prototype.constructor = Point_Object;
/*==================================================*/





/*==================================================*/
Point_Object.prototype.Draw_Point_Object = function(){

    //console.log("Hello world!");





    this.CheckBound_Point_Object();
    this.Move_Point_Object();




    strokeWeight(global_strokeWeight_Int*2);
    point(this.x_Int, this.y_Int);
    strokeWeight(1);

};
/*==================================================*/





/*==================================================*/
Point_Object.prototype.Move_Point_Object = function(){ this.y_Int += global_nodeSpeed_Int; };
/*==================================================*/





/*==================================================*/
Point_Object.prototype.CheckBound_Point_Object = function(){

    //console.log("Hello world!");
    //console.log(this.yEnd_Int);
    //console.log(this.yStart_Int);





    if(this.y_Int > height){

        this.y_Int = global_nodeSpawnPointY_Int;
        global_pointerIntervalCount_Int ++;





        if(global_pointerIntervalCount_Int == global_pointerIntervalAmount_Int){

            global_NodeGenerator_Object.SpawnMasterNode_NodeGenerator_Object();
            global_pointerIntervalCount_Int = 0;

        }





        //console.log("Hello world 1!");
        //console.log(this.y_Int);

    }
    if(this.y_Int < global_nodeSpawnPointY_Int){

        this.y_Int = height;
        //console.log("Hello world 2!");
        //console.log(this.y_Int);

    }

};
/*==================================================*/