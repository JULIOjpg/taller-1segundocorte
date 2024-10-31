function Nodo(nodo){
    var nodo = document.createElement(nodo)
    return nodo
}
function NodoConTexto(nodo, texto){
    var nodo = document.createElement(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}
function Imagen(rutaImagen, textoAlt, ancho, alto ) {

    var nodoImagen = Nodo("img")
    nodoImagen.src = rutaImagen
    nodoImagen.alt = textoAlt
    nodoImagen.width = ancho
    nodoImagen.height = alto
    agregarNodoABody(nodoImagen)
}
function crearNodoEnlace(texto,rutaEnlase,target){
    var enlase = Nodo("a")
    var nodoTexto = document.createTextNode(texto)
    enlase.href = rutaEnlase
    enlase.target = target
    enlase.appendChild(nodoTexto)
    return enlase
}
function Video(rutaVideo, ancho, alto, controles = true, autoplay = false) {
    var nodoVideo = document.createElement("video");

    
    nodoVideo.src = rutaVideo;
    nodoVideo.width = ancho;
    nodoVideo.height = alto;
    nodoVideo.controls = controles;
    nodoVideo.autoplay = autoplay;
    

    agregarNodoABody(nodoVideo); 
}

function agregarNodoABody(nodo) {
    document.body.appendChild(nodo)
}

function agregarNodoAContenedor (nodo, contenedor) {

    contenedor.appendChild(nodo)

}