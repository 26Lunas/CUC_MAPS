
//funcitons for services views
function viewsServices(){
    let cont_services = document.getElementById("cont-services");
    cont_services.classList.toggle("ocultar");

    let cont_cover_main = document.getElementById("cont_cover_main");
    cont_cover_main.classList.toggle("ocultar");
}
let btn_services = document.getElementById("btn_servicios");
btn_services.addEventListener("click", () => {
    viewsServices();
});
let btn_volver_main_contServices = document.getElementById("btn_volver_main_contServices");
btn_volver_main_contServices.addEventListener("click", () => {
        viewsServices();
    })


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

    });

//Mostrar mapa de ruta 1 b12
let tiempo_entrada1;
function mapaEntrada1(){
    let cont_entrada1 = document.getElementById("cont-img-ruta-1");
    cont_entrada1.classList.toggle("ocultar");
    let modal_content_entrada1 = document.getElementById("modal-content");
    modal_content_entrada1.classList.toggle("ocultar");
    let btn_close_b12 = document.getElementById("btn-close-b12");
    btn_close_b12.classList.toggle("ocultar");

    // tiempo_entrada1 = setTimeout(() => {
    //     mapaEntrada1()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada1);
    // }, 10500);
}
let btn_entrada_1 = document.getElementById("entrada1-bloque12");
btn_entrada_1.addEventListener("click", () => {
    mapaEntrada1()
});
let btn_close_b12 = document.getElementById("btn-close-b12");
btn_close_b12.addEventListener("click", () => {
    mapaEntrada1()
});

//Mostrar mapa de ruta 2 b12
let tiempo_entrada2;
function mapaEntrada2(){
    let cont_entrada2 = document.getElementById("cont-img-ruta-2");
    cont_entrada2.classList.toggle("ocultar");
    let modal_content_entrada2 = document.getElementById("modal-content");
    modal_content_entrada2.classList.toggle("ocultar");
    let btn_close_b12 = document.getElementById("btn-close-2-b12");
    btn_close_b12.classList.toggle("ocultar");
    // tiempo_entrada2 = setTimeout(() => {
    //     mapaEntrada2()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada2);
    // }, 10500);
}
let btn_entrada_2 = document.getElementById("entrada2-bloque12");
btn_entrada_2.addEventListener("click", () => {
    mapaEntrada2()
});
let btn_close_2_b12 = document.getElementById("btn-close-2-b12");
btn_close_2_b12.addEventListener("click", () => {
    mapaEntrada2()
});


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

});


//Mostrar mapa de ruta 1 b11
let tiempo_entrada1_b11;
function mapaEntrada1_b11(){
    let cont_entrada1_b11 = document.getElementById("cont-img-ruta-1-b11");
    cont_entrada1_b11.classList.toggle("ocultar");
    let modal_content_entrada1 = document.getElementById("modal-content-b11");
    modal_content_entrada1.classList.toggle("ocultar");

    let btn_close_b11 = document.getElementById("btn-close-1-b11");
    btn_close_b11.classList.toggle("ocultar");

    // tiempo_entrada1_b11 = setTimeout(() => {
    //     mapaEntrada1_b11()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada1_b11);
    // }, 10500);
}
let btn_entrada_1_b11 = document.getElementById("entrada1-bloque11");
btn_entrada_1_b11.addEventListener("click", () => {
    mapaEntrada1_b11()
});
let btn_close_1_b11 = document.getElementById("btn-close-1-b11");
btn_close_1_b11.addEventListener("click", () => {
    mapaEntrada1_b11()
});

