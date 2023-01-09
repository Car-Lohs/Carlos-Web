function smoothScroll(target, duration)
{
    var target = 
    document.querySelector(target);
    var targetPosition =
    target.geBoundingClientRect().top;
    var startPosition = window.pageXOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime=currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration)
        requestAnimationFrame(animation);
    }
   function ease(t,b,c,d){
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 *(t*(t-2)-1)+b;
   }
   requestAnimationFrame(animation);
}
var aboutSection = document.querySelector('#aboyt-section');
var contactSection = document.querySelector('#contact-section');
aboutSection.addEventListener('click',function(){
    smoothScroll('#about',50000);
});
contactSection.addEventListener('click',function(){
    smoothScroll('#contact',50000);
});