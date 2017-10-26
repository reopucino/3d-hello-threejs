window.onload = function() {
    //adding scene
    var scene = new THREE.Scene();

    //ading camera
    var camera = new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight, 0.1, 1000 );

    //settings renderer
    var renderer = new THREE.WebGLRenderer();

    // add lighting the scene
    var light = new THREE.PointLight( 0xFFFF00 );
    light.position.set( 10, 0, 10 );
    scene.add( light );

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0x000077, 1);

    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshLambertMaterial({color:0xFF0000});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.set( 0, 0, 10 );

    cube.rotation.x = .6;
    cube.rotation.y = .6;

    function render(){
        requestAnimationFrame(render);
        cube.rotation.x +=.01;

        renderer.render(scene, camera);

    }

    render();
}