

dateFuture1 = new Date(2013,7,12,7,0,0);


// TESTING: comment out the line below to print out the "dateFuture" for testing purposes
//document.write(dateFuture +"<br />");


//###################################
//nothing beyond this point
function GetCount(ddate, iid, index){

	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;

	// if time is already past
	if(amount < 0){
		document.getElementById(iid).innerHTML="Now!";
	}
	// else date is still good
	else{
		days=0;hours=0;mins=0;secs=0;out="";aout="123";
		tdays="";thours="";tmins="";tsecs="";

		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

		days=Math.floor(amount/86400);//days
		amount=amount%86400;

		hours=Math.floor(amount/3600);//hours
		amount=amount%3600;

		mins=Math.floor(amount/60);//minutes
		amount=amount%60;

		secs=Math.floor(amount);//seconds

		if(days != 0){
			tdays = days +" "+((days==1)?"day":"days");
			document.getElementById("days").innerHTML=tdays;

		}

		if(hours != 0){
			thours = hours +" "+((hours==1)?"hour":"hours");
			document.getElementById("hours").innerHTML=thours;
		}

		tmins = mins +" "+((mins==1)?"min":"mins");
		document.getElementById("mins").innerHTML=tmins;

		tsecs = secs +" "+((secs==1)?"sec":"secs");
		document.getElementById("secs").innerHTML=tsecs;

		telem = ["days", "hours", "mins", "secs"];

		document.getElementById((telem[index])).style.color="blue";
		document.getElementById((telem[(index+1)%telem.length])).style.color="red";
		document.getElementById((telem[(index+2)%telem.length])).style.color="purple";
		document.getElementById((telem[(index+3)%telem.length])).style.color="green";

		setTimeout(function(){GetCount(ddate,iid, (++index)%telem.length)}, 1000);
	}
}

window.onload=function(){
	GetCount(dateFuture1, 'countbox1',0);
	//you can add additional countdowns here (just make sure you create dateFuture2 and countbox2 etc for each)
};

/*function add_elem(message){
	var ni = document.getElementById(iid);

	var newdiv = document.createElement('p');


	var csthtml = message;

	newdiv.innerHTML = csthtml;

	ni.appendChild(newdiv);
}*/