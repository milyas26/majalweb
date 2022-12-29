    // on refresh scroll to top
    $(document).ready(function() {
        $(this).scrollTop(0);
    });

    var $sidebarLeft = $('#records-sidebar');
    var $sidebarRight = $('#navigate');
    var sidebarTop = $sidebarLeft.position().top - 35;

    var blogHeight = $('#content-timeline-wrapper').outerHeight() - 10;

    $(window).scroll(fixSidebarOnScroll);

    // STICKY SIDEBAR FUNCTION
    function fixSidebarOnScroll() {
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop <= sidebarTop) {
            $sidebarLeft.css({
                position: 'initial'
            })
            $sidebarRight.css({
                position: 'initial'
            })
        } 
        else if (windowScrollTop >= blogHeight) {
            $sidebarLeft.css({
                position: 'absolute',
                bottom: '120px',
                maxWidth: '300px',
                top: 'auto'
            })
            $sidebarRight.css({
                position: 'absolute',
                bottom: '120px',
                maxWidth: '300px',
                top: 'auto'
            })
        }
        else if (windowScrollTop >= sidebarTop) {
            $sidebarLeft.css({
                position: 'fixed',
                top: '35px',
                maxWidth: '300px',
                bottom: 'auto'
            })
            $sidebarRight.css({
                position: 'fixed',
                top: '35px',
                maxWidth: '300px',
                bottom: 'auto'
            })
        }
    }
    
    $(window).scroll(function () {
        // get all element where class year
        const yearsContent = document.querySelectorAll(`.year-content`);
        
        var observer = new IntersectionObserver(function(entries) {
            if(entries[0].isIntersecting === true){
                const element = entries[0].target.innerHTML
                const yearIntersecting = element.split(' ')[1]

                // get all element class years
                const years = document.querySelectorAll(`.years`);
                // remove class .active from all element
                years.forEach(function (year) {
                    year.classList.remove('active');
                })

                // add class .active into years where child a id include yearIntersecting
                const year = document.querySelector(`.years a[id*="${yearIntersecting}"]`);
                const parent = year.parentNode;
                parent.classList.add('active');

            }
        }, { threshold: [1] });

        yearsContent.forEach(function (element) {
            observer.observe(element);
        });
    })

    $(window).scroll(function() {
        // OBSERVE ELEMENT IS IN VIEWPORT
        var observer = new IntersectionObserver(function(entries) {
            var memberTeamRecord = document.getElementById('member-team-record')
            var launchedProductRecord = document.getElementById('product-launched-record');
            var awardedFellowshipRecord = document.getElementById('awarded-fellowship-record');
            var accoladesAwwardRecord = document.getElementById('acolades-awward-record');

            const id = entries[0].target.id
            if(entries[0].isIntersecting === true){
                if(id.includes('team-member')) {
                    memberTeamRecord.innerHTML = id.split('-')[2];
                } else if (id.includes('launched-product')) {
                    launchedProductRecord.innerHTML = id.split('-')[2];
                } else if (id.includes('fellowship-awarded')) {
                    awardedFellowshipRecord.innerHTML = id.split('-')[2];
                } else if (id.includes('awward-acolades')) {
                    accoladesAwwardRecord.innerHTML = id.split('-')[2];
                }

            }
        }, { threshold: [1] });

        var teamMembers = document.querySelectorAll('[id^="team-member"]');
        var launchedProducts = document.querySelectorAll('[id^="launched-product"]');
        var fellowshipAwarded = document.querySelectorAll('[id^="fellowship-awarded"]');
        var awardAccolades = document.querySelectorAll('[id^="awward-acolades"]');

        const arrays = [...teamMembers, ...launchedProducts, ...fellowshipAwarded, ...awardAccolades]

        arrays.forEach(function (element) {
            observer.observe(element);
        });
    })


    // ON CLICK SCROLL TO YEAR
    const years = document.querySelectorAll(`.year-navigate`);
    // onclick event on each year
    years.forEach(function (year) {
        year.addEventListener('click', function (e) {
            e.preventDefault();

            // // get all element class years
            // const years = document.querySelectorAll(`.years`);
            // // remove class .active from all element
            // years.forEach(function (year) {
            //     year.classList.remove('active');
            // })

            // // add class .active into parent 
            // const parent = e.target.parentNode;
            // parent.classList.add('active');

            // scroll to year element
            const year = e.target.id;
            const yearElement = document.getElementById(year.split('-')[1]);
            yearElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                top: 35
            });
        })
    }
    )