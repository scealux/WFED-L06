//Javascript
var theVue = new Vue({
     el:'#vue-app',
     data: {
          rotateAngle: 0,
          cannonBalls:[
               //{origX:??+xVel:50,yVel:50}
          ]
     },
     methods: {
          turnCW: function(){
               this.rotateAngle += 5;
               if(this.rotateAngle>90){
                    this.rotateAngle = 90;
               }
          },
          turnCCW: function(){
               this.rotateAngle -= 5;
               if(this.rotateAngle<-90){
                    this.rotateAngle = -90;
               }
          },
          fire: function(angle){
               //document.getElementById('container').innerhtml(this.originX+' '+this.originY);
               console.log(this.originX+' '+this.originY);
          },
          update: function(){

          }
     },
     computed:{
          rotateAngle2: function(){
               return {
                    transform: 'rotate('+this.rotateAngle+'deg)'
               }
          },
          originX: function(){
               var oX = window.innerWidth/2;
               return  oX;
          },
          originY: function(){
               var oY = window.innerHeight -40;
               return oY;
          }
     }
});
setInterval(theVue.update(), 1000);
