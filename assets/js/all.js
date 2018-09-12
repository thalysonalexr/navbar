$(document).ready(f => {
    
    $('.ipt-search').focus(f => {
        $('.search-wrapper').css({
            "background-color": "#fcfcfc"
        })

        $('.ipt-search').css({
            "text-align": "left"
        })
    })

    $('.ipt-search').focusout(f => {
        $('.search-wrapper').css({
            "background-color": "#ebeff4"
        })

        $('.ipt-search').css({
            "text-align": "center"
        })
    })

    $('.btn-dropdown').click(f => {
        if ( ! $('.dropdown').is(':visible')) {
            $('.dropdown').removeClass('collapse')
            $('.dropdown').addClass('show')
        } else {
            $('.dropdown').removeClass('show')
            $('.dropdown').addClass('collapse')
        }
    })
})
