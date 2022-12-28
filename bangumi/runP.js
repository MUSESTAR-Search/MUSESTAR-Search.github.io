
crUl();
if (!(typeof (playarr) == "undefined" || playarr == null)) {
	pAr = playarr;
	//console.log(pAr);
	runPlayer(pAr, 'A');
	isOnLo = true;
}

if (!(typeof (playarr_lz) == "undefined" || playarr_lz == null)) {
	pAr = playarr_lz;
	//console.log(pAr);
	runPlayer(pAr, 'B');
	isOnLo = true;
}

if (!(typeof (playarr_wj) == "undefined" || playarr_wj == null)) {
	pAr = playarr_wj;
	//console.log(pAr);
	runPlayer(pAr, 'C');
	isOnLo = true;
}

if (!(typeof (playarr_1) == "undefined" || playarr_1 == null)) {
	pAr = playarr_1;
	//console.log(pAr);
	runPlayer(pAr, 'D');
	isOnLo = true;
}

if (!(typeof (playarr_2) == "undefined" || playarr_2 == null)) {
	pAr = playarr_2;
	//console.log(pAr);
	runPlayer(pAr, 'E');
	isOnLo = true;
}

if (!(typeof (playarr_bj) == "undefined" || playarr_bj == null)) {
	pAr = playarr_bj;
	//console.log(pAr);
	runPlayer(pAr, 'F');
	isOnLo = true;
}

if (!(typeof (playarr_fs) == "undefined" || playarr_fs == null)) {
	pAr = playarr_fs;
	//console.log(pAr);
	runPlayer(pAr, 'G');
	isOnLo = true;
}

if (!(typeof (playarr_hn) == "undefined" || playarr_hn == null)) {
	pAr = playarr_hn;
	//console.log(pAr);
	runPlayer(pAr, 'H');
	isOnLo = true;
}

if (!isOnLo) {
	document.body.appendChild(scrP);
	let runP = document.createElement('script');
	runP.src = 'runP.js';
	runP.type = 'text/javascript';
	document.body.appendChild(runP);
}

console.log('俗手runP已加载');