// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"))

displayMatch(matchArr);

var favArr = JSON.parse(localStorage.getItem("favourites"))||[];
function displayMatch(data)
{
    data.forEach(function (elem){
        
        var tr = document.createElement("tr")
        
        var td1 = document.createElement("td")
        td1.innerText = elem.matchNo

        var td2 = document.createElement("td")
        td2.innerText = elem.teamA 
        
        var td3 = document.createElement("td")
        td3.innerText = elem.teamB
        
        var td4 = document.createElement("td")
        td4.innerText = elem.matchDate
        
        var td5 = document.createElement("td")
        td5.innerText = elem.place
        
        var td6 = document.createElement("td")
        td6.innerText = "Favourites";
        td6.style.cursor = "pointer"
        td6.style.color = "blue"

        td6.addEventListener("click", function(){
            makeFavourites(elem)
        })

        tr.append(td1, td2, td3, td4, td5, td6)

        document.querySelector("tbody").append(tr);
    });
}

function makeFavourites(elem)
{
    favArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favArr));

}