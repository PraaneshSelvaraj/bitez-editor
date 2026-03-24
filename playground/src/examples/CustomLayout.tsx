import {
    Editor,
    SidebarLeft,
    SidebarRight,
    EditorProvider,
    LocalStorageAdapter
} from 'bitez-editor';
import 'bitez-editor/style.css';

/**
 * Custom Adapter Example:
 * Demonstrates how to manually layout the editor components.
 * This is useful if you want to place the sidebars differently or add extra elements.
 * 
 * Also, this example uses `EditorProvider` manually, which allows configuring custom behavior.
 */
export const CustomLayoutExample = () => {
    return (
        <EditorProvider adapter={LocalStorageAdapter} maxStories={50}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(200px, 1fr) minmax(300px, 3fr) minmax(200px, 1fr)',
                height: '100vh',
                width: '100vw'
            }}>
                <div style={{ backgroundColor: '#f0f0f0', borderRight: '1px solid #ddd', overflow: 'hidden' }}>
                    <SidebarLeft />
                </div>

                <div style={{ backgroundColor: '#fff', overflow: 'hidden', padding: '20px' }}>
                    <h2 style={{ textAlign: 'center', margin: '0 0 20px', color: '#888' }}>Custom Wrapper</h2>
                    <div style={{ border: '1px dashed #ccc', height: 'calc(100% - 60px)', overflow: 'hidden' }}>
                        <Editor />
                    </div>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', borderLeft: '1px solid #ddd', overflow: 'hidden' }}>
                    <SidebarRight />
                </div>
            </div>
        </EditorProvider>
    );
};
