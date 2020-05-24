//textOrObject: String to display as content of snackbar
//linkText: Clickable text at right side of snackbar
//linkFunc: Function to execute when user presses the link
//attrs: Unused at present.
function TinySnack(textOrObject, linkText="", linkFunc=function(){},attrs={}) {

	let content = typeof textOrObject === "string" ? textOrObject : typeof textOrObject.text !== "undefined" ? textOrObject.text : "";
	
	linkText = linkText !== "" ? linkText : typeof textOrObject.link !== "undefined" ? textOrObject.link : "";
 
	linkFunc = typeof linkFunc === "function" ? linkFunc : typeof textOrObject.onclick !== "undefined" ? textOrObject.onclick : function(){};
 
	let snackID = new Date().getTime();
	let snackbar = document.createElement("div");
	snackbar.innerHTML = `
		<div id="tinysnack${snackID}" style="position: fixed; width: 90vw; height: 8vh; bottom: 12vh; transition: left .75s ease-out, opacity .75s ease-out; opacity:0; z-index: 999; background: #2f2f33e0; left: 100%; border-radius: 3px;box-shadow: 0px 0px 5px rgba(0,0,0,.25); color: #f5f5f5; display: flex; padding: 0% 4%; align-items: center; justify-content: space-between;">
			<span data-role="snackText" style = 'flex-basis:75%;'>${content}</span>
			<span data-role="snackLink" style = 'color:lightblue;font-weight:bold;'>${linkText}</span>
		</div>
	`;
	snackbar.querySelector("[data-role='snackLink']").onclick=linkFunc;
 
	document.body.appendChild(snackbar.children[0]);

	setTimeout(function() { 

		document.querySelector("#tinysnack"+snackID).style.left = "5%"; 
		document.querySelector("#tinysnack"+snackID).style.opacity = "1";
		setTimeout(function() { 
			
			document.querySelector("#tinysnack"+snackID).style.left = "100%"; 
			document.querySelector("#tinysnack"+snackID).style.opacity = "0";
		
			setTimeout(function() { document.querySelector("#tinysnack"+snackID).remove(); }, 500, snackID);

		},2000, snackID);

	}, 100, snackID); 

	return this;
}
