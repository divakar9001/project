var a = Math;
        var jinput = document.querySelectorAll('h1,input,button');
        console.log(jinput);
        var otp;
        // var salary = [10,80,50,60,30,20,40,50,70,20,10,50]; // not work on array only number
        // console.log(a);

        // var c = a.min(salary);

        // console.log(c);
        // var d = a.min(10,20,60,50,40,30,80);
        // console.log(d);


        jinput[2].addEventListener('click', () => {
           otp = parseInt(a.random(948449) * 90000) + 100000;
            console.log(otp);
            jinput[1].value = otp;
        })

        jinput[3].addEventListener('click',()=>{
            alert("opt are submited");
        })