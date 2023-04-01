
// funcitons for block views
function viewBlocks(){
    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");

    let cont_cover_main = document.getElementById("cont_cover_main");
    cont_cover_main.classList.toggle("ocultar");
    
}
let btn_main = document.getElementById("btn_main");
    btn_main.addEventListener("click", () =>{
        // console.log("click...")
        viewBlocks();
       
    })

let btn_volver_main_contViewBlocks = document.getElementById("btn_volver_main_contViewBlocks");
    btn_volver_main_contViewBlocks.addEventListener("click", () => {
       viewBlocks()

    })
//END

//Block 12
let btn_block_12 = document.getElementById("boton-12");
    btn_block_12.addEventListener("click", () => {
        viewBlock12();
    });

function viewBlock12(){
    let cont_block_12 = document.getElementById("cont_block-12");
        cont_block_12.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocks = document.getElementById("btn_volver_contViewBlocks");
    btn_volver_contViewBlocks.addEventListener("click", () => {
       viewBlock12();

    })

//END