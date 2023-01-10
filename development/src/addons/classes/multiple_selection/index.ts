export class MultipleSelectionCheckbox {
  private selector_name = "multiple-selection-checkbox"
  private identifier: string = this.selector_name;
  private hasSelectIndividualsToMultiple = false;
  private totalSelected = 0;

  constructor(identifier: string) {
    this.identifier = identifier;
    try {
      this.selectMultiple();
      this.__selectIndividualsToMultiple();
    } catch (error) {
      console.log({ error });
    }
  }

  private __selectIndividualsToMultiple() {
    setInterval(() => {      
      if (this.hasSelectIndividualsToMultiple === false) {        
        if (this.selectAllIndividual().length > 0) {
          this.selectIndividualsToMultiple();
          this.hasSelectIndividualsToMultiple = true;
        }
      }
    }, 100);
  }

  /**
   * selectMultiple
   */
  private selectMultiple() {
    const selector = `input[${this.selector_name}="${this.identifier}-all"]`;
    const input: HTMLInputElement = document.querySelector(selector);
    let selectAllIndividual = this.selectAllIndividual();
    // console.log({ input, selectAllIndividual });

    input.addEventListener('change', (e) => {
      selectAllIndividual = this.selectAllIndividual();
      // console.log({ e, "input.checked": input.checked });

      if (input.checked) {
        input.checked = true;
        selectAllIndividual.forEach((checkbox) => {
          checkbox.checked = true;
          // console.log({ checkbox, "input.checked": checkbox.checked });
          // this._totalIDs(checkbox, checkbox.checked);
          this._totalIDsAlt();
        });
      } else {
        input.checked = false;
        selectAllIndividual.forEach((checkbox) => {
          checkbox.checked = false;
          // console.log({ checkbox, "input.checked": checkbox.checked });
          // this._totalIDs(checkbox, checkbox.checked);
          this._totalIDsAlt();
        });
      }
    });
  }

  /**
   * selectIndividualsToMultiple
   */
  private selectIndividualsToMultiple() {
    const selectAllIndividual = this.selectAllIndividual();
    const selectorsLength = selectAllIndividual.length;
    const selector = `input[${this.selector_name}="${this.identifier}-all"]`;
    const input = document.querySelector(selector);
    selectAllIndividual.forEach((checkbox) => {
      // console.log({checkbox,"-------------":"---"});
      
      checkbox.addEventListener('change', (e) => {
        // console.log({input, e});
        // console.log({"this.totalSelected-1": this.totalSelected});
        
        // @ts-ignore
        if (checkbox.checked === true) {
          this.totalSelected += 1;
        } else {
          this.totalSelected -= 1;
        }
        // console.log({"this.totalSelected-2": this.totalSelected});
        // console.log({
        //   selectorsLength,
        //   "this.totalSelected": this.totalSelected
        // });
        
        if (selectorsLength === this.totalSelected) {
          // @ts-ignore
          input.checked = true;
        } else {
          // @ts-ignore
          input.checked = false;
        }
        // @ts-ignore
        // this._totalIDs(input, input.checked);
        this._totalIDsAlt();
      });
    });
  }

  /**
   * selectAllIndividual
   */
  private selectAllIndividual(): NodeListOf<HTMLInputElement> {
    const selector = `input[${this.selector_name}="${this.identifier}"]`;
    // console.log({ selector });

    return document.querySelectorAll(selector);
  }

  /**
   * _totalIDs
   */
  private _totalIDs(input: HTMLInputElement, add: boolean) {
    const ID = Number(input.id);

    if (add) {
      if (!this.totalIDs.includes(ID)) {
        this.totalIDs.push(ID);
      }
    } else {
      let newList: number[] = [];
      for (let i = 0; i < this.totalIDs.length; i++) {
        const _ID = this.totalIDs[i];
        if (_ID !== ID) {
          if (!newList.includes(ID)) {
            newList.push(ID);
          }
        }
      }
      this.totalIDs = newList;
    }
  }

  /**
   * _totalIDsAlt
   */
  private _totalIDsAlt() {
    const selectAllIndividual = this.selectAllIndividual();
    this.totalIDs = [];
    selectAllIndividual.forEach((checkbox) => {
      if (checkbox.checked) {
        const ID = Number(checkbox.id);
  
        if (!this.totalIDs.includes(ID)) {
          this.totalIDs.push(ID);
        }
      }
    });
  }

  public totalIDs: number[] = [];
}
