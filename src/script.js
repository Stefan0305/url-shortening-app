const btn = document.getElementById('btn');
const url = document.getElementById('url');
let copyBtns = document.querySelectorAll('.copy-link');;


//Controls if link is a real url
//not needed
// function ValidateUrl(link) 
// {
//  var urlFormat = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
// 	if(link.match(urlFormat)) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// Creates a new div when the API has been called and stores it to local data - Also allows to copy link to clipboard
function addLinkDiv(originalURL, shortURL) {
    const putDivHere = document.querySelector('results-here');
    const newDiv = document.createElement("div");
    newDiv.className = 'result-div';
    newDiv.innerHTML = "\<p class=\"original-url\"\>" + originalURL + "\</p\> \<p class=\"shorten-url\"\>" + shortURL + "\</p\> \<p class=\"square btn copy-link\"\>Copy\</p\>";
    putDivHere.appendChild(newDiv); //Creates the div
    localStorage.setItem('shortenLinksList', putDivHere.innerHTML); // Stores to local storage the created div
    copyBtns = document.querySelectorAll('.copy-link');

    //Copy links to clipboard
    copyBtns.forEach(copyBtn => {
        copyBtn.addEventListener('click', e => {
            //console.log(copyBtn.parentNode.querySelector('.shorten-url').innerHTML);
            copyToClipboard(copyBtn.parentNode.querySelector('.shorten-url').innerHTML, copyBtn);
        })
    })
}

function copyToClipboard(url, btn) { //url is the shorten url string and btn the button to modify
        navigator.clipboard.writeText(url).then(function() {
            //it access was granted
            console.log('OK');
            btn.classList.add('copied');
            btn.innerHTML = "Copied!";
            setTimeout( function() {
                btn.classList.remove('copied');
                btn.innerHTML = "Copy";
            }, 1500);
        }, function() {
            // if access was denied
           console.log('NOK');
        });
}






//function to fetch
//function adds to localstorage
//function to update localstorage

// Calling the API
btn.addEventListener('click', (e) => {
	let urlValue = url.value; 
	// if (ValidateUrl(urlValue)) {
        // url.classList.remove('incorrect');
        fetch("https://api.shrtco.de/v2/shorten?url=" + urlValue)
        .then ( (response) => response.json() )
        .then ((data) => {
            console.log(data)
            if (response.ok) {
                console.log(response);
                console.log(response.result.full_short_link);
                addLinkDiv(urlValue, response.result.full_short_link); //Make new div appear
                btn.classList.remove('waiting');
                btn.innerHTML = "Shorten It!";
            }
            else {
                url.classList.add('incorrect');
                btn.classList.remove('waiting');
                btn.innerHTML = "Shorten It!";
            }
        })
        btn.classList.add('waiting');
        btn.innerHTML = "Please wait...";
	//} 
	// else {
	// 	url.classList.add('incorrect');
    // }
})




    
