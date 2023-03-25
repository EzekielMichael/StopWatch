	const timeDisplay = document.querySelector("#timeDisplay"),
	startBtn = document.querySelector("#startBtn"),
	pauseBtn = document.querySelector("#pauseBtn"),
	resetBtn = document.querySelector("#resetBtn");
	
	let startTime = 0;
	let elapseTime = 0;
	let currentTime = 0;
	let intervalId;
	let paused = true;
	let hrs = 0;
	let mins = 0;
	let secs = 0;
	let mils = 0;
	
		startBtn.addEventListener("click", () =>{
			if(paused){
				paused= false;
				startTime = Date.now() - elapseTime;
				intervalId = setInterval(updateTime, 75);
			}
		});
		
		pauseBtn.addEventListener("click", () =>{
			if(!paused){
				paused = true;
				elapseTime = Date.now() - startTime;
				clearInterval(intervalId);
			}
		});
		resetBtn.addEventListener("click", () =>{
			hrs = 0;
			mils = 0;
			startTime = 0;
			elapseTime = 0;
			currentTime = 0;
			clearInterval(intervalId);
			paused = true;
			mins = 0;
			secs = 0;
			timeDisplay.textContent = "00:00:00:00"
		});
	
		function updateTime(){
			elapseTime = Date.now() - startTime;
			mils = Math.floor((elapseTime)%100);
				if(mils < 10){
					mils = "0" + mils;
				}
			secs = Math.floor((elapseTime/1000)%60);
				if(secs < 10){
					secs = "0" + secs;
				}
			mins = Math.floor((elapseTime/(1000 * 60))%60);
				if(mins < 10){
					mins = "0" + mins;
				}
			hrs = Math.floor((elapseTime/(1000 *60 * 60))%60);
				if(hrs < 10){
				hrs = "0" + hrs;
				}
			timeDisplay.textContent = `${hrs}:${mins}:${secs}:${mils}`;
		}
	
	