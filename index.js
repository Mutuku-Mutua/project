* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
 body {
   font-family:sans-serif ;
   
 background-size:   cover;    
 background-position: 0rem;
 
 }    
 
 img{
   height: 100%;
   width: 100%;
   position: absolute;
 }
 
 .app-wrap {
   display: flex;
   flex-direction: column;
   background-image: linear-gradient();
   position: relative;
 }
 
 header {
   display :flex;
   justify-content: center;
   align-items: center;
   padding: 50px 15px 15px;
 
 }
 
 header input{
   width:100%;
   max-width: 280px;
   padding: 10px 15px;
   border: none;
   outline: none;
   background-color: rgba(255, 255, 255, 0.144);
   border-radius: 16px 0px 16px 0px;
   border-bottom:3px solid #DF8E00 ;
   color: #222222;
   font-size: 20px;
   font-weight: 300;
   transition: 0.2s ease-out;
 }
 
 header input:focus {
   background-color: rgba(255, 255, 255, 0.877);
 }
 
 main{
   flex: 1 1 100%;
   padding: 25px 25px 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
 
 }
 
 .Location .City{
   color:rgb(32, 26, 26);
   font-family: sans-serif;
   font-style: italic;
   font-size: 100px;
   font-weight:  800;
   margin-bottom: 5px;
 }
 
 
 .Location .date{
   color: rgb(2, 0, 0);
   font-family: sans-serif;
   font-size: 16px;
 
 }
 
 
 .current .Temp{
   color: white;
   font-style: italic;
   font-family: sans-serif;
   font-size: 102px;
   font-weight: 700;
   margin:  30px 0px;
   text-shadow: 2px 10px rgba(0,0,0,0.4);
   cursor: pointer;
 
 }
 .Temp:hover{
   color: rgb(24, 43, 44);
 }
 
 .current .Temp span{
   font-weight: 500;
   font-size: 30px;
 
 }
 
 .current .weather {
   color:   white;
   font-family: sans-serif;
   font-size: 32px;
   font-weight: 700;
   font-style: italic ;
   margin-bottom: 15px;
   text-shadow: 0px 3px rgba(0,0,0,0.3);
 
 }
 
 
 .current .hi-low{
   color:   white;
   font-family: sans-serif;
   font-size: 24px;
   font-weight: 500;
   text-shadow: 0px 4px rgba(0,0,0,0.4);
 
 }
 
 .current.hi-low span{
   font-size:5px;
 }