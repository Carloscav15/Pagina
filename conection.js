const SUPABASE_URL = "TU_URL_SUPABASE";
const SUPABASE_KEY = "TU_ANON_PUBLIC_KEY";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;

    const { data, error } = await supabase
        .from("registros")   // nombre de tu tabla
        .insert([
            { nombre: nombre, fecha: fecha }
        ]);

    if(error){
        mensaje.innerText = "Error al guardar";
        console.log(error);
    }
    else{
        mensaje.innerText = "Datos guardados correctamente";
        form.reset();
    }

});
