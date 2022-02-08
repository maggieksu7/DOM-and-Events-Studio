// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let missionAbort = this.document.getElementById('missionAbort');
    let takeoff = this.document.getElementById('takeoff');
    let landing = this.document.getElementById('landing');
    let spaceShuttleHeight = this.document.getElementById('spaceShuttleHeight');
    let flightStatus = this.document.getElementById('flightStatus');
    let shuttleBackground = this.document.getElementById('shuttleBackground');
    let up = this.document.getElementById("up");
    let down = this.document.getElementById("down");
    let right = this.document.getElementById("right");
    let left = this.document.getElementById("left");
    let rocket = this.document.getElementById("rocket");

    takeoff.addEventListener("click", event=>{
        let takeoffInput = window.confirm("Confirm the shuttle is ready for takeoff")
       //The flight status should change to "Shuttle in flight." 
        if (takeoffInput){
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue"
            spaceShuttleHeight.innerHTML = "10000"
            rocket.style.bottom = "125px"
        }
    })

    landing.addEventListener("click", event=> {
        let landingInput = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (landingInput){
            flightStatus.innerHTML = "The shuttle has landed"
            shuttleBackground.style.backgroundColor = "green"
            spaceShuttleHeight.innerHTML = "0"
            rocket.style.bottom = "0px"
        }
    })
        
    missionAbort.addEventListener("click", event => {
        let missionAbort = window.confirm("Confirm that you want to abort the mission")
        if (missionAbort){
            flightStatus.innerHTML = ("Mission aborted");
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0"
            rocket.style.bottom = "0px"
        }
    })

    let imgObj = document.getElementById('rocket');
    imgObj.style.position= 'absolute'
    imgObj.style.left= '0px';
    imgObj.style.bottom= '0px';

    right.addEventListener("click", event=> {
        move = parseInt(rocket.style.left) + 10 +'px';
        console.log(rocket.style.left)
        console.log(parseInt(rocket.style.left))
        console.log(move)
        rocket.style.left = move;
    })

    left.addEventListener("click", function(){
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgOjb.style.left = movement;
    })

    down.addEventListener("click", function(){
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    })

    up.addEventListener("click", function(){
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    })
})