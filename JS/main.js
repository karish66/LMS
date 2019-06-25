function search() {
	x = document.getElementById("search");
	if (x.value.length >=3){
		var xhttp = new XMLHttpRequest();
    	xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				books= this.responseText;
				masterSelection(books);
			}
    	};
	xhttp.open("POST", "http://192.168.43.82:3000/book/search", true);
    //xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
	xhttp.setRequestHeader("content-type","application/json")
    //data = {data:"testaaa",b:"ok"};
    xhttp.send(JSON.stringify({ data: "test" })); 
    //console.log(xhttp)
	}
	else{
		return 0;
	}
}

function masterSelection(){
    var dummyObj=[{"id":"2018cse0001","title":"test_1","author":"test auth_1","description":"Testing data_1","edition":6,"available":3},{"id":"2018cse0002","title":"test_2","author":"test auth_2","description":"Testing data_2","edition":8,"available":40},{"id":"2018cse0003","title":"test_3","author":"test auth_3","description":"Testing data_3","edition":10,"available":35},{"id":"2018cse0004","title":"test_4","author":"test auth_4","description":"Testing data_4","edition":6,"available":1},{"id":"2018cse0005","title":"test_4","author":"test auth_4","description":"Testing data_4","edition":6,"available":1}];
	var len= dummyObj.length;
	document.getElementById('master').style.height=180*(len+1) +"px";
	if (len>0){
		document.getElementById("slider").style.display = "none";
		document.getElementById("book-shelf").style.display = "none";
		
		for (i=0;i<len;i++){ 
			var card = document.createElement("div");
			card.className="card";
			card.innerHTML= `
					<div class="book-detail">
						<div class="book-image">
							<img id="target1">
						</div>
						<div class="book-about">
								<div class="one">
									<div class="name">
										<p id="target2"><b>Mathematics-3</b></p>
									</div>
									<div class="avialablity">
									   <p id="target3">102 </p>
									</div>
								</div>
								<div class="two">
								   <p id="target4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
								</div>
								<div class="three">
									<div class="read-more">
										<a href="#"><b>read more</b></a>
									</div>
									<div class="author">
										<p id="target5"><b>-Ramanajun</b></p>
									</div>
								</div>
						</div>
					</div>

					<div class="rate-button">
						<div class="rate">
							<p> &#9733; &#9733; &#9733; &#9734; &#9734; </p>
						</div>
						<div class="button-pre">
							<p><a href="#"><b>Pre-book</b></a></p>
						</div>
					</div>`;
			var master = document.getElementById('master');
			master.appendChild(card);
			//document.getElementById("target1").src= dummyObj[i].path;
			document.getElementById("target2").innerHTML= dummyObj[i].title;
			document.getElementById("target3").innerHTML= dummyObj[i].available;
			document.getElementById("target4").innerHTML= dummyObj[i].description;
			document.getElementById("target5").innerHTML= dummyObj[i].author;
		}//closing of for loop
	}//closing of if loop
	else{
		
	}
}

function history(){
}

function cross(){
	document.getElementById("nc").style.display = "none";
}

function time(){
	var eve = new Date(2018, 11, 20, 9, 00, 00);
	var end = new Date(2018, 11, 20, 12, 00, 00);
	document.getElementById("demo1").innerHTML = "You pre-booked at : "+eve;

	function convertMS(ms) {
			var d, h, m, s;
			s = Math.floor(ms / 1000);
			m = Math.floor(s / 60);
			s = s % 60;
			h = Math.floor(m / 60);
			m = m % 60;
			d = Math.floor(h / 24);
			h = h % 24;
			return { d: d, h: h, m: m, s: s };
	};
	function timer(){
			var curr = new Date();
			if(curr<end){
					var ms = Math.abs(end-curr);
					var x= convertMS(ms);
					document.getElementById("demo2").innerHTML =x.h+" hours "+x.m+" Minutes "+x.s+" left to offically issue book. Hurry Up! ";
			}
	}
	setInterval(timer, 1000);
}