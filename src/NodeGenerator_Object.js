/*==================================================*/
var NodeGenerator_Object = function(){

    /*How many times this program tick while the condition
        to spawn new node is fulfilled but no node is
        actually spawned.*/
    this.counter_Float = 0.0;
    /*nothing_Bool is a variable to determine whether there are an active node.
    Active node means that the node is not undefined nor null.*/
    this.nothing_Bool = true;

}
NodeGenerator_Object.prototype.constructor = NodeGenerator_Object;
/*==================================================*/





/*==================================================*/
NodeGenerator_Object.prototype.SpawnMasterNode_NodeGenerator_Object = function(){

    new MasterNode_Object();
    return this;

};
/*==================================================*/





/*==================================================*/
NodeGenerator_Object.prototype.SpawnNode_NodeGenerator_Int = function(){

    var random_Int = Math.ceil(Math.random()*(global_nodeAmount_Int - 1));





    if(Math.random() > 0.5){

        if(random_Int == 1){ new _1Node_Object(); }
        if(random_Int == 2){ new _2Node_Object(); }
        if(random_Int == 3){ new _3Node_Object(); }
        if(random_Int == 4){ new _4Node_Object(); }

    }





    return random_Int;

}
/*==================================================*/





/*==================================================*/
NodeGenerator_Object.prototype.Update_NodeGenerator_Object = function(){

    if(global_Node_Object_Array.length == 0)
        { new MasterNode_Object(); }






    /*Make the main node to have fixed interval for the main branch.*/
    /*
    if(global_nodeMasterInterval_Int > 0){ global_nodeMasterInterval_Int --; }
    else if(global_nodeMasterInterval_Int <= 0){

        new MasterNode_Object();
        global_nodeMasterInterval_Int = global_nodeMasterIntervalFixed_Int;





        //console.log("Hello world!");
        //console.log(global_nearest_Node_Object);

    }
    */





    if(global_furthest_Node_Object != null){

        //console.log("height_Int = " + global_furthest_Node_Object._Area_Struct.height_Int);
        //console.log("yUL_Int = " + global_furthest_Node_Object._Area_Struct.yUL_Int);
        //console.log(global_furthest_Node_Object._Area_Struct.yUL_Int + global_furthest_Node_Object._Area_Struct.height_Int);
        //console.log(global_height_Int);
        //console.log(global_nodeSpawnPointY_Int + global_height_Int);
        //console.log(global_nodeSpawnPointY_Int);





        if(
            global_furthest_Node_Object._Area_Struct.yUL_Int + global_furthest_Node_Object._Area_Struct.height_Int >
                global_nodeSpawnPointY_Int + global_height_Int
        ){

            if(Math.random() > (0.99 - this.counter_Float)){

                /*global_nodeAmount_Int - 1 because I do not need the
                    master node to be spawned randomly.*/
                var random_Float    = Math.random() * (global_nodeAmount_Int - 1);
                var random_Int      = Math.floor(random_Float);
                if(random_Int == 0){ new _1Node_Object(); }
                if(random_Int == 1){ new _2Node_Object(); }
                if(random_Int == 2){ new _3Node_Object(); }
                if(random_Int == 3){ new _4Node_Object(); }

                this.counter_Float = 0.0;

            }
            else{ this.counter_Float += 0.001; }

        }

    }





    return this;

};
/*==================================================*/