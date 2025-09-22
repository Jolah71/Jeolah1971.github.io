$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 100, 200, 20, "pink");
createPlatform(300, 200, 200, 30, "red");
createPlatform(500, 300, 200, 30, "orange");
createPlatform(750, 400, 200, 30, "yellow");
createPlatform(600, 600, 200, 20, "green");
    
    


    // TODO 3 - Create Collectables
createCollectable("steve", 1250, 50, 0, 10);
createCollectable("diamond", 200, 170, 0, 10);
createCollectable("max", 600, 300, , 10);


    
    // TODO 4 - Create Cannons

createCannon("top", 200, 2000);
createCannon("right", 300, 2000);
createCannon('bottom', 400, 800);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
