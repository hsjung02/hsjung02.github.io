window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    $('.academic-project-video-carousel').each(function() {
        var carousel = $(this);
        var pages = carousel.find('.academic-project-video-page');
        var status = carousel.find('.academic-project-video-status');
        var index = pages.index(pages.filter('.is-active'));

        if (index < 0) {
            index = 0;
        }

        function pauseVideos() {
            carousel.find('video').each(function() {
                this.pause();
            });
        }

        function playActiveVideos() {
            pages.eq(index).find('video[autoplay]').each(function() {
                var playPromise = this.play();

                if (playPromise && playPromise.catch) {
                    playPromise.catch(function() {});
                }
            });
        }

        function showPage(nextIndex) {
            if (!pages.length) {
                return;
            }

            index = (nextIndex + pages.length) % pages.length;
            pauseVideos();
            pages.removeClass('is-active').eq(index).addClass('is-active');
            status.text((index + 1) + ' / ' + pages.length);
            playActiveVideos();
        }

        carousel.find('.academic-project-video-prev').on('click', function() {
            showPage(index - 1);
        });

        carousel.find('.academic-project-video-next').on('click', function() {
            showPage(index + 1);
        });

        showPage(index);
    });
	
    bulmaSlider.attach();

})
