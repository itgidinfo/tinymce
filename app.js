const textArea = document.querySelector('#mytextarea');

document.querySelector('.get-editor-data').addEventListener('click', () => {
    // console.log(textArea.innerHTML);
    // console.log(textArea.value);
    let d = tinymce.get('mytextarea').getContent();
    console.log(d);
    let d1 = tinymce.get('mytextarea').getContent({
        format: "text"
    });
    console.log(d1);
});