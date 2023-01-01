    // on refresh scroll to top
    $(document).ready(function() {
        $(this).scrollTop(0);
    });

    var $sidebarLeft = $('#records-sidebar');
    var $sidebarRight = $('#navigate');
    var sidebarTop = $sidebarLeft.position().top - 35;

    // on window onliad
    $(window).on('load', function () {
        var blogHeight = $('#content-timeline-wrapper').outerHeight() - 10;
        console.log('blogHeight', blogHeight)
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
    })
    
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
            var memberTeamRecord = document.querySelectorAll('#member-team-record')
            var launchedProductRecord = document.querySelectorAll('#product-launched-record');
            var awardedFellowshipRecord = document.querySelectorAll('#awarded-fellowship-record');
            var accoladesAwwardRecord = document.querySelectorAll('#acolades-awward-record');

            const launchedProduct = entries[0].target.getAttribute('launchedProduct')
            const fellowshipAwarded = entries[0].target.getAttribute('fellowshipAwarded')
            const teamMember = entries[0].target.getAttribute('teamMember')
            const awardAccolades = entries[0].target.getAttribute('awardAccolades')

            if(entries[0].isIntersecting === true){
                memberTeamRecord.forEach(element => {
                    element.innerHTML = teamMember;
                })

                launchedProductRecord.forEach(element => {
                    element.innerHTML = launchedProduct;
                })
                
                awardedFellowshipRecord.forEach(element => {
                    element.innerHTML = fellowshipAwarded;
                })

                accoladesAwwardRecord.forEach(element => {
                    element.innerHTML = awardAccolades;
                })


            }
        }, { threshold: [1] });

        var arrays = document.querySelectorAll('[class^="content-wrapper"]');

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
            // scroll to year element
            const year = e.target.id;
            const yearElement = document.getElementById(year.split('-')[1]);

            // scroll to year element and add gap 100px
            window.scrollTo({
                top: yearElement.offsetTop - 250,
                behavior: 'smooth'
            });
        })
    })

    // show-hide element .years-options on click
    const yearsOptions = document.querySelector('.years-options');
    const yearsOptionsButton = document.querySelector('.years-options-button');
    yearsOptionsButton.addEventListener('click', function (e) {
        e.preventDefault();
        yearsOptions.classList.toggle('show');
    })

    // hide when click outside element .years-options
    document.addEventListener('click', function (e) {
        if (e.target.closest('.years-options') || e.target.closest('.years-options-button')) return;
        yearsOptions.classList.remove('show');
    })

    // get all element .year-option
    const yearOptions = document.querySelectorAll('.year-option');
    // onclick event on each year
    yearOptions.forEach(function (year) {
        year.addEventListener('click', function (e) {
            e.preventDefault();
            // get innerhtml value
            let year = e.target.innerHTML;
            // remove img tag from year element
            year = year.replace(/<img[^>]*>/g,"");

            const yearElement = document.getElementById(year);

            window.scrollTo({
                top: yearElement.offsetTop - 30,
                behavior: 'smooth'
            });

            // hide element .years-options
            yearsOptions.classList.remove('show');

            // add class .active to year option
            yearOptions.forEach(function (year) {
                year.classList.remove('active');

                if (year.innerHTML == e.target.innerHTML) {
                    year.classList.add('active');
                }
            })

            // change value .selected-year
            const selectedYear = document.querySelector('.selected-year');
            selectedYear.innerHTML = year;
        })
    })