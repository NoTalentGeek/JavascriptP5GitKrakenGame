/*==================================================
_endAxis is a parameter to set the ending position of a node that end the trail object.
_startAxis is a parameter to set the starting position of a node that start the trail object.
_staticAxis is the other axis that is not the start axis or the end axis.*/
var Trail_Object = function(
    _endAxis_Int,
    _startAxis_Int,
    __Container_Object
){

    this._Container_Object      = __Container_Object;
    this.endAxis_Int            = this.Set_endAxis_Int(_endAxis_Int);
    this.startAxis_Int          = this.Set_startAxis_Int(_startAxis_Int);





    this.destinedAxis_Int;                  /*This destined axis is the supposed position of this
                                                trail object. If this object is not in the supposed
                                                position then the fix animation happens.*/
    this.index_Int;
    this.indexTrue_Int;                     /*True index is the index without calculating null and
                                                undefined object in the main array.*/
    this.staticAxis_Int;
    this.animation_Bool         = true;
    this.animation_Fix          = false;
    this.animationIn_Bool       = true;
    this.animationOut_Bool      = false;
    this.prepareDelete_Bool     = false;
    this.prepareSetup_Bool      = true;
    this.ready_Bool             = false;
    this.visible_Bool           = true;



    /*Determine the max initial position of the trail.
    Just before animation in happens.*/
    this.Determine_staticAxisMax_Int();
    /*Set the initial position based on the maximum initial position for this trail.*/
    this.staticAxis_Int = this.Set_staticAxis_Int(this.staticAxisMax_Int);





    //console.log(global_offset_Int);
    //console.log(this.staticAxis_Int);





    /*Add this object into the trail object array.
    This function also determine the destined axis
        and the true index of this trail object.*/
    this.AddToArray_Trail_Object();

};
Trail_Object.prototype.constructor = Trail_Object;
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AddToArray_Trail_Object = function(){

    /*Determine this object local index in the main array.*/
    this.index_Int = AddToArray_Int(
        global_Trail_Object_Array,
        this
    );





    /*Function to determine all other trail index true index
        and destined position.*/
    this.DetermineBatch_destinedAxis_Int_indexTrue_Int();





    return this;

};
/*==================================================*/





/*==================================================
Basically just a function to control animation.
How and when does the animation should happen.*/
Trail_Object.prototype.AnimationControl_Trail_Object = function(){

    if(
        this.animationIn_Bool   == true ||
        this.animationOut_Bool  == true
    ){ this.animation_Bool      = true; }
    if(
        this.animationIn_Bool   == false &&
        this.animationOut_Bool  == false
    ){ this.animation_Bool      = false; }




    if(this.prepareDelete_Bool == true){

        this.AnimationOut_Trail_Object();
        this.ready_Bool = false;

    }
    if(
        this.animationOut_Bool  == false &&
        this.prepareDelete_Bool == false
    ){ /*this.Delete_Trail_Object();*/ }





    if(this.prepareSetup_Bool == true)
        { this.AnimationIn_Trail_Object(); }
    if(
        this.animationIn_Bool   == false &&
        this.prepareSetup_Bool  == false
    ){ this.ready_Bool          = true; /*console.log("Hello world!");*/ }





    //console.log(this.ready_Bool);





    if(
        this.destinedAxis_Int   != this.staticAxis_Int &&
        this.ready_Bool         == true
    ){ this.AnimationFix_Trail_Object(); }





    if(this.indexTrue_Int == 1){

        //console.log("Hello world!");
        //console.log(this.destinedAxis_Int != this.staticAxis_Int);
        //console.log(this.ready_Bool);

    }





    return this;

};
/*==================================================*/





