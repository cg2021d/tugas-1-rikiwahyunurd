function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');


    const object_leftnozzle = {
        left_part_color_1: [0.14, 0.27, 0.60],
        left_part1_a: [-0.67, 0.3],
        left_part1_b: [-0.4, 0.3],
        left_part1_c: [-0.4, 0.25],
        left_part1_d: [-0.67, 0.25],

        left_part_color_2: [0.1, 0.18, 0.39],        
        left_part2_a: [-0.6, 0.25],
        left_part2_b: [-0.47, 0.25],
        left_part2_c: [-0.47, 0.21],
        left_part2_d: [-0.6, 0.21],

        left_part_color_3: [0.14, 0.27, 0.60],
        left_part3_a: [-0.67, 0.12],
        left_part3_b: [-0.4, 0.12],
        left_part3_i: [-0.4, 0.21],
        left_part3_j: [-0.67, 0.21],

        left_part_color_3b: [1, 1, 1],
        left_part3b_a: [-0.67, -0.4],
        left_part3b_b: [-0.4, -0.4],
        left_part3b_i: [-0.4, 0.12],
        left_part3b_j: [-0.67, 0.12],



        left_part_color_5: [0.6, 0.6, 0.60],
        left_part5_a: [-0.8, 0.12-0.4],
        left_part5_b: [-0.4, 0.12-0.4],
        left_part5_i: [-0.4, 0.21-0.4],
        left_part5_j: [-0.8, 0.21-0.4],

        left_part_color_6: [0.7, 0.7, 0.7],
        left_part6_a: [0.25+0.35, 0.15],
        left_part6_b: [0.34+0.35, 0.15],
        left_part6_i: [0.34+0.35, -0.15],
        left_part6_j: [0.25+0.35, -0.15],

        left_part7_a: [0.34+0.35, 0.14],
        left_part7_b: [0.39+0.35, 0.14],
        left_part7_c: [0.44+0.35, -0.0],
        left_part7_d: [0.34+0.35, -0.0],
        left_part7_e: [0.39+0.35, -0.14],
        left_part7_f: [0.34+0.35, -0.14],

    }

    const object_rightnozzle = {
        right_part_color_1: [0.14, 0.27, 0.60],
        right_part1_a: [0.19, 0.15],
        right_part1_b: [0.23, 0.15],
        right_part1_c: [0.23, -0.15],
        right_part1_d: [0.19, -0.15],

        right_part_color_2: [0.1, 0.18, 0.39],
        right_part2_a: [0.23, 0.08],
        right_part2_b: [0.27, 0.08],
        right_part2_c: [0.27, -0.06],
        right_part2_d: [0.23, -0.06],

        right_part_color_3: [0.14, 0.27, 0.60],
        right_part3_a: [0.27, 0.15],
        right_part3_b: [0.35, 0.15],
        right_part3_i: [0.35, -0.15],
        right_part3_j: [0.27, -0.15],

        right_part_color_3b: [1, 1, 1],
        right_part3b_a: [0.35, 0.14],
        right_part3b_b: [0.35+0.25, 0.14],
        right_part3b_i: [0.35+0.25, -0.14],
        right_part3b_j: [0.35, -0.14],

        // right_part_color_4: [1, 1, 1],
        // right_part4_a: [0.27+0.35, 0.15],
        // right_part4_b: [0.4+0.321, 0.15],
        // right_part4_c: [0.4+0.335, 0.08],
        // right_part4_d: [0.27+0.35, 0.08],
        // right_part4_e: [0.4+0.339, 0.0],
        // right_part4_f: [0.27+0.35, 0.0],
        // right_part4_g: [0.4+0.335, -0.08],
        // right_part4_h: [0.27+0.35, -0.08],
        // right_part4_i: [0.4+0.321, -0.15],
        // right_part4_j: [0.27+0.35, -0.15],

        right_part_color_5: [0.6, 0.6, 0.60],
        right_part5_a: [0.25+0.27, 0.2],
        right_part5_b: [0.25+0.35, 0.2],
        right_part5_i: [0.25+0.35, -0.2],
        right_part5_j: [0.25+0.27, -0.2],

        right_part_color_6: [0.7, 0.7, 0.7],
        right_part6_a: [0.25+0.35, 0.15],
        right_part6_b: [0.34+0.35, 0.15],
        right_part6_i: [0.34+0.35, -0.15],
        right_part6_j: [0.25+0.35, -0.15],

        right_part7_a: [0.34+0.35, 0.14],
        right_part7_b: [0.39+0.35, 0.14],
        right_part7_c: [0.44+0.35, -0.0],
        right_part7_d: [0.34+0.35, -0.0],
        right_part7_e: [0.39+0.35, -0.14],
        right_part7_f: [0.34+0.35, -0.14],
     
    };

    const vertices = [
        //right image
        ...object_rightnozzle.right_part1_a, ...object_rightnozzle.right_part_color_1,
        ...object_rightnozzle.right_part1_b, ...object_rightnozzle.right_part_color_1,
        ...object_rightnozzle.right_part1_c, ...object_rightnozzle.right_part_color_1,
        ...object_rightnozzle.right_part1_a, ...object_rightnozzle.right_part_color_1,
        ...object_rightnozzle.right_part1_c, ...object_rightnozzle.right_part_color_1,
        ...object_rightnozzle.right_part1_d, ...object_rightnozzle.right_part_color_1,

        ...object_rightnozzle.right_part2_a, ...object_rightnozzle.right_part_color_2,
        ...object_rightnozzle.right_part2_b, ...object_rightnozzle.right_part_color_2,
        ...object_rightnozzle.right_part2_c, ...object_rightnozzle.right_part_color_2,
        ...object_rightnozzle.right_part2_a, ...object_rightnozzle.right_part_color_2,
        ...object_rightnozzle.right_part2_c, ...object_rightnozzle.right_part_color_2,
        ...object_rightnozzle.right_part2_d, ...object_rightnozzle.right_part_color_2,
        
        ...object_rightnozzle.right_part3_a, ...object_rightnozzle.right_part_color_3,
        ...object_rightnozzle.right_part3_b, ...object_rightnozzle.right_part_color_3,
        ...object_rightnozzle.right_part3_i, ...object_rightnozzle.right_part_color_3,
        ...object_rightnozzle.right_part3_a, ...object_rightnozzle.right_part_color_3,
        ...object_rightnozzle.right_part3_j, ...object_rightnozzle.right_part_color_3,
        ...object_rightnozzle.right_part3_i, ...object_rightnozzle.right_part_color_3,

        ...object_rightnozzle.right_part3b_a, ...object_rightnozzle.right_part_color_3b,
        ...object_rightnozzle.right_part3b_b, ...object_rightnozzle.right_part_color_3b,
        ...object_rightnozzle.right_part3b_i, ...object_rightnozzle.right_part_color_3b,
        ...object_rightnozzle.right_part3b_a, ...object_rightnozzle.right_part_color_3b,
        ...object_rightnozzle.right_part3b_j, ...object_rightnozzle.right_part_color_3b,
        ...object_rightnozzle.right_part3b_i, ...object_rightnozzle.right_part_color_3b,
        
        
        // ...Lengkungan Pada ujung Nozzle gambar kanan tidak bisa ter-render
        // ...object_rightnozzle.right_part4_a, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_b, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_c, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_a, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_c, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_d, ...object_rightnozzle.right_part_color_4,

        // ...object_rightnozzle.right_part4_d, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_c, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_e, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_d, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_f, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_e, ...object_rightnozzle.right_part_color_4,

        // ...object_rightnozzle.right_part4_f, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_e, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_g, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_f, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_h, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_g, ...object_rightnozzle.right_part_color_4,

        // ...object_rightnozzle.right_part4_h, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_g, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_i, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_h, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_j, ...object_rightnozzle.right_part_color_4,
        // ...object_rightnozzle.right_part4_i, ...object_rightnozzle.right_part_color_4,

        ...object_rightnozzle.right_part5_a, ...object_rightnozzle.right_part_color_5,
        ...object_rightnozzle.right_part5_b, ...object_rightnozzle.right_part_color_5,
        ...object_rightnozzle.right_part5_i, ...object_rightnozzle.right_part_color_5,
        ...object_rightnozzle.right_part5_a, ...object_rightnozzle.right_part_color_5,
        ...object_rightnozzle.right_part5_j, ...object_rightnozzle.right_part_color_5,
        ...object_rightnozzle.right_part5_i, ...object_rightnozzle.right_part_color_5,

        ...object_rightnozzle.right_part6_a, ...object_rightnozzle.right_part_color_6,
        ...object_rightnozzle.right_part6_b, ...object_rightnozzle.right_part_color_6,
        ...object_rightnozzle.right_part6_i, ...object_rightnozzle.right_part_color_6,
        ...object_rightnozzle.right_part6_a, ...object_rightnozzle.right_part_color_6,
        ...object_rightnozzle.right_part6_j, ...object_rightnozzle.right_part_color_6,
        ...object_rightnozzle.right_part6_i, ...object_rightnozzle.right_part_color_6,
        
        // ...object_rightnozzle.right_part7_a, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_b, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_c, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_d, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_c, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_a, ...object_rightnozzle.right_part_color_5,

        // ...object_rightnozzle.right_part7_d, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_c, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_e, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_f, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_e, ...object_rightnozzle.right_part_color_5,
        // ...object_rightnozzle.right_part7_d, ...object_rightnozzle.right_part_color_5,
        

        //left
        ...object_leftnozzle.left_part1_a, ...object_leftnozzle.left_part_color_1,
        ...object_leftnozzle.left_part1_b, ...object_leftnozzle.left_part_color_1,
        ...object_leftnozzle.left_part1_c, ...object_leftnozzle.left_part_color_1,
        ...object_leftnozzle.left_part1_a, ...object_leftnozzle.left_part_color_1,
        ...object_leftnozzle.left_part1_c, ...object_leftnozzle.left_part_color_1,
        ...object_leftnozzle.left_part1_d, ...object_leftnozzle.left_part_color_1,

        ...object_leftnozzle.left_part2_a, ...object_leftnozzle.left_part_color_2,
        ...object_leftnozzle.left_part2_b, ...object_leftnozzle.left_part_color_2,
        ...object_leftnozzle.left_part2_c, ...object_leftnozzle.left_part_color_2,
        ...object_leftnozzle.left_part2_a, ...object_leftnozzle.left_part_color_2,
        ...object_leftnozzle.left_part2_c, ...object_leftnozzle.left_part_color_2,
        ...object_leftnozzle.left_part2_d, ...object_leftnozzle.left_part_color_2,

        ...object_leftnozzle.left_part3_a, ...object_leftnozzle.left_part_color_3,
        ...object_leftnozzle.left_part3_b, ...object_leftnozzle.left_part_color_3,
        ...object_leftnozzle.left_part3_i, ...object_leftnozzle.left_part_color_3,
        ...object_leftnozzle.left_part3_a, ...object_leftnozzle.left_part_color_3,
        ...object_leftnozzle.left_part3_j, ...object_leftnozzle.left_part_color_3,
        ...object_leftnozzle.left_part3_i, ...object_leftnozzle.left_part_color_3,

        ...object_leftnozzle.left_part3b_a, ...object_leftnozzle.left_part_color_3b,
        ...object_leftnozzle.left_part3b_b, ...object_leftnozzle.left_part_color_3b,
        ...object_leftnozzle.left_part3b_i, ...object_leftnozzle.left_part_color_3b,
        ...object_leftnozzle.left_part3b_a, ...object_leftnozzle.left_part_color_3b,
        ...object_leftnozzle.left_part3b_j, ...object_leftnozzle.left_part_color_3b,
        ...object_leftnozzle.left_part3b_i, ...object_leftnozzle.left_part_color_3b,

        ...object_leftnozzle.left_part5_a, ...object_leftnozzle.left_part_color_5,
        ...object_leftnozzle.left_part5_b, ...object_leftnozzle.left_part_color_5,
        ...object_leftnozzle.left_part5_i, ...object_leftnozzle.left_part_color_5,
        ...object_leftnozzle.left_part5_a, ...object_leftnozzle.left_part_color_5,
        ...object_leftnozzle.left_part5_j, ...object_leftnozzle.left_part_color_5,
        ...object_leftnozzle.left_part5_i, ...object_leftnozzle.left_part_color_5,
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0188;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    
    //animasi masih bergerak secara horizontal dan gambar kiri yang bergerak
    function moveVertices() {

        if (vertices[250] < -1.0 || vertices[240] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 180; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 60;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
