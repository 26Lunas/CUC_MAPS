
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

//Block 11
let btn_block_11 = document.getElementById("boton-11");
    btn_block_11.addEventListener("click", () => {
        viewBlock11();
    });
function viewBlock11(){
    let cont_block_11 = document.getElementById("cont_block-11");
        cont_block_11.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocks11 = document.getElementById("btn_volver_contViewBlocks-11");
btn_volver_contViewBlocks11.addEventListener("click", () => {
   viewBlock11();

})
//END

//Block 7
let btn_block_7 = document.getElementById("boton-7");
    btn_block_7.addEventListener("click", () => {
        viewBlock7();
    });
function viewBlock7(){
    let cont_block_7 = document.getElementById("cont_block-7");
        cont_block_7.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocks7 = document.getElementById("btn_volver_contViewBlocks-7");
btn_volver_contViewBlocks7.addEventListener("click", () => {
   viewBlock7();

})
//END
//Block 5
let btn_block_5 = document.getElementById("boton-5");
    btn_block_5.addEventListener("click", () => {
        viewBlock5();
    });
function viewBlock5(){
    let cont_block_5 = document.getElementById("cont_block-5");
        cont_block_5.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocks5 = document.getElementById("btn_volver_contViewBlocks-5");
btn_volver_contViewBlocks5.addEventListener("click", () => {
   viewBlock5();

})
//END
//Block 2
let btn_block_2 = document.getElementById("boton-2");
    btn_block_2.addEventListener("click", () => {
        viewBlock2();
    });
function viewBlock2(){
    let cont_block_2 = document.getElementById("cont_block-2");
        cont_block_2.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocks2 = document.getElementById("btn_volver_contViewBlocks-2");
btn_volver_contViewBlocks2.addEventListener("click", () => {
   viewBlock2();

})
//END
//Block 1
let btn_block_1 = document.getElementById("boton-1");
    btn_block_1.addEventListener("click", () => {
        viewBlock1();
    });
function viewBlock1(){
    let cont_block_1 = document.getElementById("cont_block-1");
        cont_block_1.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocks1 = document.getElementById("btn_volver_contViewBlocks-1");
btn_volver_contViewBlocks1.addEventListener("click", () => {
   viewBlock1();

})
//END

//Block E
let btn_block_E = document.getElementById("boton-E");
    btn_block_E.addEventListener("click", () => {
        viewBlockE();
    });
function viewBlockE(){
    let cont_block_E = document.getElementById("cont_block-E");
        cont_block_E.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocksE = document.getElementById("btn_volver_contViewBlocks-E");
btn_volver_contViewBlocksE.addEventListener("click", () => {
   viewBlockE();

})
//END
//Block otros
let btn_block_otros = document.getElementById("boton-otros");
    btn_block_otros.addEventListener("click", () => {
        viewBlockotros();
    });
function viewBlockotros(){
    let cont_block_otros = document.getElementById("cont_block-otros");
        cont_block_otros.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocksotros = document.getElementById("btn_volver_contViewBlocks-otros");
btn_volver_contViewBlocksotros.addEventListener("click", () => {
   viewBlockotros();

})
//END