import '@material/mwc-icon-button';
import { IconButton } from '@material/mwc-icon-button';
import { TextField } from '@material/mwc-textfield';
let showingBtns: { id: string, showing: boolean, elem: HTMLInputElement | TextField }[] = [];

export const togglePswdVisibility = (type: "mwc-textfield" | "input" = "input") => {
  const PSWDs = document.querySelectorAll(type + '[type="password"]');
  // console.log({ PSWDs });

  PSWDs.forEach((PSWD: HTMLInputElement | TextField, i) => {
    // console.log({ PSWD });
    PSWD.setAttribute('style', PSWD.getAttribute('style') + "; display: flex; flex-direction: row-reverse; align-items: center;!important; ")
    const shadowRoot = PSWD.shadowRoot;
    const button = document.createElement('mwc-icon-button');
    button.id = "pswd-visibility-btn--" + i;
    button.icon = "visibility_off";
    // button.setAttribute('style', button.getAttribute('style') + "; float: right!important; ")
    shadowRoot.appendChild(button)
    // console.log({ shadowRoot, "shadowRoot.innerHTML": shadowRoot.innerHTML });

    const showingBtn = { id: button.id, showing: false, elem: PSWD };
    if (!showingBtns.includes(showingBtn)) {
      showingBtns.push(showingBtn);
    }
    button.addEventListener('click', __toggleVisibility)
  });
}

const __toggleVisibility = (e: { preventDefault: () => void; currentTarget: any; }) => {
  e.preventDefault();
  const button: IconButton = e.currentTarget;
  showingBtns.forEach(showingBtn => {
    if (button.id === showingBtn.id) {
      if (showingBtn.showing === false) {
        showingBtn.elem.type = "text";
        button.icon = "visibility";
        showingBtn.showing = true;
      } else {
        showingBtn.elem.type = "password";
        button.icon = "visibility_off";
        showingBtn.showing = false;
      }
      // console.log({ showingBtn, button });
    }
  });
}