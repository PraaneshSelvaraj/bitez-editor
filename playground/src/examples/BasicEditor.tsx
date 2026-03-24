import { Editor, EditorProvider, LocalStorageAdapter } from 'bitez-editor';
import 'bitez-editor/style.css';

/**
 * Basic usage example:
 * Just the Editor component wrapped in the provider.
 * This is useful if you want to embed just the writing area without sidebars.
 */
export const BasicEditorExample = () => {
    return (
        <EditorProvider adapter={LocalStorageAdapter}>
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', border: '1px solid #ddd', minHeight: '400px' }}>
                <Editor />
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>
                <small>A minimal editor instance without sidebars.</small>
            </div>
        </EditorProvider>
    );
};
