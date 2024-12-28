<script>
    import { onMount } from 'svelte';
    import 'quill/dist/quill.snow.css';
  
    let editor;
    let quillInstance = null; // Holds the Quill instance
    let content = ''; // Variable to bind editor content
  
    onMount(async () => {
      // Dynamically import Quill to ensure it runs only in the browser
      const Quill = (await import('quill')).default;
  
      // Initialize Quill
      quillInstance = new Quill(editor, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'], // Formatting buttons
            [{ header: [1, 2, 3, false] }], // Header levels
            [{ list: 'ordered' }, { list: 'bullet' }], // Lists
            ['link', 'image'], // Add links and images
          ],
        },
      });
  
      // Handle text changes
      quillInstance.on('text-change', () => {
        content = quillInstance.root.innerHTML; // Extract the editor content
      });
    });
  </script>
  
  <div bind:this={editor}></div>
  <p>Content: {content}</p>

  
  