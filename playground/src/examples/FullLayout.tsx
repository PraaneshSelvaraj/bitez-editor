import { Layout } from 'bitez-editor';
import 'bitez-editor/style.css';

/**
 * Full usage example:
 * Uses the pre-built `Layout` component which includes:
 * - EditorProvider
 * - SidebarLeft (Story navigation)
 * - Editor (The writing area)
 * - SidebarRight (Plugins)
 *
 * This is the recommended way to use Bitez Editor if you want the full experience.
 */
export const FullLayoutExample = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px 20px', borderBottom: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
                <strong>Full Application Mode</strong>
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
                <Layout />
            </div>
        </div>
    );
};
