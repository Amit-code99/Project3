waitForElm('p.ford-contact').then(function() {
    /* Invoking improved Popup Language Button Visibility Function */
    // console.log('PO: Invoked on 4th waitForElm Block - #464 - newLangBtnForVisibilityFN')
    let reduceParghPadding = document.querySelectorAll('p.ford-contact');
    newLangBtnForVisibilityFN(reduceParghPadding);
    for (let i = 0; i < reduceParghPadding.length; i++) {
        reduceParghPadding[i].style.padding = '0px 30px 0px';
    }
    console.log("loking for great deal")
    /* Reducing Window Height by adjusting SPAN */
    document.querySelector("#private_offer_wrapper > div.fordbox-22891 > div.content-container.topbump > span").style.height = '35px'

});