//Mostrar mapa de ruta 2 b11
let tiempo_entrada2_b11;
function mapaEntrada2_b11(){
    let cont_entrada2 = document.getElementById("cont-img-ruta-2-b11");
    cont_entrada2.classList.toggle("ocultar");
    let modal_content_entrada2 = document.getElementById("modal-content-b11");
    modal_content_entrada2.classList.toggle("ocultar");

    let btn_close_2_b11 = document.getElementById("btn-close-2-b11");
    btn_close_2_b11.classList.toggle("ocultar");
    // tiempo_entrada2 = setTimeout(() => {
    //     mapaEntrada2_b11()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada2_b11);
    // }, 10500);
}
let btn_entrada_2_b11 = document.getElementById("entrada2-bloque11");
btn_entrada_2_b11.addEventListener("click", () => {
    mapaEntrada2_b11();
});
let btn_close_2_b11 = document.getElementById("btn-close-2-b11");
btn_close_2_b11.addEventListener("click", () => {
    mapaEntrada2_b11()
});

//END


//Block 8
let btn_block_8 = document.getElementById("boton-8");
    btn_block_8.addEventListener("click", () => {
        viewBlock8();
    });
function viewBlock8(){
    let cont_block_8 = document.getElementById("cont_block-8");
        cont_block_8.classList.toggle("ocultar");

    let cont_view_blcks = document.getElementById("cont_view_blocks");
    cont_view_blcks.classList.toggle("ocultar");
}
let btn_volver_contViewBlocks8 = document.getElementById("btn_volver_contViewBlocks-8");
btn_volver_contViewBlocks8.addEventListener("click", () => {
   viewBlock8();

})

//Mostrar mapa de ruta 1 b8
let tiempo_entrada1_b8;
function mapaEntrada1_b8(){
    let cont_entrada1_b8 = document.getElementById("cont-img-ruta-1-b8");
    cont_entrada1_b8.classList.toggle("ocultar");
    let modal_content_entrada1 = document.getElementById("modal-content-b8");
    modal_content_entrada1.classList.toggle("ocultar");

    let btn_close_1_b8 = document.getElementById("btn-close-1-b8");
    btn_close_1_b8.classList.toggle("ocultar");
    // tiempo_entrada1_b8 = setTimeout(() => {
    //     mapaEntrada1_b8()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada1_b8);
    // }, 10500);
}
let btn_entrada_1_b8 = document.getElementById("entrada1-bloque8");
btn_entrada_1_b8.addEventListener("click", () => {
    mapaEntrada1_b8()
});
let btn_close_1_b8 = document.getElementById("btn-close-1-b8");
btn_close_1_b8.addEventListener("click", () => {
    mapaEntrada1_b8()
});


//Mostrar mapa de ruta 2 b8
let tiempo_entrada2_b8;
function mapaEntrada2_b8(){
    let cont_entrada2 = document.getElementById("cont-img-ruta-2-b8");
    cont_entrada2.classList.toggle("ocultar");
    let modal_content_entrada2 = document.getElementById("modal-content-b8");
    modal_content_entrada2.classList.toggle("ocultar");

    let btn_close_2_b8 = document.getElementById("btn-close-2-b8");
    btn_close_2_b8.classList.toggle("ocultar");
    // tiempo_entrada2_b8= setTimeout(() => {
    //     mapaEntrada2_b8()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada2_b8);
    // }, 10500);
}
let btn_entrada_2_b8 = document.getElementById("entrada2-bloque8");
btn_entrada_2_b8.addEventListener("click", () => {
    mapaEntrada2_b8();
});
let btn_close_2_b8 = document.getElementById("btn-close-2-b8");
btn_close_2_b8.addEventListener("click", () => {
    mapaEntrada2_b8()
});
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

//Mostrar mapa de ruta 1 b7
let tiempo_entrada1_b7;
function mapaEntrada1_b7(){
    let cont_entrada1_b7 = document.getElementById("cont-img-ruta-1-b7");
    cont_entrada1_b7.classList.toggle("ocultar");
    let modal_content_entrada1 = document.getElementById("modal-content-b7");
    modal_content_entrada1.classList.toggle("ocultar");

    let btn_close_1_b7 = document.getElementById("btn-close-1-b7");
    btn_close_1_b7.classList.toggle("ocultar");
    // tiempo_entrada1_b7 = setTimeout(() => {
    //     mapaEntrada1_b7()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada1_b7);
    // }, 10500);
}
let btn_entrada_1_b7 = document.getElementById("entrada1-bloque7");
btn_entrada_1_b7.addEventListener("click", () => {
    mapaEntrada1_b7()
});
let btn_close_1_b7 = document.getElementById("btn-close-1-b7");
btn_close_1_b7.addEventListener("click", () => {
    mapaEntrada1_b7()
});


