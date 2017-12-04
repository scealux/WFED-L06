//Javascript
// register
Vue.component('lane', {
  template: '<div>A custom component!</div>'
})

var theVue = new Vue({
     el:'#vue-app',
     data: {
          rotateAngle: 0,
          cannonBalls:[
               //{origX:??+xVel:50,yVel:50}
          ],
          firing: false,
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
          motion: function(){

          },
          fire: function(angle){
               this.firing = true;
               console.log("I have no idea how to get this cannon to fire");
               //console.log(this.originX+' '+this.originY);
               //var cannonBall = document.getElementById('cannonBall');
               //console.log(cannonBall);
          }
     },
     computed:{
          // howFarToGo: function(){
          //      (function myLoop (i) {
          //           setTimeout(function () {
          //                howFar -= 100;
          //                return     //  your code here
          //                if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
          //           }, 500)
          //      })(13); //  pass the number of iterations as an argument
          // }
          //},
          rotateAngle2: function(){
               return {
                    transform: 'rotate('+this.rotateAngle+'deg)'
               }
          },
          originX: function(){
               var oX = window.innerWidth;
               oX = oX/2;
               return  oX;
          },
          originY: function(){
               var oY = window.innerHeight;
               oY = oY - 40;
               return oY;
          }
     }
});
window.onresize = function(){ location.reload(); }
