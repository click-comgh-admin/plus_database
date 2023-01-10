import { urlQueryParamsGet } from "@@addons/functions/url_query_params";
import { Button } from "@material/mwc-button";

type _InputNameValue = { name: String, value?: String };
type _FilterFieldBox = {
  selectors?: {
    container?: Element,
    form?: HTMLFormElement,
    filterSectionContextBtn?: Button | HTMLButtonElement,
  },
  isOpen? : boolean,
  unmutableInputNames? : Array<_InputNameValue>
};

export class FilterFieldBox {
  private constructorInit: _FilterFieldBox;
  private unmutableInputNames: Array<_InputNameValue>;
  public container: Element;
  public form: HTMLFormElement;
  public filterSectionContextBtn: Button | HTMLButtonElement;
  private filtering = "--filtering--";
  private __filtering__ = "";
  private __filtering__open_default = false;
  private __allowed = false;

  constructor(init?: _FilterFieldBox) {
    this.constructorInit = init;
    // console.log({"this.constructorInit": this.constructorInit});
    const selectors = init.selectors;
    // console.log({selectors});
    
    this.form = selectors.form;
    this.container = selectors.container;
    this.filterSectionContextBtn = selectors.filterSectionContextBtn;
    this.unmutableInputNames = init.unmutableInputNames;
    this.__filtering__open_default = init.isOpen;

    this.__filtering__ = urlQueryParamsGet(this.filtering);
    if ((this.form !== null) && (this.container !== null) && (this.filterSectionContextBtn !== null)){
      this.init();
    }
  }

  private init() {
    this.__allowed = true;
    // console.log({"this.constructorInit": this.constructorInit, "!('FilterFieldBox' in window)": !('FilterFieldBox' in window)});

    if (!('FilterFieldBox' in window)) {
      // console.log({"this.constructorInit": this.constructorInit});
      
      // @ts-ignore
      window['FilterFieldBox'] = this;
      // @ts-ignore
      // console.log({"window['FilterFieldBox']": window['FilterFieldBox']});
    }

    // console.log({
    //   "this.__allowed": this.__allowed,
    //   "this.form": this.form,
    //   "this.container": this.container,
    //   "this.filterSectionContextBtn": this.filterSectionContextBtn,
    // });

    setTimeout(() => {
      this.addfilterCheckInput();
      this.toggleFilterFieldsDefault();
    }, 1000);
  }

  public toggleFilterFields(e: any) {
    e.preventDefault();
    
    // @ts-ignore
    const _this = window['FilterFieldBox'];
    // console.log({e, "_this.__allowed": _this.__allowed});
    
    if (_this.__allowed) {
      const BTN = _this.filterSectionContextBtn,
        CONTAINER = _this.container;
      // console.log({BTN, CONTAINER});
      
      if (CONTAINER.hasAttribute('hidden')) {
        CONTAINER.removeAttribute('hidden');
        BTN.setAttribute('class', 'warning mt-1');
        BTN.setAttribute('icon', 'close_fullscreen');
      } else {
        CONTAINER.setAttribute('hidden', '');
        BTN.setAttribute('class', 'primary mt-1');
        BTN.setAttribute('icon', 'open_with');
      }
    }
  }

  private addfilterCheckInput() {
    // @ts-ignore
    const _this = window['FilterFieldBox'];

    const form: HTMLFormElement = _this.form;
    // console.log({form});

    const filterCheck = document.createElement('input');
    filterCheck.type = "hidden";
    filterCheck.value = "true";
    filterCheck.name = this.filtering;

    form.appendChild(filterCheck);

  }

  private toggleFilterFieldsDefault() {
    const __this = this;
    function toggle_visibilty() {
      const CONTAINER = __this.container;
      if (CONTAINER.hasAttribute('hidden')) {
        __this.filterSectionContextBtn.click();
      }
    }
    if (this.__filtering__ === "true") {
      toggle_visibilty();
    }

    if (this.__filtering__open_default) {
      toggle_visibilty();
    }
  }

  public submit(e: any) {
    e.preventDefault();
    
    // @ts-ignore
    const _this = window['FilterFieldBox'];
    const form: HTMLFormElement = _this.form;
    form.submit();
  }

  public clear_filter = (e: any) => {
    e.preventDefault();
    
    // @ts-ignore
    const _this = window['FilterFieldBox'];
    const form: HTMLFormElement = _this.form,
      formData = new FormData(form);
    
    const unmutableFields = this.unmutableInputNames?.map(iNs => iNs.name);
    formData?.forEach((value, key) => {
      // console.log({value, key});

      if (!unmutableFields?.includes(key)) {
        document.querySelectorAll('[name="' + key + '"]')?.forEach(el => {
          // @ts-ignore
          el.value = "";
        });
      }
    });
    this.unmutableInputNames?.map(iNs => {
      const name = iNs.name;
      const value = iNs.value;
      if (value !== undefined) {
        document.querySelectorAll('[name="' + name + '"]')?.forEach(el => {
          // @ts-ignore
          el.value = value;
        });
      }
      // console.log({iNs, "val": iNs.value})
    });
    form.submit();
  }
}
