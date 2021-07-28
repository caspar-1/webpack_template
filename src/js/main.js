import "../static/styles.css";




function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "bad rabbit says dogs are cool";
    element.classList.add('example');
    return element;
  }
  
  document.body.appendChild(component());