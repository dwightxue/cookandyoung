body{
    background: linear-gradient(to left top, #FF78BA, #3913B8) ;
    font-family: jost;
 
    }

#searchbox{
    width: 75%;
    margin: auto;
}

div {
    text-align: center; 
    
}

#searchbox > input {
        width: 50%;
        border: 2px  white;
        border-right: 0px;
        font-size: 18px;
        padding: 12px;
        background: transparent;
        color: black; 
        border-radius:50px;
        background-color: white;   
}


nav > h1{
    margin: 10px;
    height: 30px;
    padding: 0;
    width: 30%;
    font-family: jost;
    color: white ;
}


/* Dropdown */
nav{
    background: #ea62e7;
    border-radius: 5%;
    width: 100%;
   
    
}


ol, ul {
	list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}
  nav > ul{
    display:flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    margin: 1%;
    
  }

nav li{
    border: 1px #FF78BA solid;
    padding: 0.5em 1em;
    width: 7em;
    color: white;
    background-color: white;
       
    transform: translateX(-1em);
    display: inline-block;
    justify-content: center;
    
    
   
   
  }

  nav ul ul{
    transform: scale(1,0);
     transform-origin: top center;
     position: absolute;
     top:100%;
     transition: 0.4s;
    text-align: center;
    
    
     
 }
     
 nav li:hover ul{
  transform: scale(1,1);
     transition: 0.3s;
 }

a.b, a:hover{
    color: #FF78BA;
    transition: 0.3s;
    
}

a{
    text-decoration: none;

}



button:hover{
    box-shadow: 0 0 5px 5px;
    
   
}