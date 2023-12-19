const fragmentShader = `
uniform vec3 uColor[3];

varying float vDistance;

void main() {
  
  //stars' color
  vec3 starColor1 = uColor[0]; //blue 
  vec3 starColor2 = uColor[1]; //white
  vec3 starColor3 = uColor[2]; // yellow

  //stars' color brightness
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 3.0);

  //mix the stars's color (From the center to edges the color are white , yellow and blue)
  vec3 color = mix(starColor3,starColor2,vDistance*0.3 );
  color = mix(starColor1,color,vDistance * 0.02);

  //mix the color and brightness
  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}

`

export default fragmentShader