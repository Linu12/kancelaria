<script>
    import {onDestroy, onMount} from 'svelte';
    import 'quill/dist/quill.snow.css';

    export let content = '';

    let editor;
    let quillInstance;

    onMount(async () => {
        const Quill = (await import('quill')).default;

        quillInstance = new Quill(editor, {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{header: [1, 2, 3, false]}],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['link', 'image'],
                ],
            },
        });

        quillInstance.root.innerHTML = content;

        quillInstance.on('text-change', () => {
            content = quillInstance.root.innerHTML;
        });
    });

    onDestroy(() => {
        quillInstance = null;
    });
</script>

<div bind:this={editor}></div>
