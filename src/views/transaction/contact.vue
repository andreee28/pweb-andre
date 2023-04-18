<template>
    <head>
    <title>Homepage</title>
    
</head>
<body>
   <header>
    <nav>
        <ul>
            <div><li><h1><router-link to="/" class="btn"> Home</router-link></h1></li>
            <li><h1><router-link to="/about" class="btn"> About</router-link></h1></li>
            <li><h1><router-link to="/contact" class="btn"> Contact</router-link></h1></li>
        </div>
            </ul>
        </nav>
   </header>
   <nav class="badan">
        <h1>Contact Me</h1>
        <a href="https://wa.me/6282386014236"><button type="button" class="btn btn-success"> WHATSAPP</button></a>
</nav>
   <footer>
    <section>
        <div class="masbro"><h4>FOLLOW DULU LAH MASBRO</h4>
            <p2><a href="https://www.instagram.com/dre.ndre_/"><img src="./images/ig.png" alt="" height="30" width="30" class="gambar"></a></p2>
        <p3><a href><img alt="" src="./images/twitter.png" class="gambar" height="30" width="30" /></a></p3>
        <p4><a href><img src="./images/fb.png" alt="" height="30" width="30" class="gambar"></a></p4>
    </div>
    <ul><li class="cr">Copyright © Andre Johann Jonnius. All rights reserved.</li></ul>
    </section>
    </footer>
</body>
</template>

<script>
    export default {

    }
</script>

<style>
body{
    background-color: rgb(107, 106, 106);
    color: rgb(255, 255, 255);
}
header{ 
    width: 1350px;
    position: fixed;
    color: rgb(11, 202, 33);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.btn{
    text-decoration: none;

}
.keterangan{
    color: rgb(82, 74, 74);
}
ul{
text-align: right;
margin: 0;
padding: 0;
list-style: none;
}
li{
display: inline-block;
margin-right: 5px;
}
nav{
background-color: rgb(255, 255, 255);
padding: 0px;
text-align: center;
}
.badan{
    padding: 300px;
    background-color: rgba(15, 15, 15, 0.205);

}
.btn.btn-success{
    font-family: Verdana;
    background-color: rgb(11, 202, 33) ;
    border-color: rgb(11, 202, 33) ;

}
div.masbro{
background-color: rgb(48, 77, 51);
color: rgb(255, 255, 255);
display: inline-block;
margin: 0px 0px 0px 205px;
}
footer{
    padding: 10px;
    background-color: rgb(48, 77, 51);
}
.gambar{
    margin: 38px;
}
.cr{
    color: rgb(154, 160, 167);
}
</style>