import express from "express";
const app =express();

app.get("/",(req,res) =>{
    res.send("<h1>Hello<h1>");
})

app.get("/contact",(req,res) =>{
    res.send("<h1>sgggs@gmail.com<h1>");
})

app.get("/about",(req,res) =>{
    res.send("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, ligula quis finibus placerat, sapien ipsum semper odio, sit amet facilisis arcu urna malesuada dolor. Praesent purus arcu, sagittis ut pharetra at, tempus a odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis, augue in dapibus pretium, urna eros ultrices justo, sit amet varius enim ex sed nunc. Cras nec purus diam. Curabitur a diam vel turpis vestibulum consequat ac maximus eros. Integer blandit, neque non sagittis sollicitudin, leo purus vehicula orci, ac aliquam ligula felis id enim. Mauris sit amet lorem euismod, lobortis orci at, scelerisque ante. Proin a velit id purus maximus aliquam ut sit amet nulla.<p>");
})
const port =3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})