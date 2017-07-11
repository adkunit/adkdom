 var isMobileView = false,
            needscookie = false,
            cookievalue = '';

        if (window.location.search.indexOf('desktop=1') != -1) {
            needscookie = true;
            cookievalue = 'desktop';
        } else if (window.location.search.indexOf('mobile=1') != -1) {
            needscookie = true;
            cookievalue = 'mobile';
        }
        if (needscookie === true) {
            $.cookie('viewpreference', cookievalue, { path: 'index.html' });
            window.location = window.location.pathname;
        }