

export const ClickButtom = ()=>{

    // show menu
    const menuContainer = document.querySelector('#menu-container');
    menuContainer.classList.toggle('active-menu');
    menuContainer.classList.toggle('hide-menu');

    if ( menuContainer.classList.contains('active-menu') ) {
        menuContainer.style.display = "block";
        menuContainer.style.animation = "showMenuContainer .5s forwards";
    } else{
        menuContainer.style.animation = "hideMenuContainer .5s forwards";
        menuContainer.addEventListener("animationend", function(e) {
            if (e.animationName === 'hideMenuContainer') {
                menuContainer.style.display = "none";
            }
        }, false);
    }


    // animation bars
    let bar1 = document.querySelector('.bars1');
    let bar2 = document.querySelector('.bars2');
    let bar3 = document.querySelector('.bars3');

    // change color bars
    let bars = document.querySelectorAll('.bars');
    if ( menuContainer.classList.contains('active-menu') ) {
        let homeLink = document.querySelectorAll('.navbar-item')[0];
        if ( homeLink.classList.contains('frames') ) {
            for (let b in bars) {
                if (Object.hasOwnProperty.call(bars, b)) {
                    bars[b].classList.toggle('black-bars');
                }
            }
        }
        

    }else if ( menuContainer.classList.contains('hide-menu') ){
        for (let b2 in bars) {
            if (Object.hasOwnProperty.call(bars, b2)) {
                bars[b2].classList.remove('black-bars');
            }
        }
    }


    bar1.animate([
        // fotogramas clave
        { transform: 'rotate(30deg) translateX(.55em) ', opacity: 1,  },
        { transform: 'rotate(30deg) translateX(-4.5em)' , opacity: 0,  },
        { transform: 'rotate(30deg) translateX(-4.5em)' , opacity: 0, },
        { transform: 'rotate(30deg) translateX(.55em) ' , opacity: 1, }
    ], {
        // opciones de sincronización
        duration: 500,
        fill: 'forwards',
        direction: 'alternate'
    });
    bar3.animate([
        // fotogramas clave
        { transform: 'rotate(30deg) translateX(.2em) ', opacity: 1, },
        { transform: 'rotate(30deg) translateX(-3em)' , opacity: 0,  },
        { transform: 'rotate(30deg) translateX(-3em)' , opacity: 0,  },
        { transform: 'rotate(30deg) translateX(.2em) ' , opacity: 1,  }
    ], {
        // opciones de sincronización
        duration: 500,
        fill: 'forwards',
        direction: 'alternate'
    });
    bar2.animate([
        // fotogramas clave
        { transform: 'rotate(30deg) translateX(0) ', opacity: 1,  },
        { transform: 'rotate(30deg) translateX(3em)' , opacity: 0,  },
        { transform: 'rotate(30deg) translateX(3em)' , opacity: 0,  },
        { transform: 'rotate(30deg) translateX(0) ' , opacity: 1,  }
    ], {
        // opciones de sincronización
        duration: 500,
        fill: 'forwards',
        direction: 'alternate'
    });

}



