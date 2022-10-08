function wakeUp() {
	var time;

	window.onload = resetTime;
	window.onclick = resetTime;
	window.onkeypress = resetTime;
	window.ontouchstart = resetTime;
	window.onmousemove = resetTime;
	window.onmousedown = resetTime;
	window.addEventListener('scroll', resetTime, true);

	function alertUser() {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #149414; animation-name: fade-in; animation-duration: 2s\">Wake up, Neo...</code><code style=\"color: #149414; animation-name: fade-in; animation-duration: 3s\"><br><small>The Matrix has you...</small></code><code style=\"color: #149414; animation-name: fade-in; animation-duration: 4s\"><br><small>Follow the white Hat.</small></code><code style=\"color: #149414; animation-name: fade-in; animation-duration: 5s\"><br><br><small><strong>Knock, Knock,</strong> Neo.</small></code>";
		}

		function resetTime() {
			clearTimeout(time);
			time = setTimeout(alertUser, 1000 * 100);
		}

};

let hint = "How about entering \"help\" as command?";

document.addEventListener("keyup", function(event) {
	if (event.code === 'Enter') {

		let command = document.getElementById("stdin").value;
		document.getElementById("stdin").value = "";

		if (command == "help" || command == "Help") {help()}
		else if (command == "clear" || command == "Clear") {clear()}
		else if (command == "nslookup" || command == "Nslookup") {nslookup()}
		else if (command == "ps" || command == "Ps") {ps()}
		else if (command == "ls" || command == "Ls") {ls()}
		else if (command == "cd" || command == "Cd") {cd()}
		else if (command == "cd home" || command == "Cd home" || command == "cd home/" || command == "Cd home/") {cd_home()}
		else if (command == "cat readme.md" || command == "Cat readme.md") {cat_readme()}
		else if (command == "cd github" || command == "Cd github" || command == "cd github/" || command == "Cd github/" || command == "cd home/github" || command == "Cd home/github" || command == "cd home/github/" || command == "Cd home/github/") {cd_github()}
		else if (command == "cd tryhackme" || command == "Cd tryhackme" || command == "cd tryhackme/" || command == "Cd tryhackme/" || command == "cd home/tryhackme" || command == "Cd home/tryhackme" || command == "cd home/tryhackme/" || command == "Cd home/tryhackme/") {cd_thm()}
		else if (command == "cat tryhackme.md" || command == "Cat tryhackme.md") {cat_thm()}
		else if (command == "cat bettersniff.md" || command == "Cat bettersniff.md") {cat_bettersniff()}
		else if (command == "cat chow.md" || command == "Cat chow.md") {cat_chow()}
		else if (command == "cat dbmonster.md" || command == "Cat dbmonster.md") {cat_dbmonster()}
		else if (command == "cat github.md" || command == "Cat github.md") {cat_github()}
		else if (command == "cp" || command == "Cp") {cp()}
		else {error()}

	}
});

function help() {
	document.getElementById("stdout").innerHTML = "<pre><code style=\"color: #149414;\"><strong>COMMANDS</strong><small></br>help \t\t- List commands</br>clear \t\t- Clear the terminal</br>nslookup \t- Lookup my social accounts</br>ps \t\t- My projects, tools, goals etc.</br>ls \t\t- List files and directories within the current directory</br>cd DIR\t\t- Change directory (just \"cd\" goes back to ⁓/)</br>cat FILE\t- Show file</br>cp \t\t- Show copyright</small></code></pre></br>";
}

function clear() {
	document.getElementById("stdout").innerHTML = "";
}

function nslookup() {
	document.getElementById("stdout").innerHTML = "<pre><code style=\"color: #149414;\">Server: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v\"><strong>GitHub</strong></a></br>Address: 192.30.255.113</br>Username: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v\"><strong>90N45-d3v</strong></a></br></br>Server: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://twitter.com/90N45\"><strong>Twitter</strong></a></br>Address: 104.244.42.129<br>Username: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://twitter.com/90N45\"><strong>90N45</strong></a></br></br>Server: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://tryhackme.com/p/90N45\"><strong>TryHackMe</strong></a></br>Address: 104.22.55.228<br>Username: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://tryhackme.com/p/90N45\"><strong>90N45</strong></a></code></br></br><code style=\"color: #149414;\">Server: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://matrix.to/#/@90n45:matrix.org\"><strong>Matrix</strong></a></br>Address: 104.20.201.37</br>Username: <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://matrix.to/#/@90n45:matrix.org\"><strong>90n45</strong></a></pre></br>";
}

