$('.tab-toggle-btn').each(function(){
    $(this).on('click', function(){
        let current_tab = $(this).attr('data-what-section')
        $(this).parent('div').next('.tab-wrap').children('.tab').css('display', 'none')
        $('#'+current_tab).css('display', 'flex')
        if ($(this).hasClass('how-tab')){
            $('.how-tab').css('border-color', '#F2F2F2')
            $(this).css('border-color', '#00A1FF')
        }
        if ($(this).hasClass('why-tab')){
            $('.why-tab').css({
                'background-color': 'transparent',
                'color':'#000000',
                'border-radius':'none',
            }).addClass('hover:rounded-hundred hover:bg-brandGray9x hover:text-brandGray8x')
            $(this).css({
                'background-color': '#000000',
                'color':'#FFFFFF',
                'border-radius':'100px',
            })
        }
    })
})