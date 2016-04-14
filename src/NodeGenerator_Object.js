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
NodeGenerator_Object.prototype.Update_NodeGenerator_Object = function(){

    if(global_Node_Object_Array.length == 0)
        { new MasterNode_Object(); }





    /*Make the main node to have fixed interval for the main branch.*/
    if(global_nodeMasterInterval_Int > 0){ global_nodeMasterInterval_Int --; }
    else if(global_nodeMasterInterval_Int <= 0){

        new MasterNode_Object();
        global_nodeMasterInterval_Int = global_nodeMasterIntervalFix_Int;





        //console.log("Hello world!");
        //console.log(global_nearest_Node_Object);

    }





    /*Spawn a random node when there is nothing on the screen.
    What I need to check are.
    1. When there is no other nodes other than the master node.
    2. And the node spawning point should be not in the same interval as
        the master node.*/
    /*
    if(CheckArrayIntegrityNodeButMaster_Bool() == true){

        //console.log("Hello world!");

    }
    */
    if(global_furthest_Node_Object != null){

        if(
            global_nodeSpawnPointY_Int -
                (
                    global_furthest_Node_Object._Area_Struct.yUL_Int +
                    global_furthest_Node_Object._Area_Struct.height_Int
                /*Change between < or > to change the way node spawn direction.*/
                ) <= global_height_Int
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