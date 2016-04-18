var global_PointSet_Object_Array    = new Array(0);
var global_pointInterval_Int        = 10;
var global_IntervalManager_Object;





/*==================================================*/
var PointSet_Object = function(){

    this.index_Int;
    this.indexTrue_Int;
    this.startAxis_Int;
    this._Point_Object_Array    = new Array(0);
    this.pointAmountPrev_Int    = global_trailObjectArrayTrueLength_Int;
    this.visible_Bool           = true;





    global_trailObjectArrayTrueLength_Int =
        DetermineTrueArrayLength_Int(global_Trail_Object_Array);





    //console.log(global_trailObjectArrayTrueLength_Int);





    /*Determine the first available trail object in the main array.*/
    var first_Trail_Object;
    for(
        var i_Int = 0;
        i_Int < global_Trail_Object_Array.length;
        i_Int ++
    ){

        if(
            first_Trail_Object                  !=  null        &&
            first_Trail_Object                  !== undefined   &&
            global_Trail_Object_Array[i_Int]    !=  null        &&
            global_Trail_Object_Array[i_Int]    !== undefined
        ){ first_Trail_Object = global_Trail_Object_Array[i_Int]; }
        if(
            global_Trail_Object_Array[i_Int]    !=  null        &&
            global_Trail_Object_Array[i_Int]    !== undefined
        ){

            //console.log(global_Trail_Object_Array[i_Int].staticAxis_Int);





            new Point_Object(
                this,
                global_Trail_Object_Array[i_Int]
            );

        }

    }





    //console.log(this._Point_Object_Array);




    this.AddToArray_PointSet_Object();

};
PointSet_Object.prototype.constructor = PointSet_Object;
/*==================================================*/




/*==================================================
A function to put this object into its main array and
    then set the index and the true index.*/
PointSet_Object.prototype.AddToArray_PointSet_Object = function(){

    this.index_Int = AddToArray_Int(
        global_PointSet_Object_Array,
        this
    );





    this.indexTrue_Int = DetermineIndexTrue_Int(
        this.index_Int,
        global_PointSet_Object_Array
    );


    return this;

};
/*==================================================*/





/*==================================================
A function to check whether this point object is inside
    its container or not.
If this point object is outside container then delete it
    and remove its reference.*/
PointSet_Object.prototype.CheckBound_PointSet_Object = function(__Container_Object){

    //console.log(this._Point_Object_Array);





    this.inside_Bool = CheckInside_Bool(
        this._Point_Object_Array,
        __Container_Object.y_Int,
        __Container_Object.y_Int + __Container_Object.height_Int - global_offset_Int
    );




    //console.log(this.inside_Bool);





    function CheckInside_Bool(
        __Dynamic_Object_Array,
        _yStart_Int,
        _yEnd_Int
    ){

        var first_Point_Object;
        for(
            var i_Int = 0;
            i_Int < __Dynamic_Object_Array.length;
            i_Int ++
        ){

            if(
                __Dynamic_Object_Array[i_Int] != null &&
                __Dynamic_Object_Array[i_Int] !== undefined
            ){ first_Point_Object = __Dynamic_Object_Array[i_Int]; break; }

        }

        if(
            __Dynamic_Object_Array[i_Int]    != null &&
            __Dynamic_Object_Array[i_Int]    !== undefined
        ){

            var insideAlt_Bool = false;
            if(
                (first_Point_Object.y_Int >= _yStart_Int && first_Point_Object.y_Int <= _yEnd_Int)
            ){ insideAlt_Bool = true; }





            //console.log(first_Point_Object.x_Int + " " + _xStart_Int);
            //console.log(first_Point_Object.y_Int + " " + _yStart_Int);
            //console.log(first_Point_Object.x_Int > _xStart_Int);
            //console.log(first_Point_Object.x_Int < _xEnd_Int);
            //console.log(first_Point_Object.y_Int > _yStart_Int);
            //console.log(first_Point_Object.y_Int < _yEnd_Int);

        }





        return insideAlt_Bool;

    }





    return this;

};
/*==================================================*/





