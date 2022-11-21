let accordion_control = () => $('.accordion-btn').each(function(){
    $(this).on('click', function(){
        if($(this).attr('data-accordion') === 'closed'){
            $(this)
            .parents('.accordion-header')
            .siblings('.accordion-content')
            .slideDown(200)
            $(this).attr('data-accordion', 'open')
            $(this).html('<img src="./assets/images/icons/vuesax/minus-circle.svg" alt="open">')
        }else if($(this).attr('data-accordion') === 'open'){
            $(this)
            .parents('.accordion-header')
            .siblings('.accordion-content')
            .slideUp(200)
            $(this).attr('data-accordion', 'closed')
            $(this).html('<img src="./assets/images/icons/vuesax/add-circle.svg" alt="open">')
        }
    })
})

accordion_control()

let faqPath ='assets/js/faq.json'

$.getJSON(faqPath, function(data) {
    index_FAQ(data)
});
$.getJSON(faqPath, function(faqs) {
    FAQ(faqs)
});


function FAQ(faqs){
    let faq
    faqs.forEach((element) => {
            faq = `
        <div class="w-full h-fit py-5 border-b border-brandGray11x">
        <div id="faq_${element.id}" class="accordion-header flex flex-row items-center justify-between">
            <h1 class="font-avenirHeavy w-ninetyPercent">${element.question}</h1>
            <button data-accordion="closed" type="button" class="accordion-btn">
                <img src="./assets/images/icons/vuesax/add-circle.svg" alt="open">
            </button>
        </div>
        <div class="accordion-content hidden pt-5">
            <p class="text-brandGray12x font-avenirRegular">${element.answer}</p>
        </div>
        </div>
    `  
    document.getElementById('faq_wrap').innerHTML += faq
     accordion_control()
    });
}



function index_FAQ(data){
    let index_faq
    let n = 6
for (let i = 0; i <= n; i++) {
    index_faq = `
    <div class="w-full h-fit py-5 border-b border-brandGray11x">
    <div id="faq_${data[i].id}" class="accordion-header flex flex-row items-center justify-between">
        <h1 class="font-avenirHeavy w-ninetyPercent">${data[i].question}</h1>
        <button data-accordion="closed" type="button" class="accordion-btn">
            <img src="./assets/images/icons/vuesax/add-circle.svg" alt="open">
        </button>
    </div>
    <div class="accordion-content hidden pt-5">
        <p class="text-brandGray12x font-avenirRegular">${data[i].answer}</p>
    </div>
    </div>
`  
document.getElementById('index_faq_wrap').innerHTML += index_faq
    accordion_control()
};
}


