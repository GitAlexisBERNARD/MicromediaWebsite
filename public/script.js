    // Sélectionnez l'élément "conne" en JavaScript
            var glace = document.getElementById("glace");
            var topFinal = 15; 
            var isDescending = true;

            // Fonction pour faire descendre l'élément
            function descendreElement() {
                var topInitial = -200; // Position initiale au-dessus de l'écran
                var vitesse = 2; // Vitesse de descente (ajustez selon vos besoins)
                var interval = 10; // Intervalle de rafraîchissement en millisecondes

                function animation() {
                    if (isDescending) {
                        if (topInitial < topFinal) {
                            topInitial += vitesse;
                            glace.style.top = topInitial + "px";
                            requestAnimationFrame(animation);
                        } else {
                            isDescending = false;
                            setTimeout(disparaitreElement, 1000); // Attendre 1 seconde avant de commencer la disparition
                        }
                    }
                }

                animation();
            }

            // Fonction pour faire disparaître l'élément
                    function disparaitreElement() {
                        var opacite = 1; // Opacité initiale à 100%
                        var vitesseDisparition = 0.02; // Vitesse de disparition (ajustez selon vos besoins)

                        function animation() {
                            if (opacite > 0) {
                                opacite -= vitesseDisparition;
                                glace.style.opacity = opacite;
                                requestAnimationFrame(animation);
                            } else {
                                reapparaitreElement();
                            }
                        }

                        animation();
                    }
            // Fonction pour faire réapparaître l'élément depuis le haut de l'écran
            function reapparaitreElement() {
                glace.style.top = "-200px"; // Réinitialiser la position au-dessus de l'écran
                glace.style.opacity = 1; // Rétablir l'opacité à 100%
                isDescending = true; // Permettre à l'élément de descendre à nouveau
                setTimeout(descendreElement, 1000); // Redémarrer la descente après 1 seconde
            }

            // Utilisez setTimeout pour déclencher l'animation après un délai initial
            setTimeout(descendreElement, 1000); // Déclenche l'animation après 1 seconde (1000 ms)