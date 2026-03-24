import { useMemo } from 'react';
import {
    IStorageAdapter,
    EditorData,
    EditorProvider,
    Layout
} from 'bitez-editor';
import 'bitez-editor/style.css';

/**
 * A custom adapter that simulates an API interaction.
 * Useful for integrating Bitez with your backend or cloud service.
 */
class MemoryStorageAdapter implements IStorageAdapter {
    private data: EditorData | null = null;
    private storyContent: Record<string, string> = {};

    constructor() {
        console.log('[MemoryStorageAdapter] Initialized');
    }

    async save(data: EditorData): Promise<void> {
        console.log('[MemoryStorageAdapter] Saving manifest:', data);
        this.data = JSON.parse(JSON.stringify(data)); // Deep copy to simulate persistence
    }

    async load(): Promise<EditorData | null> {
        console.log('[MemoryStorageAdapter] Loading manifest...');
        return this.data ? JSON.parse(JSON.stringify(this.data)) : null;
    }

    async saveStory(id: string, content: string): Promise<void> {
        console.log(`[MemoryStorageAdapter] Saving story ${id}:`, content.slice(0, 50) + '...');
        this.storyContent[id] = content;
    }

    async loadStory(id: string): Promise<string> {
        console.log(`[MemoryStorageAdapter] Loading story ${id}`);
        return this.storyContent[id] || '';
    }

    async clear(): Promise<void> {
        this.data = null;
        this.storyContent = {};
        console.log('[MemoryStorageAdapter] Cleared');
        return Promise.resolve();
    }
}

/**
 * Demonstrates how to inject a custom storage adapter.
 * Watch the console to see storage operations.
 */
export const MockStorageExample = () => {
    // Create an instance of our adapter once
    const adapter = useMemo(() => new MemoryStorageAdapter(), []);

    return (
        <EditorProvider adapter={adapter}>
            <div style={{ height: '100vh', width: '100vw' }}>
                <Layout />
            </div>
        </EditorProvider>
    );
};
