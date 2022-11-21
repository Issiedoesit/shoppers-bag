$('.about-img').each(function(){
    $(this).on('click', function(){
        $(this).siblings('.about-content').toggleClass('hidden')
    })
})