$(window).on('load', function () {
    if ($(window).width() < 1051) {
        $('#tpouterdiv').empty();
        if ($('#tpouterdiv').is(':empty')) {
        var menu = document.getElementById("tpouterdiv");
        $(menu).addClass('d-flex justify-content-center')
        var tpdiv=document.createElement("div");
        $(tpdiv).attr('id', "tpinnerdiv");
        $(tpdiv).addClass(' d-flex flex-column mt-3 ') ;
        var header=document.createElement('h1');
        $(header).addClass('d-flex justify-content-center')
        header.innerHTML="Training Programmes";
        menu.appendChild(tpdiv);
        tpdiv.appendChild(header);
        var large=' <div class="collapse-content"> <div class="collapse1" id="instagram"> <a class="instagram" href="#instagram" >Support For Caregivers</a > <div class="content"> <div class="inner-content"> <h3>Support For Caregivers</h3> Taking care of loved ones with special needs can be exhausting, frustrating and lonely. Recent studies have shown that caregivers often suffer from burn out <br/> <br/> Loving Mind’s support group are designed and run by counsellors who themselves are caregivers of loved ones with special needs.<br/><br/>We understand the difficulties that caregivers face and our support group offer practical advice and support for our fellow caregivers. </div> </div> </div> <div class="collapse1" id="twitter"> <a class="twitter" href="#twitter" ></i> Parenting Seminars</a > <div class="content"> <div class="inner-content"> <h3>Twitter</h3> Communicating with your children can be difficult. <br/><br/> Our parenting seminars covers the following topics: <br/> <br/>  1.Ways to effectively communicate with your children <br/> <br/> 2.Instilling healthy methods of discipline <br/> <br/> 3.Bonding with your children in the era of Social Media </div> </div> </div> <div class="collapse1" id="dribbble"> <a class="dribbble" href="#dribbble" > Marriage Preparation Workshops</a > <div class="content"> <div class="inner-content"> <h3>Marriage Preparation Workshops</h3> Marriage is a lifelong commitment and building a happy and strong marriage requires commitment, effort, and strong resolve. <br/><br/> Participating in a marriage preparation workshop will help to build a strong foundation in your marital journey together. <br/><br/> Our workshop was designed after many years of marital counselling and understanding the issues faced by both newlyweds and couples facing marital problems. </div> </div> </div> <div class="collapse1" id="youtube"> <a class="youtube" href="#youtube" > Signpost Programme</a > <div class="content"> <div class="inner-content"> <h3>Signpost Programme</h3> Our signposts programmes help families and parents develop strategies to better manage and prevent difficult behaviours in children. <br/> <br/> Especially children with developmental delays. <br/> <br/> Our programme encourages appropriate behaviours in children, replacing difficult behaviours with a more positive behaviours and instilling children with new skills. </div> </div> </div> </div>';
        $(tpdiv).append(large);
    

    }
}
    else{
        $('#tpouterdiv').empty();
        var odiv= document.getElementById("tpouterdiv");
        $(odiv).removeClass('d-flex justify-content-center');
        var check = document.getElementById("tpinnerdiv");
        if (check == null) {
        var menu = document.getElementById("tpouterdiv");
        var col4=document.createElement("div");
        $(col4).attr('id', "tpinnerdiv");
        $(col4).addClass('col-4 d-flex flex-column mt-4 justify-content-center');
        var btn1div =document.createElement("div");
        var btn2div =document.createElement("div");
        var btn3div =document.createElement("div");
        var btn4div =document.createElement("div");
        $(btn1div).addClass('d-flex  justify-content-center');
        $(btn2div).addClass('d-flex  justify-content-center mt-5');
        $(btn3div).addClass('d-flex  justify-content-center mt-5');
        $(btn4div).addClass('d-flex  justify-content-center mt-5');
        var btn1image=document.createElement("INPUT");
        var btn2image=document.createElement("INPUT");
        var btn3image=document.createElement("INPUT");
        var btn4image=document.createElement("INPUT");
        $(btn1image).attr('id', "btn1");
        $(btn2image).attr('id', "btn2");
        $(btn3image).attr('id', "btn3");
        $(btn4image).attr('id', "btn4");
        $(btn1image).attr('type', "image");
        $(btn2image).attr('type', "image");
        $(btn3image).attr('type', "image");
        $(btn4image).attr('type', "image");
        $(btn1image).attr('onclick', "changeTP(this.id)");
        $(btn2image).attr('onclick', "changeTP(this.id)");
        $(btn3image).attr('onclick', "changeTP(this.id)");
        $(btn4image).attr('onclick', "changeTP(this.id)");
        $(btn1image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        $(btn2image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        $(btn3image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        $(btn4image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        btn1image.src="Images/supportforcaregivers.png";
        btn2image.src="Images/ParentingSeminars.png";
        btn3image.src="Images/MarriagePrep.png";
        btn4image.src="Images/signpostprog.png";
        menu.appendChild(col4);
        col4.appendChild(btn1div);
        col4.appendChild(btn2div);
        col4.appendChild(btn3div);
        col4.appendChild(btn4div);
        btn1div.appendChild(btn1image);
        btn2div.appendChild(btn2image);
        btn3div.appendChild(btn3image);
        btn4div.appendChild(btn4image);
        var col8=document.createElement("div");
        $(col8).addClass('col-8');
        var col8flex=document.createElement("div");
        $(col8flex).addClass('d-flex flex-column');
        var tpheader=document.createElement("h1");
        tpheader.innerHTML="Training Programmes";
        var tpsummarydiv=document.createElement("div");
        $(tpsummarydiv).addClass('profileinfo pt-3');
        tpsummarydiv.innerHTML="Loving Mind has various programmes targeted to different segments of society. Each programme can be tailored to the organisation’s requirements. ";
        var tpsubmenu=document.createElement("div");
        $(tpsubmenu).addClass('pt-3');
        tpsubmenu.innerHTML="*Click the menu to the left to read about different programmes. ";
        var tpcontentheader=document.createElement("h2");
        $(tpcontentheader).addClass('pt-4');
        $(tpcontentheader).attr('id', "contentheader");
        tpcontentheader.innerHTML="Support For Cavegivers";
        var content1=document.createElement("div");
        $(content1).addClass('pt-3 profileinfo');
        $(content1).attr('id', "content1");
        content1.innerHTML=" Taking care of loved ones with special needs can be exhausting, frustrating and lonely. Recent studies have shown that caregivers often suffer from burn out.";
        var content2=document.createElement("div");
        $(content2).addClass('pt-3 profileinfo');
        $(content2).attr('id', "content2");
        content2.innerHTML=" Taking care of loved ones with special needs can be exhausting, frustrating and lonely. Recent studies have shown that caregivers often suffer from burn out.";
        var content3=document.createElement("div");
        $(content3).addClass('pt-3 profileinfo');
        $(content3).attr('id', "content3");
        content3.innerHTML=" We understand the difficulties that caregivers face and our support group offer practical advice and support for our fellow caregivers.";
        menu.appendChild(col8);
        col8.appendChild(col8flex);
        col8flex.appendChild(tpheader);
        col8flex.appendChild(tpsummarydiv);
        col8flex.appendChild(tpsubmenu);
        col8flex.appendChild(tpcontentheader);
        col8flex.appendChild(content1);
        col8flex.appendChild(content2);
        col8flex.appendChild(content3);




        








        }}

});

function changeTP(clicked_id) {
    switch (clicked_id) {
        case "btn1":
            document.getElementById("contentheader").innerHTML="Support For Cavegivers";
            document.getElementById("content1").innerHTML="Taking care of loved ones with special needs can be exhausting, frustrating and lonely. Recent studies have shown that caregivers often suffer from burn out.";
            document.getElementById("content2").innerHTML="Loving Mind’s support group are designed and run by counsellors who themselves are caregivers of loved ones with special needs.";
            document.getElementById("content3").innerHTML="We understand the difficulties that caregivers face and our support group offer practical advice and support for our fellow caregivers.";
            break;
        case "btn2":
            document.getElementById("contentheader").innerHTML="Parenting Seminars";
            document.getElementById("content1").innerHTML="Communicating with your children can be difficult. <br/> <br/>Our parenting seminars covers the following topics:";
            document.getElementById("content2").innerHTML="1.Ways to effectively communicate with your children ";
            document.getElementById("content3").innerHTML="2.Instilling healthy methods of discipline <br/><br/>3.Bonding with your children in the era of Social Media ";
            break;
        case "btn3":
            document.getElementById("contentheader").innerHTML="Marriage Preparation Workshops";
            document.getElementById("content1").innerHTML="Marriage is a lifelong commitment and building a happy and strong marriage requires commitment, effort, and strong resolve.";
            document.getElementById("content2").innerHTML="Participating in a marriage preparation workshop will help to build a strong foundation in your marital journey together.";
            document.getElementById("content3").innerHTML="Our workshop was designed after many years of marital counselling and understanding the issues faced by both newlyweds and couples facing marital problems. .";
            break;
        case "btn4":
            document.getElementById("contentheader").innerHTML="Signpost Programme";
            document.getElementById("content1").innerHTML="Our signposts programmes help families and parents develop strategies to better manage and prevent difficult behaviours in children. ";
            document.getElementById("content2").innerHTML="Especially children with developmental delays.";
            document.getElementById("content3").innerHTML=" Our programme encourages appropriate behaviours in children, replacing difficult behaviours with a more positive behaviours and instilling children with new skills. ";
            break;
        default:
        // code block
    }
}

$(window).on('resize', function ()  {
    if ($(window).width() < 1051) {
        $('#tpouterdiv').empty();
        if ($('#tpouterdiv').is(':empty')) {
        var menu = document.getElementById("tpouterdiv");
        $(menu).addClass('d-flex justify-content-center')
        var tpdiv=document.createElement("div");
        $(tpdiv).attr('id', "tpinnerdiv");
        $(tpdiv).addClass(' d-flex flex-column mt-3 ') ;
        var header=document.createElement('h1');
        $(header).addClass('d-flex justify-content-center')
        header.innerHTML="Training Programmes";
        menu.appendChild(tpdiv);
        tpdiv.appendChild(header);
        var large=' <div class="collapse-content"> <div class="collapse1" id="instagram"> <a class="instagram" href="#instagram" >Support For Caregivers</a > <div class="content"> <div class="inner-content"> <h3>Support For Caregivers</h3> Taking care of loved ones with special needs can be exhausting, frustrating and lonely. Recent studies have shown that caregivers often suffer from burn out <br/> <br/> Loving Mind’s support group are designed and run by counsellors who themselves are caregivers of loved ones with special needs.<br/><br/>We understand the difficulties that caregivers face and our support group offer practical advice and support for our fellow caregivers. </div> </div> </div> <div class="collapse1" id="twitter"> <a class="twitter" href="#twitter" ></i> Parenting Seminars</a > <div class="content"> <div class="inner-content"> <h3>Twitter</h3> Communicating with your children can be difficult. <br/><br/> Our parenting seminars covers the following topics: <br/> <br/>  1.Ways to effectively communicate with your children <br/> <br/> 2.Instilling healthy methods of discipline <br/> <br/> 3.Bonding with your children in the era of Social Media </div> </div> </div> <div class="collapse1" id="dribbble"> <a class="dribbble" href="#dribbble" > Marriage Preparation Workshops</a > <div class="content"> <div class="inner-content"> <h3>Marriage Preparation Workshops</h3> Marriage is a lifelong commitment and building a happy and strong marriage requires commitment, effort, and strong resolve. <br/><br/> Participating in a marriage preparation workshop will help to build a strong foundation in your marital journey together. <br/><br/> Our workshop was designed after many years of marital counselling and understanding the issues faced by both newlyweds and couples facing marital problems. </div> </div> </div> <div class="collapse1" id="youtube"> <a class="youtube" href="#youtube" > Signpost Programme</a > <div class="content"> <div class="inner-content"> <h3>Signpost Programme</h3> Our signposts programmes help families and parents develop strategies to better manage and prevent difficult behaviours in children. <br/> <br/> Especially children with developmental delays. <br/> <br/> Our programme encourages appropriate behaviours in children, replacing difficult behaviours with a more positive behaviours and instilling children with new skills. </div> </div> </div> </div>';
        $(tpdiv).append(large);
    

    }
}
    else{
        $('#tpouterdiv').empty();
        var odiv= document.getElementById("tpouterdiv");
        $(odiv).removeClass('d-flex justify-content-center');
        var check = document.getElementById("tpinnerdiv");
        if (check == null) {
        var menu = document.getElementById("tpouterdiv");
        var col4=document.createElement("div");
        $(col4).attr('id', "tpinnerdiv");
        $(col4).addClass('col-4 d-flex flex-column mt-4 justify-content-center');
        var btn1div =document.createElement("div");
        var btn2div =document.createElement("div");
        var btn3div =document.createElement("div");
        var btn4div =document.createElement("div");
        $(btn1div).addClass('d-flex  justify-content-center');
        $(btn2div).addClass('d-flex  justify-content-center mt-5');
        $(btn3div).addClass('d-flex  justify-content-center mt-5');
        $(btn4div).addClass('d-flex  justify-content-center mt-5');
        var btn1image=document.createElement("INPUT");
        var btn2image=document.createElement("INPUT");
        var btn3image=document.createElement("INPUT");
        var btn4image=document.createElement("INPUT");
        $(btn1image).attr('id', "btn1");
        $(btn2image).attr('id', "btn2");
        $(btn3image).attr('id', "btn3");
        $(btn4image).attr('id', "btn4");
        $(btn1image).attr('type', "image");
        $(btn2image).attr('type', "image");
        $(btn3image).attr('type', "image");
        $(btn4image).attr('type', "image");
        $(btn1image).attr('onclick', "changeTP(this.id)");
        $(btn2image).attr('onclick', "changeTP(this.id)");
        $(btn3image).attr('onclick', "changeTP(this.id)");
        $(btn4image).attr('onclick', "changeTP(this.id)");
        $(btn1image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        $(btn2image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        $(btn3image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        $(btn4image).attr('style', "max-width: 100%; height:auto; max-height: 150px;");
        btn1image.src="Images/supportforcaregivers.png";
        btn2image.src="Images/ParentingSeminars.png";
        btn3image.src="Images/MarriagePrep.png";
        btn4image.src="Images/signpostprog.png";
        menu.appendChild(col4);
        col4.appendChild(btn1div);
        col4.appendChild(btn2div);
        col4.appendChild(btn3div);
        col4.appendChild(btn4div);
        btn1div.appendChild(btn1image);
        btn2div.appendChild(btn2image);
        btn3div.appendChild(btn3image);
        btn4div.appendChild(btn4image);
        var col8=document.createElement("div");
        $(col8).addClass('col-8');
        var col8flex=document.createElement("div");
        $(col8flex).addClass('d-flex flex-column');
        var tpheader=document.createElement("h1");
        tpheader.innerHTML="Training Programmes";
        var tpsummarydiv=document.createElement("div");
        $(tpsummarydiv).addClass('profileinfo pt-3');
        tpsummarydiv.innerHTML="Loving Mind has various programmes targeted to different segments of society. Each programme can be tailored to the organisation’s requirements. ";
        var tpsubmenu=document.createElement("div");
        $(tpsubmenu).addClass('pt-3');
        tpsubmenu.innerHTML="*Click the menu to the left to read about different programmes. ";
        var tpcontentheader=document.createElement("h2");
        $(tpcontentheader).addClass('pt-4');
        $(tpcontentheader).attr('id', "contentheader");
        tpcontentheader.innerHTML="Support For Cavegivers";
        var content1=document.createElement("div");
        $(content1).addClass('pt-3 profileinfo');
        $(content1).attr('id', "content1");
        content1.innerHTML=" Taking care of loved ones with special needs can be exhausting, frustrating and lonely. Recent studies have shown that caregivers often suffer from burn out.";
        var content2=document.createElement("div");
        $(content2).addClass('pt-3 profileinfo');
        $(content2).attr('id', "content2");
        content2.innerHTML=" Taking care of loved ones with special needs can be exhausting, frustrating and lonely. Recent studies have shown that caregivers often suffer from burn out.";
        var content3=document.createElement("div");
        $(content3).addClass('pt-3 profileinfo');
        $(content3).attr('id', "content3");
        content3.innerHTML=" We understand the difficulties that caregivers face and our support group offer practical advice and support for our fellow caregivers.";
        menu.appendChild(col8);
        col8.appendChild(col8flex);
        col8flex.appendChild(tpheader);
        col8flex.appendChild(tpsummarydiv);
        col8flex.appendChild(tpsubmenu);
        col8flex.appendChild(tpcontentheader);
        col8flex.appendChild(content1);
        col8flex.appendChild(content2);
        col8flex.appendChild(content3);




        








        }






    }
})


    