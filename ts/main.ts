// Global WebGL context
var gl: WebGLRenderingContext | null;

window.onload = () => {
    const elem = <HTMLCanvasElement>document.getElementById("plotcanvas");
    gl = fetchGLContext(elem);
    if (!gl) return;

    gl.clearColor(0.0, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

function fetchGLContext(elem: HTMLCanvasElement): WebGLRenderingContext | null {
    if (!elem) {
        alert("Could not find canvas element `plotcanvas`");
        return null;
    }

    const ctx = elem.getContext("webgl") || elem.getContext("experimental-webgl");
    if (!ctx) {
        alert("Your browser does not support WebGL");
        return null;
    }

    return <WebGLRenderingContext>ctx;
}