//Mostrar mapa de ruta 2 b7
let tiempo_entrada2_b7;
function mapaEntrada2_b7(){
    let cont_entrada2 = document.getElementById("cont-img-ruta-2-b7");
    cont_entrada2.classList.toggle("ocultar");
    let modal_content_entrada2 = document.getElementById("modal-content-b7");
    modal_content_entrada2.classList.toggle("ocultar");

    let btn_close_2_b7 = document.getElementById("btn-close-2-b7");
    btn_close_2_b7.classList.toggle("ocultar");
    // tiempo_entrada2_b7= setTimeout(() => {
    //     mapaEntrada2_b7()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada2_b7);
    // }, 10500);
}
let btn_entrada_2_b7 = document.getElementById("entrada2-bloque7");
btn_entrada_2_b7.addEventListener("click", () => {
    mapaEntrada2_b7();
});
let btn_close_2_b7 = document.getElementById("btn-close-2-b7");
btn_close_2_b7.addEventListener("click", () => {
    mapaEntrada2_b7()
});
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

//Mostrar mapa de ruta 1 b5
let tiempo_entrada1_b5;
function mapaEntrada1_b5(){
    let cont_entrada1_b5 = document.getElementById("cont-img-ruta-1-b5");
    cont_entrada1_b5.classList.toggle("ocultar");
    let modal_content_entrada1 = document.getElementById("modal-content-b5");
    modal_content_entrada1.classList.toggle("ocultar");

    let btn_close_1_b5 = document.getElementById("btn-close-1-b5");
    btn_close_1_b5.classList.toggle("ocultar");

    // tiempo_entrada1_b5 = setTimeout(() => {
    //     mapaEntrada1_b5()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada1_b5);
    // }, 10500);
}
let btn_entrada_1_b5 = document.getElementById("entrada1-bloque5");
btn_entrada_1_b5.addEventListener("click", () => {
    mapaEntrada1_b5()
});
let btn_close_1_b5 = document.getElementById("btn-close-1-b5");
btn_close_1_b5.addEventListener("click", () => {
    mapaEntrada1_b5()
});
//Mostrar mapa de ruta 2 b5
let tiempo_entrada2_b5;
function mapaEntrada2_b5(){
    let cont_entrada2 = document.getElementById("cont-img-ruta-2-b5");
    cont_entrada2.classList.toggle("ocultar");
    let modal_content_entrada2 = document.getElementById("modal-content-b5");
    modal_content_entrada2.classList.toggle("ocultar");

    let btn_close_2_b5 = document.getElementById("btn-close-2-b5");
    btn_close_2_b5.classList.toggle("ocultar");
    // tiempo_entrada2_b5= setTimeout(() => {
    //     mapaEntrada2_b5()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada2_b5);
    // }, 10500);
}
let btn_entrada_2_b5 = document.getElementById("entrada2-bloque5");
btn_entrada_2_b5.addEventListener("click", () => {
    mapaEntrada2_b5();
});
let btn_close_2_b5 = document.getElementById("btn-close-2-b5");
btn_close_2_b5.addEventListener("click", () => {
    mapaEntrada2_b5()
});



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

});


