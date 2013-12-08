 // jQuery elements
        var $window = $(window);
        var $html = $('html');

        // elements
        var comments = document.querySelectorAll('.comment');
        var sampleComment = document.querySelector('.sample-comment');
        var header = document.querySelector('.header');

        // scroll cover elements
        var body = document.body;
        var scrollTimer = null;
        var scrollCover = document.createElement('div');
        scrollCover.setAttribute('class', 'scroll-cover');

        // Control buttons
        var shadowButton = document.getElementById('shadow');
        var bgButton = document.getElementById('bg');
        var borderButton = document.getElementById('border');
        var translatezButton = document.getElementById('translatez');
        var thrashingButton = document.getElementById('thrashing');

        // Event Listeners
        shadowButton.addEventListener('click', function () {
            for (var i = 0; i < comments.length; i++) {
                comments[i].classList.toggle('shadow');
            }
        });

        bgButton.addEventListener('click', function () {
            document.body.classList.toggle('bg-fixed');
        });

        borderButton.addEventListener('click', function () {
            for (var i = 0; i < comments.length; i++) {
                comments[i].classList.toggle('radius');
            }
        });

        translatezButton.addEventListener('click', function () {
            header.classList.toggle('translatez');
        });

        thrashing.addEventListener('click', function () {
            //var sampleHeight = sampleComment.offsetHeight;
            for (var i = 0; i < comments.length; i++) {
                var comment = comments[i];
                var sampleHeight = sampleComment.offsetHeight;
                comment.style.minHeight = sampleHeight + 'px';
            }
        });

        // on scroll toggle header
        window.addEventListener('scroll', function () {
            var top = $window.scrollTop();

            $html.toggleClass('header--offset', (top > 80));
            //$html[0].classList.toggle('header--offset', (top > 80));
           
        });

        // on scroll toggle scroll cover
		
        window.addEventListener('scroll', function () {
            clearTimeout(scrollTimer);
            body.appendChild(scrollCover);

            scrollTimer = setTimeout(function () {
                body.removeChild(scrollCover);
            }, 500);
        }, false);
        
       