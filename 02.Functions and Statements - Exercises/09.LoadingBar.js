function loadingBar(percent){
    let loading = percent/10;
    if (loading===10) {
        console.log("100% Complete!")
        return;
    }
    let numPercentStr='%'.repeat(loading);
    let numDotStr='.'.repeat(10-loading);
    let percentStr= `${percent}% [${numPercentStr}${numDotStr}]`
    console.log(percentStr);
    console.log(`Still loading...`);
    
}

loadingBar(50);