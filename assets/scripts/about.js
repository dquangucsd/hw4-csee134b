// Required Core Stylesheet
import "../node_modules/@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
import "../node_modules/@glidejs/glide/src/assets/sass/glide.theme";

import Glide from '@glidejs/glide'



var glide = new Glide('#glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
        800: {
            perView:2
        },
        480: {
            perView: 1
        }
    }
});
glide.mount();
