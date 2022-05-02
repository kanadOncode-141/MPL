// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", mplMatch);

var matchArr = JSON.parse(localStorage.getItem("schedule")) || []

function mplMatch()
{
    event.preventDefault()

    var matchObj = {
        matchNo : document.querySelector("#matchNum").value,
        teamA : document.querySelector("#teamA").value,
        teamB : document.querySelector("#teamB").value,
        matchDate : document.querySelector("#date").value,
        place : document.querySelector("#venue").value,
    };
    
    matchArr.push(matchObj);
    console.log(matchArr);
    localStorage.setItem("schedule",JSON.stringify(matchArr));
    window.location.href="matches.html"
}