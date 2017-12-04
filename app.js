//Javascript
var howFar = 1300;
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
               this.rotateAngle += 10;
               if(this.rotateAngle>90){
                    this.rotateAngle = 90;
               }
          },
          turnCCW: function(){
               this.rotateAngle -= 10;
               if(this.rotateAngle<-90){
                    this.rotateAngle = -90;
               }
          },
          motion: function(){

          },
          fire: function(angle){
               this.firing = true;
               howFar = 1300;
               var cannonBall = document.getElementById('cannonBall');
               var progBar = document.getElementById('innerProgressBar');
               //console.log(cannonBall);
               var startD = new Date();
               var startTime = startD.getTime();
               console.log('Started at '+ startTime);
               (function myLoop (i) {
                        setTimeout(function () {
                             howFar -= 4;
                             //console.log(howFar);
                             progBar.style.width = (100-((howFar/1300)*100))+'%';
                             cannonBall.style.top = howFar + 'px';
                             if (howFar == 0){
                                  var endD = new Date();
                                  var endTime = endD.getTime();
                                  console.log('Ended at '+endTime);
                                  var timeDiff = (endTime - startTime)/1000;
                                  document.getElementById('timer').innerHTML = 'Last shot took '+timeDiff+' seconds.';
                                  console.log('Took '+timeDiff+" seconds.")
                             }   //  your code here
                             if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
                        },1)
               })(325); //  pass the number of iterations as an argument
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
