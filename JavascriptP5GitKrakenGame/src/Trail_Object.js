/*==================================================*/
var Trail_Object = function(){

    this.x_Int;
    this.yEnd_Int;
    this.yStart_Int;
    this.draw_Bool = false;

};
Trail_Object.prototype.constructor = Trail_Object;
/*==================================================*/





/*==================================================*/
Trail_Object.prototype.Draw_Trail_Object = function(
    _x_Int,
    _yEnd_Int,
    _yStart_Int
){

    //console.log("Hello world!");





    if(this.draw_Bool == true){

        //console.log("Hello world!");





        this.x_Int          = _x_Int;
        this.yStart_Int     = _yStart_Int;
        this.yEnd_Int       = _yEnd_Int;





        stroke(global_strokeDefaultColor_String);
        strokeWeight(global_strokeWeight_Int);





        line(
            this.x_Int,
            this.yStart_Int,
            this.x_Int,
            this.yEnd_Int
        );





        stroke("#000000");
        strokeWeight(1);

    }

};
/*==================================================*/