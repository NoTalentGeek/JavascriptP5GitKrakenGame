/*==================================================*/
var Node_Object = function(
    __Audio,
    __Branch_Enum,
    _branch_Node_Object_Array,
    _width_Int,
    _height_Int,
    _xC_Int,
    _yC_Int,
    _fill_Bool,
    _stroke_Bool,
    _fillColor_String,
    _stroke_Int,
    _strokeColor_String
){

    /*Filling in optional parameters.*/
    if(_fill_Bool           === undefined || _fill_Bool             === null){ _fill_Bool              = true; }
    if(_fillColor_String    === undefined || _fillColor_String      === null){ _fillColor_String       = "#FFFFFF"; }
    if(_stroke_Bool         === undefined || _stroke_Bool           === null){ _stroke_Bool            = true; }
    if(_stroke_Int          === undefined || _stroke_Int            === null){ _stroke_Int             = 1; }
    if(_strokeColor_String  === undefined || _strokeColor_String    === null){ _strokeColor_String     = "#000000"; }





    /*Assign the parameters into local variables.*/
    this._Audio                     = __Audio;
    this._Branch_Enum               = __Branch_Enum;
    this.branch_Node_Object_Array   = _branch_Node_Object_Array;
    this.height_Int                 = _height_Int;  /*CAUTION: Change this using setter.*/
    this.width_Int                  = _width_Int;   /*CAUTION: Change this using setter.*/
    this.xC_Int                     = _xC_Int;      /*CAUTION: Change this using setter.*/
    this.yC_Int                     = _yC_Int;      /*CAUTION: Change this using setter.*/
    this.fill_Bool                  = _fill_Bool;
    this.fillColor_String           = _fillColor_String;
    this.stroke_Bool                = _stroke_Bool;
    this.stroke_Int                 = _stroke_Int;
    this.strokeColor_String         = _strokeColor_String;





    this.counter_Int                = 0;
    this.counterAnimation_Bool      = false;
    this.counterAnimationDelay_Int  = 10;
    this.delete_Bool                = false;
    this.furthest_Bool              = false; /*Variable updated in CheckFurthestBarNode_Void() in sketch.js*/
    this.inside_Bool                = false;
    this.nearest_Bool               = false; /*Variable updated in CheckNearestBarNode_Void() in sketch.js*/
    this.xUL_Int                    = this.xC_Int - (this.width_Int/2);     /*CAUTION: Do not change this variable.*/
    this.yUL_Int                    = this.yC_Int - (this.height_Int/2);    /*CAUTION: Do not change this variable.*/




    this._Area_Struct = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );





    /*When this object is created automatically add this object
        into the main node array.*/
    global_Node_Object_Array.push(this);
    this.branch_Node_Object_Array.push(this);
    /*PENDING: Recycle array.*/
    /*
    if(global_Node_Object_Array.length == 0){ global_Node_Object_Array.push(this); }
    if(global_Node_Object_Array.length != 0){

        var empty_Node_Object;
        for(
            var i_Int = 0;
            i_Int < global_Node_Object_Array.length;
            i_Int ++
        ){

            if(
                global_Node_Object_Array[i_Int] == null ||
                global_Node_Object_Array[i_Int] === undefined
            ){

                empty_Node_Object               = global_Node_Object_Array[i_Int];
                global_Node_Object_Array[i_Int] = this;
            }

        }





        if(empty_Node_Object === undefined){ global_Node_Object_Array.push(this); }

    }
    */





    //console.log(global_Node_Object_Array.length);

};
Node_Object.prototype.constructor = Node_Object;
/*==================================================*/





/*==================================================
If this node is being pressed under the bar or outside of screen*/
Node_Object.prototype.CheckBound_Node_Object = function(){

    this.inside_Bool = CheckInsideArea_Bool(this._Area_Struct, global_screen_Area_Struct);
    /*I do not need the if statement to prevent the infinite
        this.delete_Bool switch.*/
    if(this.inside_Bool == false){ this.delete_Bool = true; }





    //console.log(this.delete_Bool);
    //console.log(this.inside_Bool);





    return this;

};
/*==================================================*/





