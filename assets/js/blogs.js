let blog_tagger = () =>  $('.blog-tag').each(function(){
    let blog_type = $(this).html().toLowerCase()
    if (blog_type.includes('news')){
        $(this).css('background-color', '#123845')
    }else if(blog_type.includes("partner's story")){
        $(this).css('background-color', '#845CA7') 
    }else if(blog_type.includes('ads')){
        $(this).css('background-color', '#009933') 
    }else if(blog_type.includes('diy')){
        $(this).css('background-color', '#00A0FF') 
    }
})

// alert(window.location.pathname + window.location.search + window.location.hash);
let origin = location.origin
let blogPath ='assets/js/blog-main.json'

$.getJSON(blogPath, function(data) {
    console.log(data)
    blogPostsMain(data)
});

let blog_posts_main
function blogPostsMain(data){
    data.forEach((element) => {
        let tags = element.tags
        let tagged=''
        for (let i = 0; i < tags.length; i++) {
            tagged += `<div class="blog-tag py-tenPixel px-5 lg:px-7 font-moderat font-normal text-white h-fit w-fit text-sm md:text-lg lg:text-xl rounded-fifty whitespace-nowrap">
            ${tags[i].tag}
            </div>`
        }

        blog_posts_main = `
        <div id="blog_post_${element.id}" class="flex flex-col py-4 md:flex-row gap-10">
            <div class="blog-post-img w-307 md:w-fortyPercent h-48 md:max-h-52">
                <div class="relative w-full md:w-eightyPercent h-full max-w-xl">
                    <div class="z-30 w-full relative h-full py-10 px-5 sm:px-10 lg:px-16 mx-auto rounded-twenty bg-white flex flex-col md:flex-row items-start gap-5">
                    
                    </div>
                    <div class="absolute w-full bg-brandGray22x h-full rounded-twenty -left-2 -bottom-2"></div>
                </div>
            </div>
            <div class="space-y-3 w-full md:w-sixtyPercent md:pr-5">
                <h1 class="font-milligramBold700 text-brandDarkGreen1x text-2xl md:text-3xl lg:text-5xl">
                    ${element.blogTitle}   <span class="shadow-green-text pr-2"> ${element.blogShadowText}</span>
                </h1>
                <div class="flex flex-row gap-3">
                    <p class="text-black font-moderat font-extrabold">Author: <span class="font-normal text-brandGray23x">${element.author}</span></p>
                    <p class="text-black font-moderat font-extrabold">Read time: <span class="font-normal text-brandGray23x">${element.readTime}</span></p>
                </div>
                <div class="blog-tag-wrap flex flex-row flex-wrap items-center gap-5 py-3">
                   ${tagged}
                </div>
                <p class="font-avenirRegular text-brandGray23x text-sm sm:text-base md:text-lg">
                    ${element.snippet}    
                </p>
                <div class="py-2">
                    <a href=${origin}${element.url} class="underline pt-5 text-brandRed1x font-moderat font-normal">Read more</a>
                </div>
            </div>
       </div>
    `  
    document.getElementById('blog_posts_wrap').innerHTML += blog_posts_main
    blog_tagger()
    });
}
