
//THis is for store int nav 

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .store a');
    const forStore = document.querySelector('.for_store');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for Phone in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .phone a');
    const forStore = document.querySelector('.for_phone');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for Tablet in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .tablet a');
    const forStore = document.querySelector('.for_tablet');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});


// This is for wearables in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .wearables a');
    const forStore = document.querySelector('.for_wearables');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for Audio in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .audio a');
    const forStore = document.querySelector('.for_audio');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});


// This is for More Products in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .moreProduct a');
    const forStore = document.querySelector('.for_more_products');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for More Products in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .onetopia a');
    const forStore = document.querySelector('.for_onetopia');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for Community in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .community a');
    const forStore = document.querySelector('.for_community');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for Support in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.header_nav_bar_first .support a');
    const forStore = document.querySelector('.for_support');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for Search in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.all_header .search');
    const forStore = document.querySelector('.for_search');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});


// This is for Shoping Cart in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.all_header .shopping_cart');
    const forStore = document.querySelector('.for_shoping_cart');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});

// This is for Profile in nav //

document.addEventListener('DOMContentLoaded', (event) => {
    const storeLink = document.querySelector('.all_header .account_circle');
    const forStore = document.querySelector('.for_profile_content');

    let timer;

    storeLink.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        forStore.style.display = 'block';
    });

    storeLink.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (!forStore.matches(':hover')) {
                forStore.style.display = 'none';
            }
        }, 10); // Short delay to allow moving to the content
    });

    forStore.addEventListener('mouseleave', () => {
        forStore.style.display = 'none';
    });
});