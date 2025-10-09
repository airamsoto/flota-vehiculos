        (function () {
            const toggle = document.getElementById('contrast-toggle'); //boton
            const themeLink = document.getElementById('theme-link'); //link de la hoja de estilos
            if (!themeLink) return; //si no existe el link, salimos para no tener errores
            const defaultHref = themeLink.getAttribute('href'); //guardamos el href para restaurarlo
            const contrastHref = 'css/styles-contraste.css'; //cogemos el href de alto contraste
            toggle.addEventListener('click', function () { //al hacer click en el boton...
                const isContrast = themeLink.getAttribute('href') === contrastHref; //miramos si ya esta el alto contraste
                if (isContrast) { //comprobamos si ya esta el alto contraste
                    themeLink.setAttribute('href', defaultHref); //si es asi, restauramos el normal
                } else {
                    themeLink.setAttribute('href', contrastHref); //si no, ponemos el de alto contraste
                }
               
                if (isContrast) {
                    toggle.setAttribute('aria-pressed', 'false');// estaba en contraste -> ahora no lo está
                } else {
                    toggle.setAttribute('aria-pressed', 'true'); // no estaba en contraste -> ahora sí
                }
            });
        })();