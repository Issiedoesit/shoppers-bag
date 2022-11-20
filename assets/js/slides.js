let current_slide;

$('.slide-btn').each(function(){
    $(this).on('click', function(){
        let move = $(this).attr('data-slide-control')
        current_slide = $ (this).parents('.slide-btn-wrap').siblings('.slide-length').children('.current-slide')
        let current_text = parseInt(current_slide.html(), 10)
        if (move == 'forward'){
            current_text += 1;
        }
        else if (move == 'backward'){
            current_text += -1;
        }
        let slide_wrap = $(this).parents('.slide-btn-wrap').siblings('.slide-wrap')
        let slides = slide_wrap.children('.slides')
        // let dot = $(this).parent('div').siblings('.slide-dots-wrap').children('.slide-dots') 
        if (current_text > (slides.length)) {current_text = 1}
        if (current_text < 1) {current_text = slides.length}
        for(let i = 0; i < slides.length; i++)
        {
            slides[i].style.display = 'none'
        }
        let slide_text = $(this).parents('.slide-btn-wrap')
        .parents('div')
        .parents('div')
        .siblings('.slide-text-wrap')
        .children('.slide-text')
        for(let i = 0; i < slides.length; i++)
        {
            slide_text[i].style.backgroundColor = '#E2E2E2'
            slide_text[i].style.color = '#000000'
        }
        slides[current_text-1].style.display = 'block'; 
        slide_text[current_text-1].style.backgroundColor = '#2DA771'; 
        slide_text[current_text-1].style.color = '#FFFFFF'; 
        

        current_slide.html(current_text)
        })
})



// $('.slide-wrap').each(function(){
//     let slide =  $(this).children('img')
//     for(let i = 0; i < slide.length; i++){
//         slide[i].style.display = ' none'
//     }
//     slide[0].style.display = 'block'

// })