function ps() {
		document.getElementById("stdout").innerHTML = "<pre><code style=\"color: #149414;\"><strong>CMD\t\t\t\t\t\tDIR\t\tSTATUS</strong></br>---------------------------------------------------------------------------</br>dBmonster\t\t\t\t\t<a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v/dBmonster\">/home/GitHub</a>\tRunning</br>dBmonster + <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://www.youtube.com/watch?v=GIVrzoeWb3M\">Hak5 WiFi Coconut</a>\t\t\t<a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v/dBmonster\">/home/GitHub</a>\tRunning<br>dBmonster + gyro (automated tracking)\t\t?\t\t<a style=\"color: #0e6b0e;\">Planned</a></br>CHOW\t\t\t\t\t\t<a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v/CHOW\">/home/GitHub</a>\t<a style=\"color: #0e6b0e;\">Stopped</a></br>BetterSniff\t\t\t\t\t<a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v/BetterSniff\">/home/GitHub</a>\t<a style=\"color: #0e6b0e;\">Stopped</a></br>dBmonster for ESP8266\t\t\t\t?\t\t<a style=\"color: #0e6b0e;\">Planned</a></br>THM - Jr Penetration Tester\t\t\t<a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://tryhackme.com/p/90N45\">/home/TryHackMe</a>\tRunning</br>Antenna Radiation Patterns plotter\t\t?\t\t<a style=\"color: #0e6b0e;\">Planned</a></code></pre></br>";
}

function ls() {
	let pwd = document.getElementById("pwd").innerHTML

	if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">⁓/</small>") {
		document.getElementById("stdout").innerHTML = "<pre><code style=\"color: #149414;\"><a style=\"color: #0e6b0e;\">home/</a>    readme.md</code><pre>";
	}
	else if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home</small>") {
		document.getElementById("stdout").innerHTML = "<pre><code style=\"color: #149414;\"><a style=\"color: #0e6b0e;\">github/    tryhackme/</code><pre>";
	}
	else if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/github</small>") {
		document.getElementById("stdout").innerHTML = "<pre><code style=\"color: #149414;\">dbmonster.md    chow.md    bettersniff.md</code><pre>";
	}
	else if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/tryhackme</small>") {
		document.getElementById("stdout").innerHTML = "<pre><code style=\"color: #149414;\">tryhackme.md</code><pre>";
	}
}

function cd() {
	document.getElementById("stdout").innerHTML = "";
	document.getElementById("pwd").innerHTML = "<small onclick=\"alert(hint)\" style=\"color: #149414;\">⁓/</small>";
}

function cd_home() {
	document.getElementById("stdout").innerHTML = "";
	document.getElementById("pwd").innerHTML = "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home</small>";
}

function cd_github() {
	document.getElementById("stdout").innerHTML = "";
	document.getElementById("pwd").innerHTML = "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/github</small>";
}

function cd_thm() {
	document.getElementById("stdout").innerHTML = "";
	document.getElementById("pwd").innerHTML = "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/tryhackme</small>";
}

function cat_readme() {
	let pwd = document.getElementById("pwd").innerHTML;
	if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">⁓/</small>") {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #149414;\"><strong>MY PERSONAL TERMINAL</strong></br>This here is my personal <a style=\"color: #149414;\" class=\"text-decoration-line-through\">website</a> terminal!?<br><br>I've always thought about my own special website.<br>Not for me and my content (what content?),<br>but for the design, the coding and the satisfying result.<br><br>I've had a few design ideas, including a 3D website,<br>but I don't have much experience with 3D websites.<br>Because I like terminals and saw the 404 error page from kali.org,<br>I developed this simple but cool terminal-like website...<br>Explore the system and have fun!<br><br><a style=\"color: #0e6b0e;\">Best regards,<br>90N45</a></code>";
	} else {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #931416;\"><strong>ERROR:</strong> File not found...</code>";
	}
}

function cat_thm() {
	let pwd = document.getElementById("pwd").innerHTML;
	if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/tryhackme</small>") {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #149414;\"><strong>As you can see, I'm on TryHackMe...</strong></br></br><img style=\"animation-name: fade-in; animation-duration: 2s; position: relative;\" href=\"https://tryhackme.com/p/90N45\" src=\"https://tryhackme-badges.s3.amazonaws.com/90N45.png\" alt=\"TryHackMe\"><br><br>No exciting stats, but here are some badges I got in my free time:<br><br><img style=\"animation-name: fade-in; animation-duration: 2s; position: relative;\" src=\"https://tryhackme.com/img/badges/introtooffensivesecurity.svg\" alt=\"Offensive Secrurity\" width=\"150px\" height=\"150px\"><img style=\"animation-name: fade-in; animation-duration: 2s; position: relative;\" src=\"https://tryhackme.com/img/badges/ohsint.svg\" alt=\"OhSINT\" width=\"150px\" height=\"150px\"><img style=\"animation-name: fade-in; animation-duration: 2s; position: relative;\" src=\"https://tryhackme.com/img/badges/streak7.svg\" alt=\"7-Day Streak\" width=\"150px\" height=\"150px\"></code>";
	} else {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #931416;\"><strong>ERROR:</strong> File not found...</code>";
	}
}

