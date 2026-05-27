$(document).ready(function() {

    $(".skillset").hover(
        function() {
            $(this).addClass("greenoutline");
        }, 
        function() {
            $(this).removeClass("greenoutline");
        }
    );

    $(".skillbtn").hover(
        function() {
            $(this).addClass("sbhover");
        }, 
        function() {
            $(this).removeClass("sbhover");
        }
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show-slide');
                observer.unobserve(entry.target);
            }
        });
    });

    $(".hidden-slide").each(function() {
        observer.observe(this);
    });

});