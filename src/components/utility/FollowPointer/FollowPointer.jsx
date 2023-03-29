import { useState } from 'react';

export default function FollowPointer() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  
  //can replace <div> with custom component or graphic.
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
     className="component-view">
      <div style={{
        position: 'absolute',
        backgroundColor: 'teal',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
        pointerEvents: "none"
      }} />
    </div>
  )
}