/*==================================================
Animation that functioned to fix the position of the trail object.*/
Trail_Object.prototype.AnimationFix_Trail_Object = function(){

    //console.log("Hello world!");





    this.animation_Bool = true;





    /*If the destined position is in the left of the current static position.*/
    if(this.destinedAxis_Int < this.staticAxis_Int){

        this.staticAxis_Int =
            this.Set_staticAxis_Int(this.staticAxis_Int - global_animationSpeed_Int);





        /*Sometimes the position is not the same interval with the animation speed.
        So this if function is to make sure that the destined position is reached.*/
        if(this.destinedAxis_Int > this.staticAxis_Int)
            { this.staticAxis_Int = this.Set_staticAxis_Int(this.destinedAxis_Int); }

    }
    else if(this.destinedAxis_Int > this.staticAxis_Int){

        this.staticAxis_Int =
            this.Set_staticAxis_Int(this.staticAxis_Int + global_animationSpeed_Int);





        if(this.destinedAxis_Int < this.staticAxis_Int)
            { this.staticAxis_Int = this.Set_staticAxis_Int(this.destinedAxis_Int); }

    }
    else if(this.destinedAxis_Int == this.staticAxis_Int)
        { this.animation_Bool = false; }




    /*
    if(this.indexTrue_Int == 1){

        console.log("Hello world!");

    }
    */

}
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationIn_Trail_Object = function(){

    this.animation_Bool = true;





    this.staticAxis_Int = this.Set_staticAxis_Int(this.staticAxis_Int - global_animationSpeed_Int);
    if(this.destinedAxis_Int > this.staticAxis_Int){

        this.animationIn_Bool   = false;
        this.prepareSetup_Bool  = false;
        this.staticAxis_Int     = this.Set_staticAxis_Int(this.destinedAxis_Int);

    }






    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.AnimationOut_Trail_Object = function(){

    this.animation_Bool = true;





    this.staticAxis_Int = this.Set_staticAxis_Int(this.staticAxis_Int + global_animationSpeed_Int);
    if(this.staticAxisMax_Int < this.staticAxis_Int){

        this.animationIn_Bool   = false;
        this.prepareSetup_Bool  = false;
        this.staticAxis_Int     = this.Set_staticAxis_Int(this.staticAxisMax_Int);

    }





    return this;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Determine_destinedAxis_Int = function(_maxLength_Int){

    global_trailInterval_Int =
        _maxLength_Int/(global_trailObjectArrayTrueLength_Int + 1);





    //console.log(_maxLength_Int);
    //console.log(DetermineTrueArrayLength_Int(global_Trail_Object_Array) + 1);
    //console.log(global_trailInterval_Int);





    this.destinedAxis_Int =
        Math.round(this._Container_Object.x_Int + (this.indexTrue_Int + 1)*global_trailInterval_Int);





    //console.log(this.destinedAxis_Int + " " + this.staticAxis_Int);




    return this.destinedAxis_Int;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Determine_staticAxisMax_Int = function(){

    /*Simple function to set the bar to the maximum
        position that is just outside the container or the screen.*/
    if(
        this._Container == null ||
        this._Container === undefined
    ){ this.staticAxisMax_Int = width + global_offset_Int; }
    else if(
        this._Container != null &&
        this._Container !== undefined
    ){ this.staticAxisMax_Int = this._Container_Object.width_Int + global_offset_Int; }





    return this.staticAxisMax_Int;

}
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.DetermineBatch_destinedAxis_Int = function(){

    for(
        var i_Int = 0;
        i_Int < global_Trail_Object_Array.length;
        i_Int ++
    ){

        if(
            global_Trail_Object_Array[i_Int] != null &&
            global_Trail_Object_Array[i_Int] !== undefined
        ){

            var maxLength_Int;
            if(
                global_Trail_Object_Array[i_Int]._Container_Object_Object != null &&
                global_Trail_Object_Array[i_Int]._Container_Object_Object !== undefined
            ){ maxLength_Int = _Container_Object.width; }
            else if(
                global_Trail_Object_Array[i_Int]._Container_Object_Object == null ||
                global_Trail_Object_Array[i_Int]._Container_Object_Object === undefined
            ){ maxLength_Int = width; }




            //console.log(maxLength_Int);





            global_Trail_Object_Array[i_Int].Determine_destinedAxis_Int(maxLength_Int);

        }

    }

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.DetermineBatch_destinedAxis_Int_indexTrue_Int = function(){


    this.DetermineBatch_indexTrue_Int();





    //console.log(this.indexTrue_Int);





    /*Determine the destined axis.
    Destined axis is the destined position of this object.
    CAUTION: The true index should have already determined
        when the function executed.*/
    this.DetermineBatch_destinedAxis_Int();

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.DetermineBatch_indexTrue_Int = function(){

    /*This loop is to determine whether or not there are nulls and undefined objects
        inside the main array.
    This loop also determines the true index of the this object.*/
    for(
        var i_Int = 0;
        i_Int < global_Trail_Object_Array.length;
        i_Int ++
    ){

        //console.log(global_Trail_Object_Array[i_Int]);





        if(
            global_Trail_Object_Array[i_Int] != null &&
            global_Trail_Object_Array[i_Int] !== undefined
        ){

            global_Trail_Object_Array[i_Int].indexTrue_Int =
                DetermineIndexTrue_Int(
                    global_Trail_Object_Array[i_Int].index_Int,
                    global_Trail_Object_Array
                );

        }

    }

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.DetermineIndividual_destinedAxis_Int = function(){

    var maxLength_Int;
    if(
        this._Container_Object_Object != null &&
        this._Container_Object_Object !== undefined
    ){ maxLength_Int = _Container_Object.width; }
    else if(
        this._Container_Object_Object == null ||
        this._Container_Object_Object === undefined
    ){ maxLength_Int = width; }




    //console.log(maxLength_Int);





    this.Determine_destinedAxis_Int(maxLength_Int);




    /*
    if(this.indexTrue_Int == 1){

            console.log("Hello world!");

    }
    */




    return this.Determine_destinedAxis_Int(maxLength_Int);

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Draw_Trail_Object = function(){

    if(this.visible_Bool == true){

        strokeWeight(global_strokeWeight_Int);





        //console.log(this.staticAxis_Int);




        line(
            this.staticAxis_Int,
            this.startAxis_Int,
            this.staticAxis_Int,
            this.endAxis_Int
        );




        strokeWeight(1);

    }





    return this;

}
/*==================================================*/





/*==================================================
Setter functions for the position axis variable.
Everything need to be set from setter function because
    the axis calculation is always based on container
    object position.*/
Trail_Object.prototype.Set_endAxis_Int = function(_endAxis_Int){

    if(
        this._Container_Object_Object != null &&
        this._Container_Object_Object !== undefined
    ){ this.endAxis_Int = this._Container_Object.y_Int + _endAxis_Int; }
    else if(
        this._Container_Object_Object == null ||
        this._Container_Object_Object === undefined
    ){ this.endAxis_Int = _endAxis_Int; }





    return this.endAxis_Int;

};
/*==================================================*/





/*==================================================
Setter functions for the position axis variable.
Everything need to be set from setter function because
    the axis calculation is always based on container
    object position.*/
Trail_Object.prototype.Set_startAxis_Int = function(_startAxis_Int){

    if(
        this._Container_Object_Object != null &&
        this._Container_Object_Object !== undefined
    ){ this.startAxis_Int = this._Container_Object.y_Int + _startAxis_Int; }
    else{ this.startAxis_Int = _startAxis_Int; }





    return this.startAxis_Int;

};
/*==================================================*/





/*==================================================
Setter functions for the position axis variable.
Everything need to be set from setter function because
    the axis calculation is always based on container
    object position.*/
Trail_Object.prototype.Set_staticAxis_Int = function(_staticAxis_Int){

    if(
        this._Container_Object_Object != null &&
        this._Container_Object_Object !== undefined
    ){ this.staticAxis_Int = this._Container_Object.x_Int + _startAxis_Int; }
    else{ this.staticAxis_Int = _staticAxis_Int; }





    return this.staticAxis_Int;

};
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Update_Trail_Object = function(){

    this.DetermineIndividual_destinedAxis_Int();    /*Determine the this object
                                                        destined position before
                                                        updating the rest of this
                                                        class.*/
    this.AnimationControl_Trail_Object();           /*Animation control.*/
    this.Draw_Trail_Object(                         /*Draw this object.*/
        this.staticAxis_Int,
        this.endAxis_Int,
        this.startAxis_Int
    );





    //console.log(this.destinedAxis_Int + " " + this.staticAxis_Int);
    /*There was a problem of the true index number 1 trail
        is not moving after some times.*/
    /*if(this.indexTrue_Int == 1){

            console.log(this.destinedAxis_Int);
            console.log(this.staticAxis_Int);

    }
    */





    return this;

};
/*==================================================*/