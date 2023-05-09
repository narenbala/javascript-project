function moveRight() {
	var elem = document.getElementById("moving");
	var rect = elem.getBoundingClientRect();
	var pos = rect.left;
	var id = setInterval(frameRight, 5);
	function frameRight() {
        if(pos == 500){
            clearInterval(id);
        }else{
		pos = pos + 500;
    	elem.style.left = pos + 'px';
        }
    }
}

function moveDown() {
	var elem = document.getElementById("moving");
	var rect = elem.getBoundingClientRect();
	var pos = rect.top;
	var id = setInterval(frameDown, 5);
	function frameDown() {
        if(pos == 500){
            clearInterval(id);
        }else{
		pos = pos + 500;
    	elem.style.top = pos + 'px';
        }
    }
}

function moveUp() {
	var elem = document.getElementById("moving");
	var rect = elem.getBoundingClientRect();
	var pos = rect.top;
	var id = setInterval(frameUp, 5);
	function frameUp() {
        if(pos == 0){
            clearInterval(id);
        }else{
		pos = pos - 500;
    	elem.style.top = pos + 'px';
        }
    }
}

function moveLeft() {
	var elem = document.getElementById("moving");
	var rect = elem.getBoundingClientRect();
	var pos = rect.left;
	var id = setInterval(frameLeft, 5);
	function frameLeft() {
        if(pos == 0){
            clearInterval(id);
        }else{
		pos = pos - 500;
    	elem.style.left = pos + 'px';
        }
    }
}
