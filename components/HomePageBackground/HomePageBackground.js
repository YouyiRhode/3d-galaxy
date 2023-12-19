import React, { useRef, useMemo} from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree,useLoader} from '@react-three/fiber';
import { Environment, OrbitControls,Clouds, Cloud} from '@react-three/drei';
import styles from './HomePageBackground.module.scss';

import fragmentShader from './fragmentShader';
import vertexShader from './vertexShader';

const CustomGeometryParticles = ({ count,position,rotationSpeed,coreRadius,discRadius,armCount,armWidth,colors=[]}) => {
 const points = useRef(); 
 const particles = useRef([]);
 const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
     
    for (let i = 0; i < count; i++) {
      const armIndex = Math.floor(i / (count / armCount));
      const baseArmAngle = (Math.PI * 2 * armIndex) / armCount;
      const distanceFromCenter = Math.random() * discRadius + coreRadius;
      const angularOffset =  Math.pow(distanceFromCenter, -0.5) 
      const armAngleOffset = (Math.random() - 0.5) * armWidth;
      
      const angle = baseArmAngle + angularOffset + armAngleOffset;
      const x = Math.cos(angle) * distanceFromCenter;
      const z = Math.sin(angle) * distanceFromCenter;
      const y = (Math.random() - 0.5) * 0.3;

      positions.set([x, y, z], i * 3);

      particles.current[i] = {
        position: new THREE.Vector3(x, y, z),
        angle: angle,
        distanceFromCenter: distanceFromCenter
      };
    }

    return positions;
 }, [count, coreRadius, discRadius, armCount, armWidth]);

 const threeColors = colors.map(color => {
    if (Array.isArray(color)) {
      return new THREE.Color(...color);
    } else if (typeof color === 'string') {
      return new THREE.Color(color);
    } else {
      return new THREE.Color(0, 0, 0); 
    }
 });// galaxy particles' colors

 useFrame(() => {
    particles.current.forEach((particle, i) => {
      
      particle.angle += rotationSpeed / particle.distanceFromCenter;

     
      const x = Math.cos(particle.angle) * particle.distanceFromCenter;
      const z = Math.sin(particle.angle) * particle.distanceFromCenter;
      
      
      particle.position.x = x ;
      particle.position.z = z ;

     
      points.current.geometry.attributes.position.array[i * 3] = x;
      points.current.geometry.attributes.position.array[i * 3 + 1] = particle.position.y;
      points.current.geometry.attributes.position.array[i * 3 + 2] = z;
    });

    
    points.current.geometry.attributes.position.needsUpdate = true;
 }); 
  return (
    <group position={position}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          depthWrite={false}
          uniforms={useMemo(() => ({
            uTime: { value: 0.0 },
            uRadius: { value: discRadius },
            uColor: { value: threeColors },
          }), [discRadius,threeColors])}
        />
      </points>
    </group>

  );
};
const generateStarPositions = (countNumber, radius) => {
  const positions = [];
  for (let i = 0; i < countNumber; i++) {
    const theta = Math.random() * 2 * Math.PI; 
    const phi = Math.acos((Math.random() * 2) - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    positions.push([x, y, z]);
  }
  return positions;
};
const BgStars = ({starPositions,starColor,url}) => {
  const starTexture = useLoader(THREE.TextureLoader,url);
  console.log(url)
  return(
    <>
      {starPositions.map((starPosition, index) => (
        <sprite key={index} 
                position={new THREE.Vector3(...starPosition)} 
                scale={[1, 1, 1]} 
        >
          <spriteMaterial 
            map={starTexture} 
            color={starColor}
            transparent={true}
            opacity={1}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      ))}
    </>
  )
  
}
export default function HomePageBackground() {
 const starLayers = [
    {countNumber: 1000, radius:1500, color:'yellow',url:'/bg_stars/star.png'},
    {countNumber: 1000, radius:1000, color:'white',url:'/bg_stars/star.png'},
    {countNumber: 1200, radius:800, color:'white',url:'/bg_stars/star.png'}, 
    {countNumber: 1600, radius:600, color:'white',url:'/bg_stars/star.png'},
    {countNumber: 200, radius:400, color:'white',url:'/bg_stars/star.png'},
    {countNumber: 100, radius:160, color:'white',url:'/bg_stars/star.png'},
    {countNumber: 80, radius:120, color:'white',url:'/bg_stars/star.png'},
    {countNumber: 60, radius:80, color:'blue',url:'/bg_stars/star.png'}, 
    {countNumber: 100, radius:70, color:'white',url:'/bg_stars/star.png'},
    {countNumber: 50, radius:40, color:'white',url:'/bg_stars/star6.png'},
    {countNumber: 30, radius:40, color:'white',url:'/bg_stars/star5.png'},
  ]
return (
    <div className={styles.background3DContainer}>
      <Canvas camera={{ position: [2.0, 4, 8] }}>
      <CustomGeometryParticles 
        count={4000} 
        rotationSpeed={0.006} 
        coreRadius={0.06} 
        discRadius={10}
        armWidth={0.8}
        armCount={4}
        colors={['blue','white','blue']}
      />
      {
        starLayers.map( (starLayer, index)=>{
          const starPositions = generateStarPositions(starLayer.countNumber, starLayer.radius);
          return <BgStars key={index} starPositions={starPositions} starColor={starLayer.color} url={starLayer.url}/>;
        })
      }
      <OrbitControls />
      </Canvas>
    </div>
  );
}