// var text = ["Welcome", "Hi", "Sup dude"];
// var counter = 0;
// var elem = document.getElementById("change_text");
// var inst = setInterval(change, 2000);

// function change() {
//   elem.innerHTML = text[counter];
//   counter++;
//   if (counter >= text.length) {
//     counter = 0;
//     // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
//   }
// }


var first  = ['Create','Design','Develop'];
// var second = ['you','clients','artists','us'];
// var i = 0;
// var j = 0;
// var maxfirst  = first.length - 1;
// var maxsecond = second.length - 1;

// function delay() {
//     $('#intro').velocity("transi1ion.slideUpIn", 1250);
//     setInterval(firstwordchange, 400);
// }

// function firstwordchange() {
//     if (i < maxfirst) i++; else i = 0;

//     $('#firstword').velocity("transition.slideUpOut", 300);

//     setTimeout(function () {
//         $('#firstword').text(first[i]);
//     }, 200);

//   $('#firstword').velocity("transition.slideUpIn", 300);
// }

var first = ['reusable','biodegradable','recyclable'];
var firstM = [], el;

var $first = $('#change_text'); 
var $container = $('#container');

// init static //    
$first.text(first[0]);

// create measurables //
for(var i = 0; i < first.length; i++){
    el = $('<div class="measurable">' + first[i] + '</div>');
    $container.append(el);
    firstM.push(el.width());
}

// absolutize //
var positions = [];
$('#container > span').each(function(){
    positions.push($(this).position());
});
$('#container > span').each(function(){
    var pos = positions.shift();
    $(this).css({
        position: 'absolute',
        left: pos.left,
        top: pos.top
    });
});

// remember initial sizes //
var firstInitialWidth = $first.width();

// loop the loop //
var activeWordsIndex = 0;
setInterval(function(){
    activeWordsIndex++;
    var firstIndex = activeWordsIndex % first.length;
    
    $first.text( first[firstIndex] );
    
    var firstLineOffset = (firstM[firstIndex] - firstInitialWidth) / 2;
    
    $first.css({
        transition: 'none', 
        transform: 'translate(' + (-firstLineOffset) + 'px, -30px) scale(0)',
        opacity: '0',
        transform: 'scale(0)'
    });
    setTimeout(function(){
        $first.css({
            transition: 'all 1s ease',
            transform: 'translate(' + (-firstLineOffset) + 'px, 0px) scale(1)',
            opacity: '1',
        });
    }, 50);
}, 2000);
