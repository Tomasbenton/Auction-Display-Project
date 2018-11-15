<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* LAYOUT STRUCTURE */
*{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

body, #app, #display, #manage{
    width: 100%;
    height: 100%;
}

#home{
    width: 40%;
    max-width: 350px;
    height: auto;
}

.column {
    width: 50%;
    height: 100%;
    overflow: hidden;
    float: left;
}

.row{ display: block; margin-bottom: 25px; }

.frame{
    width: 100%;
    height: auto;
    overflow: hidden;
}

.image{
    width: 100%;
    height: auto;
}

form{ width: 100%; }

input{
    display: block;
    width: 100%;
    max-width: 350px;
    height: 40px;
    border: solid #808080 1px;
}

.button{
    height: 40px;
    width: 100%;
    max-width: 350px;
}

table{
    width: 80%;
    border-radius: 10px;
}

/* margin, padding */
body, #app, #display{
  margin: 0;
  padding: 0;
}
.small_pad{ padding: 25px 10px; }
.big_pad{ padding: 0px 50px 25px 50px; }
h1, h2, h3{ display: inline; } /* removes extra spacing above and below headings */
input{ 
    margin: 10px 0px 10px 0px;
    padding: 0px 5px;
}
.button{  margin: 10px 0px; }
#home, #admin, #manage{ margin: auto; margin-top: 100px;}
table{
    margin: 10px auto;
    padding: 10px 10px;
}

/* alignment */
.left{ text-align: left; }
.right{ text-align: right; }
.center{ text-align: center; }
.top{ vertical-align: top; }
.bottom{ vertical-align: bottom; }

/* LAYOUT STYLING */
/* background colors */
body, #app{ background-color: #ffffff; }
.button{ background-color: #34495e; border: none; }
#home{ background-color: #CFD8DC; border-radius: 10px; }
table{ background-color: #e8e8e8; }

/* text colors */
body{ color: #34495e; }
a{ color:#34495e; }
.button{ color: #ffffff; }

/* font families */
body{
    font-family: 'Open Sans', Helvetica, sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* text sizes */
body{ font-size: 16px; }
h1{ font-size: 45px; line-height: 130%; }
h2{ font-size: 30px; line-height: 110%; }
h3{ font-size: 24px; line-height: 100%; }

/* other styling */
ul { list-style: none; }



        td{
      width: 25%;
        }

    button, input{
        display: inline-block;
        height: 40px;
    }

    .col{
        display: inline-block;
        width: 20%;
        text-align: left;
    }

    .row{
    padding: 10px 5px;
    }

    .add{

    }
        a {
      color: #4d7ef7;
      text-decoration: none;
        }
    a.add_post_link {
      background: #4d7ef7;
      color: #fff;
      padding: 10px 80px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
        }
</style>
