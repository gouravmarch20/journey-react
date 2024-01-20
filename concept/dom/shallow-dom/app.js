

 customElements.define('my-custom-tag', class extends HTMLElement {
    connectedCallback() {
       
        const temp = this.attachShadow({ mode: 'open' });
        
        // Create a container element to hold the content
        const container = document.createElement('div');
        // Get the content inside the custom tag
        const customTagContent = this.innerHTML;

        // Get the value of the 'data' attribute
        const dataAttributeValue = this.getAttribute('data');

        // Create a paragraph element and set its text content based on 'data' attribute value
        const paragraph = document.createElement('p');
        paragraph.classList.add('error');//^ no overRide css
        paragraph.textContent = `hello ${dataAttributeValue || ''}`;

        // Append the content from customTag and the paragraph to the container
        container.innerHTML = customTagContent;
        container.appendChild(paragraph);

        // Append the container to the shadow DOM
        temp.appendChild(container);
    }
});
