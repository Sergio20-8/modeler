import React from 'react'
import { ReactFlow, Background, Controls, BackgroundVariant, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function App() {
  return (
    <ReactFlowProvider> 
      <div style={{height: '100vh', width: '100%'}}>
        <ReactFlow >
          <Background
            d="1"
            gap={16}
            size={1}
            color="#000000ff"
            variant={BackgroundVariant.Dots}
          />
          <Controls />
        </ReactFlow> 
      </div>
    </ReactFlowProvider>
  );
}

