/*==================================================*/
var Point_Object = function(
    _x_Int,
    _yEnd_Int,
    _yStart_Int,
    _indexArray_Int
){

    this.x_Int          = _x_Int;
    this.yEnd_Int       = _yEnd_Int;
    this.yStart_Int     = height;
    this.indexArray_Int = _indexArray_Int;





    /*The occupied boolean variable is an indicator
        if there is a node above this point object.*/
    this.localIndex_Int;
    this.occupied_Bool  = false;
    this.y_Int          = this.yEnd_Int;





    //console.log(global_branch_Point_Object_Array.length);
    //console.log(global_branch_Point_Object_Array[this.indexArray_Int].length);





    global_branch_Point_Object_Array[this.indexArray_Int].push(this);
    this.localIndex_Int = global_branch_Point_Object_Array[this.indexArray_Int].indexOf(this);

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

        /*When the node object is deleted then set the occupied boolean variable to false.*/
        this.occupied_Bool = false;

        this.y_Int = global_nodeSpawnPointY_Int;
        global_pointerIntervalCount_Int_Array[this.indexArray_Int] ++;





        //console.log(global_pointerIntervalAmount_Int);
        //console.log(global_pointerIntervalCount_Int_Array[this.indexArray_Int]);





        /*Spawn the master node at certain interval.*/
        if(global_pointerIntervalCount_Int_Array[this.indexArray_Int] >= global_pointerIntervalAmount_Int){

            //console.log("Hello world!");





            /*When a new node object is initiated set the
                occupied boolean to true.*/
            this.occupied_Bool = true;





            if(this.indexArray_Int == 0)
                { global_NodeGenerator_Object.SpawnMasterNode_NodeGenerator_Object(); }
            global_pointerIntervalCount_Int_Array[this.indexArray_Int] = 0;

        }


        /*Spawn other node at any other random interval that is still empty.
        First I need to check if the current row of point object has already
            a node spawned.*/
        var nodeSpawned_Bool = true;
        if(this.occupied_Bool == false){

            for(
                var i_Int = 0;
                i_Int < global_branch_Point_Object_Array.length;
                i_Int ++
            ){

                if(global_branch_Point_Object_Array[i_Int][this.localIndex_Int].occupied_Bool == true)
                    { nodeSpawned_Bool = false; break; }

                if(i_Int == global_branch_Point_Object_Array.length - 1){

                    if(nodeSpawned_Bool == true){

                        var branchIndex_Int = global_NodeGenerator_Object.SpawnNode_NodeGenerator_Int();
                        //console.log(branchIndex_Int);

                        /*When a new node object is initiated set the
                            occupied boolean to true.*/
                        global_branch_Point_Object_Array[branchIndex_Int][this.localIndex_Int].occupied_Bool = true;

                    }

                }

            }

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