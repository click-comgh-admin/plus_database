import '@material/mwc-icon-button';
import { TextField } from '@material/mwc-textfield';

let showingCheckBoxes: { id: string, showing: boolean, elem: HTMLInputElement | TextField, span: HTMLSpanElement }[] = [];
const labelTextShow = "Show Password", labelTextHide = "Hide Password";

export const togglePswdVisibility = (type: "mwc-textfield" | "input" = "input") => {
  const PSWDs = document.querySelectorAll(type + '[type="password"]');
  // console.log({ PSWDs });

  PSWDs.forEach((PSWD: HTMLInputElement | TextField, i) => {
    // console.log({ PSWD });
    const parentElement = PSWD.parentElement;
    parentElement.setAttribute('style', parentElement.getAttribute('style') + "; flex-direction: column !important;")
    const label = document.createElement('label');
    label.setAttribute('style', label.getAttribute('style') + "; display: inline-flex;" +
      "width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;"
    );

    const span = document.createElement('span');
    span.setAttribute('style', span.getAttribute('style') + "; margin-left: 0.5rem;" +
      "font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"
    );
    span.innerText = labelTextShow;

    const spanDummy = document.createElement('span');
    span.setAttribute('style', span.getAttribute('style') + "; margin-left: 0.5rem;" +
      "font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"
    );

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "pswd-visibility-btn--" + i;
    checkbox.setAttribute('style', checkbox.getAttribute('style') + "; -moz-appearance: auto !important;" +
      "-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;" +
      "opacity: 1; margin-right: 0; z-index: 10;"
    );

    label.appendChild(spanDummy);
    label.appendChild(checkbox);
    label.appendChild(span);

    PSWD.after(label);

    const showingCheckBox = { id: checkbox.id, showing: false, elem: PSWD, span: span };
    if (!showingCheckBoxes.includes(showingCheckBox)) {
      showingCheckBoxes.push(showingCheckBox);
    }
    checkbox.addEventListener('change', __toggleVisibility)
  });
}

const __toggleVisibility = (e: { preventDefault: () => void; currentTarget: any; }) => {
  e.preventDefault();
  const checkbox: HTMLInputElement = e.currentTarget;
  // console.log({ checkbox, e })
  checkbox.checked
  showingCheckBoxes.forEach(showingCheckBox => {
    if (checkbox.id === showingCheckBox.id) {
      if (showingCheckBox.showing === false) {
        showingCheckBox.elem.type = "text";
        showingCheckBox.span.innerText = labelTextHide;
        showingCheckBox.showing = true;
      } else {
        showingCheckBox.elem.type = "password";
        showingCheckBox.span.innerText = labelTextShow;
        showingCheckBox.showing = false;
      }
      // console.log({ showingCheckBox, button });
    }
  });
}