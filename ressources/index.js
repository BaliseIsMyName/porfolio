const listSite = [
                    {'#listeCompany': 'miniatureDreamCompany'},
                    {'#generateurMessage': ''}, 
                    {'#WebStyle': ''}
                ];


                
const listeCompany = document.querySelector('#listeCompany');
const miniatureBestCompagny = document.querySelector('#miniature-realisation');

const mouseOver = (event) => {
    
    console.log('coucou');
    listeCompany.style.color = 'blue';
    miniatureBestCompagny.style.display = 'block';
}

const mouseOutFocus = () => {
    listeCompany.style.color = 'black';
    miniatureBestCompagny.style.display = 'none';
}

listeCompany.onmouseover = mouseOver;
miniatureBestCompagny.onmouseover = mouseOver;
listeCompany.onmouseout = mouseOutFocus;
miniatureBestCompagny.onmouseout = mouseOutFocus;

