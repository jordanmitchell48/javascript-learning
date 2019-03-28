var d, h, m, s, animate;

function init(){
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	clock();
};

function clock(){
	s++;
	
	//checks if seconds count has reached 60. If so, sets seconds to 0 and updates minutes
	if (s == 60){
		s = 0;
		m++;

		//checks if minutes has reached 60. If so, sets minutes to 0 and updates hours
		if (m == 60){
			m = 0;
			h++;
			//checks hours, if it has reached 24, gets set back to 0
			if (h == 24) {
				h = 0;
			}
		}
	}
	$('sec', s);
	$('min', m);
	$('hr', h);
	animate = setTimeout(clock, 1000);
};

function $(id, val){
	if (val < 10){
		val = '0' + val;
	}

	document.getElementById(id).innerHTML = val;
};

window.onload = init;