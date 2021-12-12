import { fetchMovie } from './bring_movie';

const modal = [
    { title: 'A FISTFUL OF LEAD' },
    { popularity: '100.2' },
    { originalTitle: 'A FISTFUL OF LEAD' },
    { genre: 'Western' },
    { about: 'Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead...they’ve been double crossed – but by who and how?' },
    { photo1024: './images-temporary/modelnedesktop.jpg 1x, ./images-temporary/modelnedesktop@2x.jpg 2x' },
    { photo768: './images-temporary/modelnetablet.jpg 1x, ./images-temporary/modelnetablet@2x.jpg 2x' },
    {photoMobile: './images-temporary/modelnephone.jpg 1x, ./images-temporary/modelnephone@2x.jpg 2x'},
    
]


const backdrop = document.querySelector(".js-backdrop");
const modalWind = document.querySelector(".container-wind");
const modalWindElem = document.querySelector("ul.children");
const modalW = document.querySelector(".mw");
modalWindElem.setAttribute("data-modal-open");
const modalMarkup = createModalMarkup(modal);


modalW.insertAdjacentHTML("beforeend", modalMarkup);


function createModalMarkup(modal) {
    return modal.map(({title, popularity, originalTitle, genre, about, photo1024, photo768, photoMobile}) => {
        return `
    
    <div class="section_wind">
        <picture>
            <source media="(min-width: 1024px)"
                srcset="${photo1024}">

            <source media="(min-width: 768px)"
                srcset="${photo768}">

            <source media="(min-width: 10px)"
                srcset="${photoMobile}">

            <img src="#" alt="картинка з фільму" />
        </picture>
    </div>
    <div class="section_wind">
        <h1 class="modal_wind">"${title}"</h1>
        <div class="list_wind">
            <ul class="list wind_left">
                <li class="list_l">Vote / Votes</li>
                <li class="list_l">Popularity</li>
                <li class="list_l">Original Title</li>
                <li class="list_l">Genre</li>
            </ul>
            <ul class="list wind_right">
                <li class="list_r01">
                    <div class="list_r1"> 7.3 </div>
                    <div class="modal_slesh">&nbsp; / &nbsp;</div>1260
                </li>
                <li class="list_r01">"${popularity}"</li>
                <li class="list_02">"${originalTitle}"</li>
                <li class="list_02">"${genre}"</li>
            </ul>
        </div>


        <h2 class="modal_about">About</h2>
        <p class="modal_tex">"${about}"</p>

        
    </div>`;
    }).join("");
}