//Mostrar mapa de ruta 1 b2
let tiempo_entrada1_b2;
function mapaEntrada1_b2(){
    let cont_entrada1_b2 = document.getElementById("cont-img-ruta-1-b2");
    cont_entrada1_b2.classList.toggle("ocultar");
    let modal_content_entrada1 = document.getElementById("modal-content-b2");
    modal_content_entrada1.classList.toggle("ocultar");

    let btn_close_1_b2 = document.getElementById("btn-close-1-b2");
    btn_close_1_b2.classList.toggle("ocultar");

    // tiempo_entrada1_b2 = setTimeout(() => {
    //     mapaEntrada1_b2()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada1_b2);
    // }, 10200);
}
let btn_entrada_1_b2 = document.getElementById("entrada1-bloque2");
btn_entrada_1_b2.addEventListener("click", () => {
    mapaEntrada1_b2()
});
let btn_close_1_b2 = document.getElementById("btn-close-1-b2");
btn_close_1_b2.addEventListener("click", () => {
    mapaEntrada1_b2()
});
//Mostrar mapa de ruta 2 b2
let tiempo_entrada2_b2;
function mapaEntrada2_b2(){
    let cont_entrada2 = document.getElementById("cont-img-ruta-2-b2");
    cont_entrada2.classList.toggle("ocultar");
    let modal_content_entrada2 = document.getElementById("modal-content-b2");
    modal_content_entrada2.classList.toggle("ocultar");

    let btn_close_2_b2 = document.getElementById("btn-close-2-b2");
    btn_close_2_b2.classList.toggle("ocultar");

    // tiempo_entrada2_b2= setTimeout(() => {
    //     mapaEntrada2_b2()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada2_b2);
    // }, 10200);
}
let btn_entrada_2_b2 = document.getElementById("entrada2-bloque2");
btn_entrada_2_b2.addEventListener("click", () => {
    mapaEntrada2_b2();
});
let btn_close_2_b2 = document.getElementById("btn-close-2-b2");
btn_close_2_b2.addEventListener("click", () => {
    mapaEntrada2_b2();
});


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


//Mostrar mapa de ruta 1 b1
let tiempo_entrada1_b1;
function mapaEntrada1_b1(){
    let cont_entrada1_b1 = document.getElementById("cont-img-ruta-1-b1");
    cont_entrada1_b1.classList.toggle("ocultar");
    let modal_content_entrada1 = document.getElementById("modal-content-b1");
    modal_content_entrada1.classList.toggle("ocultar");

    let btn_close_1_b1 = document.getElementById("btn-close-1-b1");
    btn_close_1_b1.classList.toggle("ocultar");


//     tiempo_entrada1_b1 = setTimeout(() => {
//         mapaEntrada1_b1()
//     }, 10000);
    
//     setTimeout(() => {
//         clearTimeout(tiempo_entrada1_b1);
//     }, 10200);
 }
let btn_entrada_1_b1 = document.getElementById("entrada1-bloque1");
btn_entrada_1_b1.addEventListener("click", () => {
    mapaEntrada1_b1()
});
let btn_close_1_b1 = document.getElementById("btn-close-1-b1");
btn_close_1_b1.addEventListener("click", () => {
    mapaEntrada1_b1()
});
//Mostrar mapa de ruta 2 b1
let tiempo_entrada2_b1;
function mapaEntrada2_b1(){
    let cont_entrada2 = document.getElementById("cont-img-ruta-2-b1");
    cont_entrada2.classList.toggle("ocultar");
    let modal_content_entrada2 = document.getElementById("modal-content-b1");
    modal_content_entrada2.classList.toggle("ocultar");

    let btn_close_2_b1 = document.getElementById("btn-close-2-b1");
    btn_close_2_b1.classList.toggle("ocultar");

    // tiempo_entrada2_b1= setTimeout(() => {
    //     mapaEntrada2_b1()
    // }, 10000);
    
    // setTimeout(() => {
    //     clearTimeout(tiempo_entrada2_b1);
    // }, 10200);
}
let btn_entrada_2_b1 = document.getElementById("entrada2-bloque1");
btn_entrada_2_b1.addEventListener("click", () => {
    mapaEntrada2_b1();
});
let btn_close_2_b1 = document.getElementById("btn-close-2-b1");
btn_close_2_b1.addEventListener("click", () => {
    mapaEntrada2_b1();
});


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