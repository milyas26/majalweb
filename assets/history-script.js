
    // on refresh scroll to top
    $(document).ready(function() {
        $(this).scrollTop(0);
    });

    var $sidebarLeft = $('#records-sidebar');
    var $sidebarRight = $('#navigate');
    var sidebarTop = $sidebarLeft.position().top;

    var blogHeight = $('#content-timeline-wrapper').outerHeight() - 10;

    $(window).scroll(fixSidebarOnScroll);

    // STICKY SIDEBAR FUNCTION
    function fixSidebarOnScroll() {
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop >= blogHeight || windowScrollTop <= sidebarTop) {
            $sidebarLeft.removeClass('sticky');
            $sidebarRight.removeClass('sticky');
        }
        else if (windowScrollTop >= sidebarTop) {
            if (!$sidebarLeft.hasClass('sticky')) {
                $sidebarLeft.addClass('sticky');
            }
            if (!$sidebarRight.hasClass('sticky')) {
                $sidebarRight.addClass('sticky');
            }
        }
    }

    $(window).scroll(function() {
        // OBSERVE ELEMENT IS IN VIEWPORT
        var observer = new IntersectionObserver(function(entries) {
            var memberTeamRecord = document.getElementById('member-team-record')
            var launchedProductRecord = document.getElementById('product-launched-record');
            var awardedFellowshipRecord = document.getElementById('awarded-fellowship-record');
            var accoladesAwwardRecord = document.getElementById('acolades-awward-record');

            const id = entries[0].target.id
            if(entries[0].isIntersecting === true){

                // if id include "team-member"
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
    
    
    