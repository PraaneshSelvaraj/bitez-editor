import { useState } from 'react';
import { FullLayoutExample } from './examples/FullLayout';
import { BasicEditorExample } from './examples/BasicEditor';
import { CustomLayoutExample } from './examples/CustomLayout';
import { MockStorageExample } from './examples/MockStorage';

import 'bitez-editor/style.css';

const EXAMPLES = {
  'Full Layout': FullLayoutExample,
  'Basic Editor': BasicEditorExample,
  'Custom Layout': CustomLayoutExample,
  'Mock Storage Adapter': MockStorageExample,
};

function App() {
  const [currentExample, setCurrentExample] = useState<keyof typeof EXAMPLES>('Full Layout');
  const Component = EXAMPLES[currentExample];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      {/* Navigation Bar */}
      <nav style={{
        padding: '10px 20px',
        backgroundColor: '#eee',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <strong style={{ fontSize: '1.2rem' }}>Bitez Editor Playground</strong>
        <select
          value={currentExample}
          onChange={(e) => setCurrentExample(e.target.value as keyof typeof EXAMPLES)}
          style={{ padding: '5px 10px', fontSize: '1rem' }}
        >
          {Object.keys(EXAMPLES).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <div style={{ flex: 1 }} />
        <a href="https://github.com/dev-cranala/bitez-editor" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>
          GitHub
        </a>
      </nav>

      {/* Example Container */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <Component />
      </div>
    </div>
  )
}

export default App

