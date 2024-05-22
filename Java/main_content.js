document.addEventListener('DOMContentLoaded',(event) => {
    const fourthFirst = document.querySelector('.all_fourth_first');
    const fourthButton = document.querySelector('.fourth_content_bottom_butn');

    if (!fourthButton.matches(':hover')) {
        fourthButton.computedStyleMap.display = 'none';
    }
});