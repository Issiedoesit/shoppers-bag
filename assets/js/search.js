$('#search_faq').on('keyup', function(){
    var val = $(this).val().toLowerCase()
    let search = $('#faq_wrap').children('div')
    $(search).filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1)
    })
    if (val == ''){
        $('search').css('display', 'flex')
        $('.search_match_message').remove()
    }
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
        if(f == 1){
            $('.search-message').prepend(`<p class='search_match_message w-full'>Found ${f} result </p>`)

        }else{
            $('.search-message').prepend(`<p class='search_match_message w-full'>Found ${f} results </p>`)
        }
    }
    if(f == search_len && val == '' ){
        $('.search_match_message').remove()}
    if(n == search_len){
        $('#faq_wrap').append("<p class='no_search_match_message'>Sorry, your search did not yield any results. Try searching using another keyword or contact us.</p>")
    }
})

document.querySelector(".product-search").addEventListener("search", function(event) {
    $('.product-card').css('display', 'flex')
    $('.no_search_match_message').remove()
    $('.search_match_message').remove()
  });