/*==================================================
A function to delete this object and then remove this
    object reference from the main point array.*/
PointSet_Object.prototype.CheckDelete_PointSet_Object = function(){

    var delete_Bool = false;





    if(this.inside_Bool == false){ delete_Bool = true; }





    if(delete_Bool == true){

        this.visible_Bool = false;

        for(
            var i_Int = 0;
            i_Int < this._Point_Object_Array.length;
            i_Int ++
        ){

            this._Point_Object_Array[i_Int].visible_Bool = false;
            delete this._Point_Object_Array[i_Int];

        }

        delete global_PointSet_Object_Array[this.index_Int];
        return null;

    }





    return this;

};
/*==================================================*/





/*==================================================*/
PointSet_Object.prototype.CheckIncreaseDecreasePoint_PointSet_Object = function(){

    if(this.pointAmountPrev_Int != global_trailObjectArrayTrueLength_Int){

        //console.log("Hello world!");
        //console.log(this.pointAmountPrev_Int + " " + global_trailObjectArrayTrueLength_Int);





        if(this.pointAmountPrev_Int < global_trailObjectArrayTrueLength_Int){

            var last_Trail_Object;
            for(
                var i_Int = global_Trail_Object_Array.length - 1;
                i_Int >= 0;
                i_Int --
            ){

                if(
                    global_Trail_Object_Array[i_Int] != null &&
                    global_Trail_Object_Array[i_Int] !== undefined
                ){

                    last_Trail_Object = global_Trail_Object_Array[i_Int];
                    break;

                }

            }





            var first_Point_Object;
            for(
                var i_Int = 0;
                i_Int < this._Point_Object_Array.length;
                i_Int ++
            ){

                if(
                    this._Point_Object_Array[i_Int]    != null &&
                    this._Point_Object_Array[i_Int]    !== undefined
                ){ first_Point_Object = this._Point_Object_Array[i_Int]; break; }

            }





            if(
                first_Point_Object  !=      null        &&
                first_Point_Object  !==     undefined   &&
                last_Trail_Object   !=      null        &&
                last_Trail_Object   !==     undefined
            ){

                var temp_Point_Object = new Point_Object(
                    this,
                    last_Trail_Object
                );
                temp_Point_Object.x_Int = first_Point_Object.x_Int;
                temp_Point_Object.y_Int = first_Point_Object.y_Int;

            }





            this.pointAmountPrev_Int = global_trailObjectArrayTrueLength_Int;






            //console.log("Hello world 1!");

        }
        else if(this.pointAmountPrev_Int > global_trailObjectArrayTrueLength_Int){

            /*
            this._Point_Object_Array.splice(
                this._Point_Object_Array.length - 1,
                1
            );
            */
            this._Point_Object_Array[this._Point_Object_Array.length - 1].visible_Bool = false;
            delete this._Point_Object_Array[this._Point_Object_Array.length - 1];





            this.pointAmountPrev_Int = global_trailObjectArrayTrueLength_Int;





            //console.log("Hello world 2!");

        }

    }

}
/*==================================================*/





/*==================================================*/
PointSet_Object.prototype.Update_PointSet_Object = function(__Container_Object){

    this.CheckBound_PointSet_Object(__Container_Object);
    this.CheckDelete_PointSet_Object();
    this.CheckIncreaseDecreasePoint_PointSet_Object();





    for(
        var i_Int = 0;
        i_Int < this._Point_Object_Array.length;
        i_Int ++
    ){ + global_offset_Int

        if(
            this._Point_Object_Array[i_Int] != null ||
            this._Point_Object_Array[i_Int] !== undefined
        ){

            //console.log(this._Point_Object_Array[i_Int]);
            this._Point_Object_Array[i_Int].Draw_Point_Object();

        }

    }





    return this;

};
/*==================================================*/