$('#search_faq').on('keyup', function(){
    var val = $(this).val().toLowerCase()
    let search = $('#faq_wrap').children('div')
    $(search).filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1)
    })
    if (val == ''){
        $('search').css('display', 'flex')
        $('.search_match_message').remove()
        $('.search-lamp-path-1').css({
            stroke: '#292D32',
        })
        $('.search-lamp-path-2').css({
            stroke: '#292D32',
        })
    }
    $('.search-lamp-path-1').css({
        stroke: '#292D32',
    })
    $('.search-lamp-path-2').css({
        stroke: '#292D32',
    })
    $('.no_search_match_message').remove()
    $('.search_match_message').remove()

    let search_parent = $('#faq_wrap').children('div')
    let search_len = search_parent.length
    let n = 0;
    let f = 0;
    for (let i = 0; i < search_len; i++) {
        if (search_parent[i].style.display == 'none'){
            n++
        }else {
            f++
        }
    }
    // alert(f)
    if(f > 0 ){
        $('.search-lamp-path-1').css({
            stroke: '#009933',
        })
        $('.search-lamp-path-2').css({
            stroke: '#009933',
        })
        if(f == 1){
            $('.search-message').prepend(`<p class='search_match_message w-full font-avenirRegular'>Found ${f} result </p>`)
        }else{
            $('.search-message').prepend(`<p class='search_match_message w-full font-avenirRegular'>Found ${f} results </p>`)
        }
    }
    if(f == search_len && val == '' ){
        $('.search-lamp-path-1').css({
            stroke: '#292D32',
        })
        $('.search-lamp-path-2').css({
            stroke: '#292D32',
        })
        $('.search_match_message').remove()}
    if(n == search_len){
        $('.search-lamp-path-1').css({
            stroke: '#E75E79',
        })
        $('.search-lamp-path-2').css({
            stroke: '#E75E79',
        })
        $('#faq_wrap').append(`<div class='no_search_match_message font-avenirRegular space-y-10'><svg class="-rotate-45 mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#E75E79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.4">
        <path d="M8 12H16" stroke="#E75E79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16V8" stroke="#E75E79" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg><p>Sorry, your search did not yield any results. Try searching using another keyword or contact us.</p></div>`)
    }
})

document.querySelector("#search_faq").addEventListener("search", function(event) {
    $('.search-lamp-path-1').css({
        stroke: '#292D32',
    })
    $('.search-lamp-path-2').css({
        stroke: '#292D32',
    })
    $('#faq_wrap').children('div').css('display', 'block')
    $('.no_search_match_message').remove()
    $('.search_match_message').remove()
  });