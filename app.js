var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    //outputDiv.innerText = "ajajajsjsajj : " + txtInput.value;
    var inputText = txtInput.nodeValue;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => 
            { 
                var TranslatedText = json.contents.translated;
                outputDiv.innerText = TranslatedText;
            })

};

btnTranslate.addEventListener("click", clickHandler)