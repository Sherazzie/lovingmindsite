


$(window).on('load', function () {
    if ($(window).width() < 1246) {
        $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14').removeClass('ml-13').addClass('text-justify');

    } else {
        $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14').removeClass('text-justify').addClass('ml-13');



    }

    if ($(window).width() < 835) {
        var check = document.getElementById("image750");
        if (check == null) {
        var menu = document.getElementById("elementchange");
        var maindiv = document.createElement("div");
        $(maindiv).attr('id', "image750");
        var divheader = document.createElement("div");
        var divheader2 = document.createElement("div");
        var c1=document.createElement("div");
        var c2=document.createElement("div");
        var c3=document.createElement("div");
        var c4=document.createElement("div");
        var c5=document.createElement("div");
        var contentheader = document.createElement("h1");
        var contentheader2 = document.createElement("h1");
        $(maindiv).addClass('col d-flex flex-column');

        $(contentheader).addClass('pb-4');
        $(contentheader2).addClass('pb-4');
        $(c1).addClass('profileinfo text-justify pb-4');
        $(c2).addClass('profileinfo text-justify pb-4');
        $(c3).addClass('profileinfo text-justify pb-4');
        $(c4).addClass('profileinfo text-justify pb-4');
        $(c5).addClass('profileinfo text-justify pb-4');
        contentheader.innerHTML = "A Managable Life";
        contentheader2.innerHTML = "A Hoilistic Life";
        $(c1).html("People go through different phases in life and have different experiences.");
        $(c2).html("Some experiences may be too overwhelming and difficult, and that’s where Loving Mind comes in.");
        $(c3).html("Our counsellors will work with you and together, we will work towards a more manageable life for you, your loved ones and your family.");
        $(c4).html("We aim to improve the lives of our clients through the three domains.");
        $(c5).html("Emotional, Mental and Physical, so that they can lead better lives.");
        var newimg = document.createElement("img");
        newimg.src = "Images/750menwalking.png";
        $(newimg).addClass('menwalking');
        $(newimg).addClass('d-flex justify-content-center');
        $(newimg).attr('id', "hikerimage750");
        menu.appendChild(maindiv);
        maindiv.appendChild(divheader);
        divheader.appendChild(contentheader);
        maindiv.appendChild(c1);
        maindiv.appendChild(c2);
        maindiv.appendChild(c3);
        maindiv.appendChild(divheader2);
        divheader2.appendChild(contentheader2);
        maindiv.appendChild(c4);
        maindiv.appendChild(c5);
        maindiv.appendChild(newimg);
        }   

    } else {
        var check = document.getElementById("hikerimage");
        if (check == null) {
            var newimg = document.createElement("img");
            newimg.src = "Images/walkingmen.png";
            $(newimg).addClass('menwalking');
            $(newimg).addClass('d-flex');
            $(newimg).attr('id', "hikerimage");

            var menu = document.getElementById("elementchange");
            menu.appendChild(newimg);

        }

    }
});




$(window).on('resize', function () {

    if ($(window).width() < 1246) {
        $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14').removeClass('ml-13').addClass('text-justify');

    } else {
        $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14').removeClass('text-justify').addClass('ml-13');
        



    }

    if ($(window).width() < 835) {
        var image = document.getElementById("hikerimage");
        image.remove();
        var check = document.getElementById("image750");
        if (check == null) {
        var menu = document.getElementById("elementchange");
        var maindiv = document.createElement("div");
        $(maindiv).attr('id', "image750");
        var divheader = document.createElement("div");
        var divheader2 = document.createElement("div");
        var c1=document.createElement("div");
        var c2=document.createElement("div");
        var c3=document.createElement("div");
        var c4=document.createElement("div");
        var c5=document.createElement("div");
        var contentheader = document.createElement("h1");
        var contentheader2 = document.createElement("h1");
        $(maindiv).addClass('col d-flex flex-column');
        $(divheader).addClass('profileinfo introstyles  pb-4');
        $(divheader2).addClass('profileinfo introstyles  pb-4');
        $(contentheader).addClass('pb-4');
        $(contentheader2).addClass('pb-4');
        $(c1).addClass('profileinfo text-justify pb-4');
        $(c2).addClass('profileinfo text-justify pb-4');
        $(c3).addClass('profileinfo text-justify pb-4');
        $(c4).addClass('profileinfo text-justify pb-4');
        $(c5).addClass('profileinfo text-justify pb-4');
        contentheader.innerHTML = "A Managable Life";
        contentheader2.innerHTML = "A Hoilistic Life";
        $(c1).html("People go through different phases in life and have different experiences.");
        $(c2).html("Some experiences may be too overwhelming and difficult, and that’s where Loving Mind comes in.");
        $(c3).html("Our counsellors will work with you and together, we will work towards a more manageable life for you, your loved ones and your family.");
        $(c4).html("We aim to improve the lives of our clients through the three domains.");
        $(c5).html("Emotional, Mental and Physical, so that they can lead better lives.");
        var newimg = document.createElement("img");
        newimg.src = "Images/750menwalking.png";
        $(newimg).addClass('menwalking');
        $(newimg).addClass('d-flex justify-content-center');
        $(newimg).attr('id', "hikerimage750");
        menu.appendChild(maindiv);
        maindiv.appendChild(divheader);
        divheader.appendChild(contentheader);
        maindiv.appendChild(c1);
        maindiv.appendChild(c2);
        maindiv.appendChild(c3);
        maindiv.appendChild(divheader2);
        divheader2.appendChild(contentheader2);
        maindiv.appendChild(c4);
        maindiv.appendChild(c5);
        maindiv.appendChild(newimg);
        }   

        


    } else {
        var image750 = document.getElementById("image750");
        image750.remove();
        var check = document.getElementById("hikerimage");
        if (check == null) {
            var newimg = document.createElement("img");
            newimg.src = "Images/walkingmen.png";
            $(newimg).addClass('menwalking');
            $(newimg).addClass('d-flex');
            $(newimg).attr('id', "hikerimage");

            var menu = document.getElementById("elementchange");
            menu.appendChild(newimg);

        }

    }



})