function vacantion (caunt, typePeople, day){
    let price = 0;
    let totalSum =0;
    switch (typePeople) {
        case "Students":
            switch (day) {
                case "Friday":
                    price=8.45;
                    break;
                case "Saturday":
                    price=9.80;
                    break;
                case "Sunday":
                    price=10.46;
                    break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    price=10.90;
                    break;
                case "Saturday":
                    price=15.60;
                    break;
                case "Sunday":
                    price=16;
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price=15;
                    break;
                case "Saturday":
                    price=20;
                    break;
                case "Sunday":
                    price=22.50;
                    break;
            }
            break;
    }

    totalSum = caunt*price;

    if(typePeople === "Students" && caunt>=30){
        totalSum=totalSum*0.85;
    }
    else if(typePeople==="Business" && caunt>=100){
        totalSum = totalSum- (price*10);
    }
    else if (typePeople=="Regular"&& caunt>=10&&caunt<=20) {
        totalSum = totalSum*0.95;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`)


}