function cat_bettersniff() {
	let pwd = document.getElementById("pwd").innerHTML;
	if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/github</small>") {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #149414;\"><img src=\"bettersniff-banner.png\" alt=\"BETTERSNIFF\" href=\"https://github.com/90N45-d3v/BetterSniff\" width=\"250px\"></br></br>The first tool I ever published on GitHub.</br>It's written in BASH and helps to automate the process</br>of hosting a Access Point (through <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/oblique/create_ap\">create_ap</a>) + sniffing</br>delicious data (through <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://www.bettercap.org/\">Bettercap</a>).</br>So you could also call it a rogue AP builder...</br></br><a style=\"color: #0e6b0e;\">Read more about it at it's</a></br><a style=\"color: #0e6b0e;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v/BetterSniff\">GitHub Repository</a></code";
	} else {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #931416;\"><strong>ERROR:</strong> File not found...</code>";
	}
}

function cat_chow() {
	let pwd = document.getElementById("pwd").innerHTML;
	if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/github</small>") {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #149414;\"><img src=\"chow-banner.png\" alt=\"CHOW\" href=\"https://github.com/90N45-d3v/CHOW\" width=\"200px\"></br>A script that you can flash to your ESP8266 microcontroller.</br>You will be greeted with a messenger-like CLI (built with <a style=\"color: #149414;\" class=\"text-decoration-none\" href=\"https://github.com/spacehuhn/SimpleCLI\">Spacehuhn's SimpleCLI</a>).</br>Now you can communicate with other ESP8266 boards using the UDP protocol.</br></br><a style=\"color: #0e6b0e;\">Read more about it at it's</a></br><a style=\"color: #0e6b0e;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v/CHOW\">GitHub Repository</a></code";
	} else {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #931416;\"><strong>ERROR:</strong> File not found...</code>";
	}
}

function cat_dbmonster() {
	let pwd = document.getElementById("pwd").innerHTML;
	if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/github</small>") {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #149414;\"><img src=\"dbmonster-banner.png\" alt=\"dBmonster\" href=\"https://github.com/90N45-d3v/dBmonster\" width=\"200px\"></br>With dBmonster you can scan for surrounding WiFi devices and locate them</br>based on the received signal strength extracted by dBmonster.</br>The data is displayed in an cool looking graph</br>so that you can understand where your target is located.</br></br><div class=\"row\"><div class=\"col-sm-6\"><div class=\"ratio ratio-16x9\"><iframe src=\"dBmonster-preview.mp4\"></iframe></div></div></div></br><a style=\"color: #0e6b0e;\">Read more about it at it's</a></br><a style=\"color: #0e6b0e;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v/dBmonster\">GitHub Repository</a></br></br></code";
	} else {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #931416;\"><strong>ERROR:</strong> File not found...</code>";
	}
}

function cat_github() {
	let pwd = document.getElementById("pwd").innerHTML;
	if (pwd == "<small onclick=\"alert(hint)\" style=\"color: #149414;\">/home/github</small>") {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #149414;\"><a style=\"color: #0e6b0e;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@90N45-d3v's&nbsp;2022&nbsp;GitHub&nbsp;Skyline</a></br></br>&nbsp;▁&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✧✧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✧&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✧</br>&nbsp;█&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;✧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▁&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;✦<br>&nbsp;█&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦</br>&nbsp;█▃&nbsp;&nbsp;&nbsp;✧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▁&nbsp;&nbsp;&nbsp;✧▅&nbsp;&nbsp;&nbsp;█&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✧▇&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</br>&nbsp;██&nbsp;&nbsp;▃▃&nbsp;&nbsp;&nbsp;&nbsp;▃█&nbsp;✦&nbsp;&nbsp;█&nbsp;&nbsp;&nbsp;█▃&nbsp;&nbsp;&nbsp;▅✦▁█▃&nbsp;▃▁&nbsp;▅█▅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;</br>▁██▅▅██▅▅▁▁██▅▁▁▅█▁▁▁██▁▁▅█▁███▁██▁███▅▁▅▁▁▁▁▁▁▁▁▁▁▁▁</br></br>GitHub is the place where I publish all the projects,</br>tools and scripts I find useful to share.</br>However, you will also find things that are</br>there for me to look back and admire my progress...</br></br><a style=\"color: #0e6b0e;\">Follow me</a></br><a style=\"color: #0e6b0e;\" class=\"text-decoration-none\" href=\"https://github.com/90N45-d3v\">@90N45-d3v</a></br></code";
	} else {
		document.getElementById("stdout").innerHTML = "<code style=\"color: #931416;\"><strong>ERROR:</strong> File not found...</code>";
	}
}

function cp() {
	let date = new Date().getFullYear();
	document.getElementById("stdout").innerHTML = "<code style=\"color: #149414;\"><img src=\"90N45_logo.png\" alt=\")=90N45 Logo\" width=\"100px\"><br>&copy; " + date + ", 90N45<br><small>All rights reserved.</small></code>";
}

function error() {
	document.getElementById("stdout").innerHTML = "<code style=\"color: #931416;\"><strong>ERROR:</strong> Command not found... Try \"help\"</code>";
}


wakeUp();