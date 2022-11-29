

const show = document.querySelector(".show");

// ALL keys code

const keys = document.querySelectorAll(".all-key") ;

keys.forEach( item => {

    item.addEventListener("click" , function(event){


        if (window.outerWidth <= 700) {

            if (show.innerText.length >= 17) return alert("Mashin Hesab ta 17 ragham ra mitavand benevisad.") ;

        }
        else {

            if (show.innerText.length >= 15)  return alert("Mashin Hesab ta 15 ragham ra mitavand benevisad.") ;
        }


        if (show.innerText == 0) return show.innerText = event.target.innerText;
        show.innerText += item.innerText ;
    })

    // item.addEventListener("mousedown" , function(){

    //     item.style.boxShadow = "inset 0px 2px 4px 1px #98989883" ;

    //     if (window.outerWidth <= 700)  item.style.fontSize = "1.8rem";
    //     else item.style.fontSize = "2.8rem";
        
    // })

    // item.addEventListener("mouseup" , function(){

    //     item.style.boxShadow = "0px 2px 4px 1px #98989883" ;
    //     if (window.outerWidth <= 700)  item.style.fontSize = "2rem";
    //     else item.style.fontSize = "3rem";
    // })
})

// Khardeli code for shadow

// const khardeli = document.querySelectorAll(".khardeli");

// for (let i = 0 ; i < khardeli.length ; i++){

//     khardeli[i].addEventListener("mousedown" , function(){

//         khardeli[i].style.boxShadow = "inset 0px 2px 2px 1px #fff" ;
        
//     }) ;

//     khardeli[i].addEventListener("mouseup" , function(){

//         khardeli[i].style.boxShadow = "0px 2px 2px 1px #98989883" ;
       
//     })
// }


// Ac button code

const ac = document.querySelector(".ac-key").addEventListener("click" , function(){

    show.innerText = 0 ;
   
})

// const gray = document.querySelectorAll(".gray");


// for (let i of gray) {

//     i.addEventListener("mousedown" , function(){

//         i.style.boxShadow = "inset 0px 2px 1px 2px #fff" ;
       
        
//     })

//     i.addEventListener("mouseup" , function(){

//         i.style.boxShadow = "0px 2px 2px 1px #98989883" ;
        
        
//     })
// } ;


// c Button code

const c = document.querySelector(".c-key").addEventListener("click" , function(){


    if (show.innerText.length == 1) return show.innerText = 0 ;
    
    const x = show.innerText.substring(0, show.innerText.length - 1) ;

    show.innerText = x ;
})


// calculate button code

const cal = document.querySelector(".calculate") ;


cal.addEventListener("click" , function(){

    let result = eval(show.innerText) ;
    result = separate (result);
    show.innerText = result ;
}) ;

// cal.addEventListener("mousedown" , function(){

//     if (window.outerWidth <= 700) cal.style.fontSize = "1.8rem";
//     else cal.style.fontSize = "2.8rem";
// }) ;

// cal.addEventListener("mouseup" , function(){

//     if (window.outerWidth <= 700) cal.style.fontSize = "2rem";
//     else cal.style.fontSize = "3rem";
// });



//function for jodasazi adad

function separate(Number) 
{
Number+= '';
Number= Number.replace(',', '');
x = Number.split('.');
y = x[0];
z= x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
while (rgx.test(y))
y= y.replace(rgx, '$1' + ',' + '$2');
return y+ z;
}

    
