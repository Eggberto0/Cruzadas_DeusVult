
    function verificar() {
        var registradores = letra46.value + letra47.value + letra48.value + letra49.value + letra50.value + letra51.value + letra52.value + letra53.value + letra54.value + letra55.value + letra56.value + letra57.value + letra58.value;

        var i = 1;

        if (registradores.toLowerCase() == "registradores") {
            while (i <= 13) {

                document.getElementById(`letra${i + 45}`).style.border = "#00ff00 2px solid"
                i++;
            }
        } else {
            while (i <= 13) {
                document.getElementById(`letra${i + 45}`).style.border = "#ff0000 2px solid"
                i++;
            }
        }



        var ram = letra46.value + letra61.value + letra67.value;
        if (ram == "ram") {
            document.getElementById(`letra46`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra61`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra67`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra46`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra61`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra67`).style.border = "#ff0000 2px solid";

        }



        var rom = letra65.value + letra66.value + letra67.value;
        if (rom == "rom") {
            document.getElementById(`letra65`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra66`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra67`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra65`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra66`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra67`).style.border = "#ff0000 2px solid";
        }


        var eprom = letra45.value + letra60.value + letra65.value + letra70.value + letra75.value;
        if (eprom == "eprom") {
            document.getElementById(`letra45`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra60`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra65`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra70`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra75`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra45`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra60`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra65`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra70`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra75`).style.border = "#ff0000 2px solid";
        }




        var i7 = letra49.value + letra62.value;

        if (i7 == "i7") {
            document.getElementById(`letra49`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra62`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra49`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra62`).style.border = "#ff0000 2px solid";
        }



        var quadcore = letra1.value + letra2.value + letra3.value + letra12.value + letra20.value + letra23.value + letra41.value + letra47.value;

        if (quadcore == "quadcore") {
            document.getElementById(`letra1`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra2`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra3`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra12`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra20`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra23`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra41`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra47`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra1`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra2`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra3`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra12`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra20`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra23`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra41`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra47`).style.border = "#ff0000 2px solid";
        }

        var dualcore = letra24.value + letra42.value + letra53.value + letra63.value + letra71.value + letra76.value + letra77.value + letra86.value

        if (dualcore == "dualcore") {
            document.getElementById(`letra24`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra42`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra53`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra63`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra71`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra76`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra77`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra86`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra24`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra42`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra53`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra63`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra71`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra76`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra77`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra86`).style.border = "#ff0000 2px solid";
        }


        var cpu = letra71.value + letra72.value + letra73.value
        if (cpu == "cpu") {

            document.getElementById(`letra71`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra72`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra73`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra71`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra72`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra73`).style.border = "#ff0000 2px solid";
        }


        var threads = letra83.value + letra84.value + letra85.value + letra86.value + letra87.value + letra88.value + letra89.value
        if (threads == "threads") {
            i = 1;
            while (i <= 6) {
                document.getElementById(`letra${i + 82}`).style.border = "#00ff00 2px solid";
                i++;
            }
        } else {
            i = 1;
            while (i <= 7) {
                document.getElementById(`letra${i + 82}`).style.border = "#ff0000 2px solid";
                i++;
            }
        }


        var cs = letra78.value + letra89.value;

        if (cs == "cs") {

            document.getElementById(`letra78`).style.border = "#00ff00 2px solid";
            document.getElementById(`letra89`).style.border = "#00ff00 2px solid";
        } else {
            document.getElementById(`letra78`).style.border = "#ff0000 2px solid";
            document.getElementById(`letra89`).style.border = "#ff0000 2px solid";
        }

        var cache = letra78.value + letra79.value + letra80.value + letra81.value + letra82.value;

        if (cache == "cache") {
            i = 1;
            while (i <= 5) {

                document.getElementById(`letra${i + 77}`).style.border = "#00ff00 2px solid";
                i++
            }
        } else {

            i = 1;
            while (i <= 5) {

                document.getElementById(`letra${i + 77}`).style.border = "#ff0000 2px solid";
                i++
            }
        }
        letra1

        var databus = letra4.value + letra5.value + letra6.value + letra7.value + letra9.value + letra10.value + letra11.value;

        if (databus == 'databus') {
            i = 1;
            while (i <= 8) {
                document.getElementById(`letra${i + 3}`).style.border = "#00ff00 2px solid";
                i++;
            }
        } else {
            i = 1;
            while (i <= 8) {
                document.getElementById(`letra${i + 3}`).style.border = "#ff0000 1px solid";
                i++;
            }
        }

        var ula = letra10.value + letra14.value + letra18.value

        if (ula == 'ula') {
            document.getElementById(`letra${10}`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra${14}`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra${18}`).style.border = "#00ff00 1px solid";
        } else {
            document.getElementById(`letra${10}`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra${14}`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra${18}`).style.border = "#ff0000 1px solid";
        }



        var memoria = letra25.value + letra26.value + letra27.value + letra28.value + letra29.value + letra30.value + letra31.value + letra33.value+ letra34.value+ letra36.value+ letra37.value+ letra38.value + letra39.value + letra40.value;

        if (memoria == 'memoriademassa') {
            i = 1;
            while (i <= 16) {
                document.getElementById(`letra${i + 24}`).style.border = "#00ff00 2px solid";
                i++;
            }
        } else {
            i = 1;
            while (i <= 16) {
                document.getElementById(`letra${i + 24}`).style.border = "#ff0000 2px solid";
                i++;
            }
        }

        var addressbus = letra5.value + letra13.value + letra17.value + letra21.value + letra26.value + letra43.value + letra58.value + letra64.value + letra69.value + letra74.value
        
        if(addressbus == "addressbus"){
            document.getElementById(`letra5`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra13`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra17`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra21`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra26`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra43`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra58`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra64`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra69`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra74`).style.border = "#00ff00 1px solid";
        }else{
            document.getElementById(`letra5`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra13`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra17`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra21`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra26`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra43`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra58`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra64`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra69`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra74`).style.border = "#ff0000 1px solid";

        }

        // var flash = letra15.value + letra19.value + letra22.value + letra40.value + letra44.value + letra59.value

        // if(flash == 'flash'){

        //     document.getElementById(`letra15`).style.border = "#00ff00 1px solid";
        //     document.getElementById(`letra19`).style.border = "#00ff00 1px solid";
        //     document.getElementById(`letra22`).style.border = "#00ff00 1px solid";
        //     document.getElementById(`letra40`).style.border = "#00ff00 1px solid";
        //     document.getElementById(`letra44`).style.border = "#00ff00 1px solid";
        //     document.getElementById(`letra59`).style.border = "#00ff00 1px solid";

        // }else{
        //     document.getElementById(`letra15`).style.border = "#ff0000 1px solid";
        //     document.getElementById(`letra19`).style.border = "#ff0000 1px solid";
        //     document.getElementById(`letra22`).style.border = "#ff0000 1px solid";
        //     document.getElementById(`letra40`).style.border = "#ff0000 1px solid";
        //     document.getElementById(`letra44`).style.border = "#ff0000 1px solid";
        //     document.getElementById(`letra59`).style.border = "#ff0000 1px solid";
        // }

        var i5 = letra30.value + letra44.value;

        if(i5 == "i5"){
            document.getElementById(`letra30`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra44`).style.border = "#00ff00 1px solid";
        }else{
            document.getElementById(`letra30`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra44`).style.border = "#ff0000 1px solid";
        }

        var dma = letra19.value + letra22.value + letra40.value;

        if(dma == "dma"){
            document.getElementById(`letra19`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra22`).style.border = "#00ff00 1px solid";
            document.getElementById(`letra40`).style.border = "#00ff00 1px solid";
        }else{
            document.getElementById(`letra19`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra22`).style.border = "#ff0000 1px solid";
            document.getElementById(`letra40`).style.border = "#ff0000 1px solid";
        }
    }