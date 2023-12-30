function towns(input){
    
    input.map((city)=>{
        let [town,latitude1, longitude1]= city.split(" | ");
        let latitude=Number(latitude1).toFixed(2);
        let longitude=Number(longitude1).toFixed(2);
        return {town,latitude ,longitude};
       
    })
    .forEach((city)=>{
        console.log(city);
    });
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);