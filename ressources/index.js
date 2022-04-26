const miniatureBestCompagny = document.querySelector('#miniature-realisation-company');
const miniatureGenerateur = document.querySelector('#miniature-realisation-generateur');
const miniatureWebStyle = document.querySelector('#miniature-realisation-webstyle');

const listeCompany = document.querySelector('#listeCompany');
const generateurMessage = document.querySelector('#generateurMessage');
const webStyle = document.querySelector('#webStyle');

const listSite = {
                    listeCompany: miniatureBestCompagny,
                    generateurMessage: miniatureGenerateur, 
                    webStyle: miniatureWebStyle,
                    miniatureBestCompagny: miniatureBestCompagny,
                    miniatureGenerateur: miniatureGenerateur,
                    miniatureWebStyle: miniatureWebStyle
                };

const listList =[
                    listeCompany,
                    generateurMessage,
                    webStyle,
                    miniatureBestCompagny,
                    miniatureGenerateur,
                    miniatureWebStyle
                ];
                    
const mouseOver = (event) => {
    const eventTarget = event.target.id;
    const valueList = listSite[eventTarget];
    event.target.style.color = 'red';
    if(valueList != undefined){
        valueList.style.display = 'block';
    }
}

const mouseOutFocus = (event) => {
    const eventTarget = event.target.id;
    const valueList = listSite[eventTarget];
    event.target.style.color = 'black';
    // console.log(valueList);
     if(valueList != undefined){
        valueList.style.display = 'none';
    }
}

listList.forEach(element => {
    // console.log(element);
    element.onmouseover = mouseOver;
    element.onmouseout = mouseOutFocus;
});



