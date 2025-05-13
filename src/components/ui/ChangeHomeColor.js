const ChangeHomeColor = (e) => {

    // stars
    let stars = document.querySelector( '.container-stars' );
    let twinkling = document.querySelector( '.container-tw' );
    stars.style.display = "none";
    twinkling.style.display = "none";

    // let bg = document.querySelector( '.dynamic-color-bg' );
    let bg = document.querySelector( '.full-menu' );
    let bar = document.querySelector( '.black-bar' );
    let txt = document.querySelectorAll( '.navbar-item' );

    // apply black styles
    bg.style.background = '#fff';
    bar.style.background = '#000';

    // adjust styles to the others items
    for (let n in txt) {
        if (txt.hasOwnProperty.call(txt, n)) {
            // link[n];
            txt[n].style.color = '#000';
            txt[n].style.fontSize = '2.5rem';
            txt[n].style.margin = '.07em';
            txt[n].classList.remove('frames');
        }
    }

    // apply styles to current link item
    e.target.style.fontSize = '4.5rem';
    e.target.style.margin = '.2em';
    e.target.classList.add('frames');
    e.target.classList.add('frames-black');

    // remove planet
    let planet = document.querySelectorAll( '.planet' );
    for (let p in planet) {
        if (Object.hasOwnProperty.call(planet, p)) {
            planet[p].classList.remove('active-planet');
        }
    }

    // update planet
    for (let index in txt) {
        if (Object.hasOwnProperty.call(txt, index)) {
            if ( txt[index].classList.contains('frames') ) {
                // use index to select order img planet
                let activePlanet = document.querySelectorAll('.planet')[index];
                activePlanet.classList.add('active-planet');
            }
            
        }
    }

    // update color contact
    let icons = document.querySelectorAll( '.fa-brands' );
    for (let i in icons) {
        if (Object.hasOwnProperty.call(icons, i)) {
            icons[i].style.color = '#000';
            
        }
    }
    let squares = document.querySelectorAll( '.square' );
    for (let s in squares) {
        if (Object.hasOwnProperty.call(squares, s)) {
            squares[s].classList.remove('square-white');                
        }
    }

    // update color bars
    let bars = document.querySelectorAll('.bars');
    for (const b3 in bars) {
        if (Object.hasOwnProperty.call(bars, b3)) {
            if ( !bars[b3].classList.contains('black-bars')) {
                bars[b3].classList.add('black-bars');
            }
            
        }
    }
}

export default ChangeHomeColor