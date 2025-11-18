var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps("#000");
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // Declare and initialize our variables
        var circles = [];

        // Create a function that draws a circle 
        function drawCircle() {
            var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }

        // Create multiple circles
        for (var i = 0; i < 100; i++) {
            drawCircle();
        }

        // Define checkCirclePosition to wrap circles around the canvas
        game.checkCirclePosition = function(circle) {
            if (circle.x < 0) {
                circle.x = canvas.width;
            } else if (circle.x > canvas.width) {
                circle.x = 0;
            }
            if (circle.y < 0) {
                circle.y = canvas.height;
            } else if (circle.y > canvas.height) {
                circle.y = 0;
            }
        };

        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        /*
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // Update the position of each circle and check bounds
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                physikz.updatePosition(circle);
                game.checkCirclePosition(circle);
            }
        }

        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
