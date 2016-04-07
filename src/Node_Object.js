var Node_Object = function(
    _positionCenterX,
    _positionCenterY,
    _width_Int,
    _height_Int,
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
    this.positionCenterX        = _positionCenterX;
    this.positionCenterY        = _positionCenterY;
    this.fill_Bool              = _fill_Bool;
    this.fillColor_String       = _fillColor_String;
    this.height_Int             = _height_Int;
    this.stroke_Bool            = _stroke_Bool;
    this.stroke_Int             = _stroke_Int;
    this.strokeColor_String     = _strokeColor_String;
    this.width_Int              = _width_Int;

};
Node_Object.prototype.constructor = Node_Object;





Node_Object.prototype.Update_Node_Object = function(){

    ellipseMode(CENTER);





    if(this.fill_Bool == true){ fill(this.fillColor_String); }
    else if(this.fill_Bool == false){ noFill(); }
    //console.log(this.fill_Bool);





    if(this.stroke_Bool == true){
        stroke(this.strokeColor_String);
        strokeWeight(this.stroke_Int);
    }
    else if(this.stroke_Bool == false){ noStroke(); }
    //console.log(this.stroke_Bool);





    ellipse(
        this.positionCenterX,
        this.positionCenterY,
        this.width_Int,
        this.height_Int
    );





    fill("#FFFFFF");
    stroke("#000000");
    strokeWeight(1);
    ellipseMode(CENTER);

};