/*==================================================
Function to check whether this node should be deleted or not.*/
Node_Object.prototype.CheckDelete_Node_Object = function(){

    //console.log("Hello world!");





    if(this.delete_Bool == true){

        //console.log("Hello world!");





        /*CAUTION: The Javascript native splice() function to resource heavy to be initiated frequently.
        CAUTION: Hence I only need to splice the object when a game session end.*/
        //console.log(global_Node_Object_Array.length);
        /*Remove this node object from the main node array.*/
        /*
        global_Node_Object_Array.splice(
            global_Node_Object_Array.indexOf(this),
            1
        );
        */
        delete global_Node_Object_Array[global_Node_Object_Array.indexOf(this)];
        //console.log(global_Node_Object_Array.length);




        /*Delete the reference to this object and then
            return null*/
        delete this;
        return null;

    }

    return this;

};
/*==================================================*/





/*==================================================*/
Node_Object.prototype.Draw_Node_Object = function(){

    if(this.delete_Bool == false){

        //console.log("Hello world!");


        this.counter_Int ++;


        ellipseMode(CORNER);





        if(this.fill_Bool == true){ fill(this.fillColor_String); }
        else if(this.fill_Bool == fase){ noFill(); }
        //console.log(this.fill_Bool);
        //console.log(this.fill_Bool || this.nearest_Bool);
        //console.log(this.nearest_Bool);


        /*Simple blinking animation for nearest node.*/
        if(this.nearest_Bool == true){

            /*Animation for nearest node.*/
            if(this.counter_Int%this.counterAnimationDelay_Int == 0)
                { this.counterAnimation_Bool = !this.counterAnimation_Bool; }





            if(this.counterAnimation_Bool == true){ noFill(); }
            else if(this.counterAnimation_Bool == false){ fill(this.fillColor_String); }

        }


        if(this.stroke_Bool == true){
            stroke(this.strokeColor_String);
            strokeWeight(this.stroke_Int);
        }
        else if(this.stroke_Bool == false){ noStroke(); }
        //console.log(this.stroke_Bool);





        ellipse(
            this.xUL_Int,
            this.yUL_Int,
            this.width_Int,
            this.height_Int
        );





        fill("#FFFFFF");
        stroke("#000000");
        strokeWeight(1);
        ellipseMode(CENTER);





        //console.log(this._Area_Struct.height_Int);
        //console.log(this._Area_Struct.width_Int);
        //console.log(this._Area_Struct.xUL_Int);
        //console.log(this._Area_Struct.yUL_Int);
        //console.log(this);
        //console.log(this.furthest_Bool);
        //console.log(this.nearest_Bool);

    }





    return this;

};
/*==================================================*/





/*==================================================
Setter functions.*/
Node_Object.prototype.Set_xC_Int_Void = function(_xC_Int){

    this.xC_Int         = _xC_Int;
    this.xUL_Int        = this.xC_Int - (this.width_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

};
Node_Object.prototype.Set_yC_Int_Void = function(_yC_Int){

    this.yC_Int         = _yC_Int;
    this.yUL_Int        = this.yC_Int - (this.height_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );




    //console.log(this.height_Int/2);
    //console.log(this.yC_Int);
    //console.log(this.yUL_Int);
    //console.log(this.height_Int/2 + " " + this.yC_Int + " " + this.yUL_Int);

};
Node_Object.prototype.Set_height_Int_Void = function(_height_Int){

    this.height_Int     = _height_Int
    this.yUL_Int        = this.yC_Int - (this.height_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

};
Node_Object.prototype.Set_width_Int_Void = function(_width_Int){

    this.width_Int      = _width_Int
    this.xUL_Int        = this.xC_Int - (this.width_Int/2);
    this._Area_Struct   = new Area_Struct(
        this.width_Int,
        this.height_Int,
        this.xUL_Int,
        this.yUL_Int
    );

};
/*==================================================*/