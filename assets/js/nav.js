// $('header').html(
//     `
//     <nav class="relative flex flex-row items-center justify-between px-10 sm:px-16 lg:px-32 py-10">
//         <div class="h-fit w-thirtyPercent">
//             <img src="./assets/images/logos/logo.png" alt="logo" class="w-40 h-auto lg:w-254">
//         </div>
//         <div id="nav_menu" class="bg-white z-50 py-20 lg:py-0 -right-hundredPercent transition-all duration-500 ease-in-out shadow-md lg:shadow-none lg:static -bottom-580 absolute w-full flex-col flex lg:flex-row gap-10 justify-between lg:w-seventyPercent">
//             <div class="font-avenirRegular flex flex-col lg:flex-row items-center gap-10">
//                 <a href="#">About us</a>
//                 <a href="#">FAQ</a>
//                 <a href="#">Impact</a>
//                 <a href="#">Blog</a>
//                 <a href="#">Contact Us</a>
//             </div>
//             <div class="flex w-full lg:w-fit justify-center flex-col lg:flex-row items-center gap-7 font-avenirHeavy ">
//                 <a href="#" class="text-brandRed1x underline">Log In</a>
//                 <a href="#" class="bg-brandDarkGreen2x py-3 px-5 rounded-forty text-white text-center">Join as a business</a>
//             </div>
//         </div>
//         <div id="hamburger" class="md:block lg:hidden space-y-1">
//             <div class="h-0.75 w-8 rounded-ten bg-brandDarkGreen1x"></div>
//             <div class="h-0.75 w-6 rounded-ten bg-brandDarkGreen1x"></div>
//         </div>
//     </nav>
//     `
// )

// $('footer').html(
//     `
//     <section class="rounded-eighty flex flex-col lg:flex-row justify-between gap-5 items-center bg-brandBlue1x px-16 py-6">
//     <div>
//         <h1 class="font-avenirMedium text-2xl text-black">Subscribe to our Newsletter</h1>
//     </div>
//     <div class="flex flex-row items-center gap-3">
//         <label for="subscribe_email" class="hidden">Email</label>
//         <input type="email" name="subscribe-email" id="subscribe_email" placeholder="Enter your email" class="max-w-410 px-10 py-18px placeholder:font-avenirRegular placeholder:text-xl text-xl text-black placeholder:text-brandGray13x bg-white border border-black rounded-sixty">
//         <button type="submit" class="px-10 py-18px text-xl text-white bg-black hover:shadow-md hover:shadow-gray-700 rounded-sixty">Subscribe</button>
//     </div>
// </section>
// <section class="py-20 lg:py-60px px-10 sm:px-20 border flex flex-row flex-wrap items-start justify-start lg:grid grid-cols-12 border-black rounded-twoFifty lg:rounded-fiveHundred">
//    <div class="flex flex-col space-y-2 col-span-3 px-4 w-full md:w-fiftyPercent lg:w-full pt-10 lg:pt-0">
//        <h1 class="font-avenirHeavy text-3xl">Company</h1>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">About</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Team</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Impact</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Careers</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Partnerships</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Press</a>
//    </div>
//    <div class="flex flex-col space-y-2 col-span-3 px-4 w-full md:w-fiftyPercent lg:w-full pt-10 lg:pt-0">
//        <h1 class="font-avenirHeavy text-3xl">Legals</h1>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Website T&Cs</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">App Terms & Conditions</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Privacy policy</a>
//        <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Partner Charter</a>
//    </div>
//    <div class="flex flex-col space-y-2 col-span-3 px-4 w-full md:w-fiftyPercent lg:w-full pt-10 lg:pt-0">
//         <h1 class="font-avenirHeavy text-3xl">Resources</h1>
//         <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Blog</a>
//         <a href="#" class="font-avenirRegular text-xl text-black hover:underline">Live chat</a>
//     </div>
//    <div class="flex flex-col space-y-2 col-span-3 px-4 w-full md:w-fiftyPercent lg:w-full pt-10 lg:pt-0">
//         <h1 class="font-avenirHeavy text-3xl">Reach us</h1>
//         <div class="flex flex-row items-center gap-2">
//             <a href="#">
//                 <img src="./assets/images/icons/social/akar-icons_linkedin-box-fill.png" alt="linkedin" class="w-6 h-6">
//             </a>
//             <a href="#">
//                 <img src="./assets/images/icons/social/ant-design_twitter-circle-filled.png" alt="linkedin" class="w-6 h-6">
//             </a>
//             <a href="#">
//                 <img src="./assets/images/icons/social/akar-icons_facebook-fill.png" alt="linkedin" class="w-6 h-6">
//             </a>
//             <a href="#">
//                 <img src="./assets/images/icons/social/ant-design_instagram-filled.png" alt="linkedin" class="w-6 h-6">
//             </a>
//         </div>
//         <p class="text-base text-black font-avenirRegular">For grievances, contact
//             <a href="#" class="font-avenirRegular text-base text-brandPurple1x hover:underline">info@wellofscience.com</a>
//         </p>
//     </div>
// </section>`
// )

let toggle_menu = () => $('#hamburger').on('click', function(){
    let body_color = $('body').css('background-color')
    $('#nav_menu').toggleClass('hidden -right-hundredPercent').toggleClass('right-0').css('background-color', body_color)
})

toggle_menu()