import { useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial, Plane, useTexture } from '@react-three/drei'

// Main component
export const Imageas3D = () => (
  <>
    <h1>Pseudo 3D Background</h1>
    <Canvas>
      <Model />
    </Canvas>
  </>
)

// Model component
function Model(props) {
  const depthMaterial = useRef()
  const texture = useTexture('/assets/cb.png')
  const depthMap = useTexture('/assets/cb-depth.png')
  const { viewport } = useThree()
  
  // Update the material's mouse position for parallax effect
  useFrame((state) => (depthMaterial.current.uMouse = [state.mouse.x * 0.01, state.mouse.y * 0.01]))

  return (
    <Plane
      args={[2, 3]}  // Set Plane size: width and height in world units
      scale={[1.5, 1.5, 1]}  // Adjust scale for the Plane
    >
      <pseudo3DMaterial ref={depthMaterial} uImage={texture} uDepthMap={depthMap} />
    </Plane>
  )
}

// Extend the shader material
extend({
  Pseudo3DMaterial: shaderMaterial(
    { uMouse: [0, 0], uImage: null, uDepthMap: null },
    `
    varying vec2 vUv;
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
      vUv = uv;
    }`,
    `
    precision mediump float;

    uniform vec2 uMouse;
    uniform sampler2D uImage;
    uniform sampler2D uDepthMap;

    varying vec2 vUv;
  
    vec4 linearTosRGB( in vec4 value ) {
      return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
    }
    
    void main() {
       vec4 depthDistortion = texture2D(uDepthMap, vUv);
       float parallaxMult = depthDistortion.r;

       vec2 parallax = (uMouse) * parallaxMult;

       vec4 original = texture2D(uImage, (vUv + parallax));
       gl_FragColor = linearTosRGB(original);
    }
    `,
  ),
})
