/*==================================================*/
var Point_Object = function(
    __PointSet_Object,
    __Trail_Object
){

    this._PointSet_Object   = __PointSet_Object;
    this._Trail_Object      = __Trail_Object;





    this.visible_Bool       = true;
    this.x_Int              = this._Trail_Object.staticAxis_Int;
    this.y_Int              = this._Trail_Object.endAxis_Int;






    //console.log(this._PointSet_Object);





    this._PointSet_Object._Point_Object_Array.push(this);





    //console.log("Hello world!");
    //console.log(this._PointSet_Object._Point_Object_Array.length);

};
Point_Object.prototype.constructor = Point_Object;
/*==================================================*/





/*==================================================*/
Point_Object.prototype.Draw_Point_Object = function(){

    if(this.visible_Bool == true){

        //console.log("Hello world!");
        //console.log(this.x_Int + " " + this.y_Int);





        this.x_Int = this._Trail_Object.staticAxis_Int;
        this.y_Int += global_nodeSpeed_Int;





        strokeWeight(20);
        point(this.x_Int, this.y_Int);
        strokeWeight(1);

    }

    return this;

};
/*==================================================*/