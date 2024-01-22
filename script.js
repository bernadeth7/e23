function renderDiv(){
    // render the div multiple times
    for (i=1; i<4; i++){
        cardClass="card mb-2";
        switch(i){
            case 1:
                cardClass+=" bg-primary";
                unitLabel="Grams";
                unitAbrev="gm";
                break;
            case 2:
                cardClass+=" bg-success";
                unitLabel="Kilograms";
                unitAbrev="kg";
                break;
            case 3:
                cardClass+=" bg-danger";
                unitLabel="Ounce";
                unitAbrev="oz";
                break;
            default:
                cardClass="";
            }
        document.write(`
            <div class="${cardClass}">
                <div class="card-body">
                    <h4>${unitLabel}</h4>
                    <div id="${unitAbrev}Output">Output</div>
                </div>
            </div>     
        `);
    }
    document.getElementById("result").style.visibility="hidden";
    document.getElementById("lbsInput").addEventListener(
        "input",
        function(e){
            let lbs=e.target.value;
            document.getElementById("result").style.visibility="visible";
            document.getElementById("gmOutput").innerHTML=lbs/0.00220462;
            document.getElementById("kgOutput").innerHTML=lbs/2.20462;
            document.getElementById("ozOutput").innerHTML=lbs*16;
        }

    )
    ;

};

// <div class="bg-primary">
//             <div class="card-body">
//                 <h4>Grams</h4>
//                 <div id="gmOutput">Output</div>
//             </div>
//         </div>
// <!-- KG -->
//         <div class="bg-success">
//             <div class="card-body">
//                 <h4>Kilograms</h4>
//                 <div id="kgOutput">Output</div>
//             </div>
//         </div>
//         <!-- Ounces -->
//         <div class="bg-danger">
//             <div class="card-body">
//                 <h4>Ounces</h4>
//                 <div id="ozOutput">Output</div>
//             </div>
//         </div> 