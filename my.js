function testGS(){

    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=8Riby27CIkXDbFwQjTzaUTesW-DNm6Bu94AzCvROSLih-aXfHt5nBTsu2HjSi3vElCbQ1kfu5ggbjJ30OJ1eaMnQ0viNsrjvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGsoEnQwMS2wNzqzy9BVla6nOlzB7XDBQX055stbLDx5nXICpnOyoI8HrhDMAfoWA5BwhGrkAh3PDzat-eYO7lSP_KjR6uMJeNz9Jw9Md8uu&lib=M73MkTU5Mpq1vSXpCxEdO5mTC7tOYrQyb";

    fetch(url)
        .then(d => d.json())
        .then(d =>{
    
            document.getElementById("app").textContent = d[0].status;
    
        });

}    

document.getElementById("btn").addEventListener("click",testGS);