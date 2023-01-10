import { SelectInputOptions_I, SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import * as $ from 'jquery'
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import 'select2';
import { ProcessedResult, QueryOptions, DataParams, Event } from 'select2';
import '../../../../assets/styles/views/widget/select_input/select_input.scss';


@customElement('select-input')
export class SelectInput extends LitElement {

  @property({ type: String })
  public name: string = "";

  @property({ type: String })
  public label: string = "";

  @property({ type: Array })
  public value: SelectInputOptions_I[] = [];

  @property({ type: Number })
  private randomID: number = Math.floor(Math.random() * 12345);

  @property({ type: String })
  public input_id?: string = this.id + "_" + this.randomID;

  @property({ type: Array })
  public options?: { id: number, name: string, isSelected?: "true" | "false", selected: boolean }[] = [];

  @property({ type: Boolean })
  public required?: boolean;

  @property({ type: String })
  public ajaxFetchToken?: string = "";

  @property({ type: String })
  public ajaxFetchUrl?: string = null;

  @property({attribute: false})
  public currentValue: any | any[];

  // @property({ type: Object })
  // public ajaxHeader: object = {};

  private _ajaxHeader: any = null;

  public set ajaxHeader(value: any) {
    this._ajaxHeader = value;
    this.requestUpdate();
  }

  public get ajaxHeader(): any {
    return this._ajaxHeader;
  }

  @property({ type: Object })
  public ajaxFetchProcessResponse?: (data: any, params: QueryOptions) => SelectInputProcessedAjaxResponse_I = null;

  @property({ type: Array })
  public ajaxFetchUrlParams?: SelectInputProcessedAjaxUrlParam_I[] = [];
  
  @property({ type: Number })
  public startSearchPage?: number = 0

  @property({ type: Boolean })
  /** For multiple image selection */
  public multiple?: boolean;

  private selectSelector: NodeListOf<HTMLSelectElement>;
  private $selectSelector: JQuery<HTMLSelectElement>;

  @property({ type: Number })
  public startNumber: number = 10;

  @property({ type: Number })
  public rowsPerPage: number = 10;

  @property({ type: Number })
  public totalShowing: number = 10;

  @property({ type: Boolean })
  private showSelectorLoaded?: boolean = false;

  static styles = [
    css`
      .select2-container {
        pointer-events: auto !important;
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();  
    this.value = Array.isArray(this.value) ? this.value : [];

    setInterval(() => {
      if (this.selectSelector === undefined) {
        // console.log({ "this.selectSelector": this.selectSelector });
        // console.log({ "this.input_id": this.input_id, "'select-input>select[input_id='+ this.input_id +']": 'select-input>select[input_id='+ this.input_id +']' });
        this.selectSelector = document.querySelectorAll('select-input>select[input_id='+ this.input_id +']');
        // console.log({"this.selectSelector": this.selectSelector});
        
        this.$selectSelector = $(this.selectSelector)
        // console.log({"this.$selectSelector": this.$selectSelector});
      } else {
        this.showDropdownAlt();
      }
    });

    this.options = this.options.map((option) => {
      const optionId = option.id;
      let isSelected = false;

      // console.log({"this.value": this.value});

      this.value.forEach((val) => {
        const valId = val.id;

        isSelected = optionId === valId;
      });
      option.selected = isSelected;
      return option;
    });
  }

  render() {
    // console.log({"this.options": this.options});
    
    if (this.multiple) {
      if (this.required) {
        return html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map(option => {
              const isSelected = option.isSelected === undefined ? option.selected : option.isSelected;
              if (isSelected === true || isSelected === "true") {
                return html`
                  <option value="${option.id}" selected>${option.name}</option>
                `;
              } else {
                return html`
                  <option value="${option.id}">${option.name}</option>
                `;
              }
            })}
          </select>
        `;
      } else {
        return html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map(option => {
              const isSelected = option.isSelected === undefined ? option.selected : option.isSelected;
              if (isSelected === true || isSelected === "true") {
                return html`
                  <option value="${option.id}" selected>${option.name}</option>
                `;
              } else {
                return html`
                  <option value="${option.id}">${option.name}</option>
                `;
              }
            })}
          </select>
        `;
      }
    } else {
      if (this.required) {
        return html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map(option => {
              
              const isSelected = option.isSelected === undefined ? option.selected : option.isSelected;
              if (isSelected === true || isSelected === "true") {
                return html`
                  <option value="${option.id}" selected>${option.name}</option>
                `;
              } else {
                // console.log("option_option-option_option - " + this.label + " :", {option});
                return html`
                  <option value="${option.id}">${option.name}</option>
                `;
              }
            })}
          </select>
        `;
      } else {
        return html`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map(option => {
              const isSelected = option.isSelected === undefined ? option.selected : option.isSelected;
              if (isSelected === true || isSelected === "true") {
                return html`
                  <option value="${option.id}" selected>${option.name}</option>
                `;
              } else {
                return html`
                  <option value="${option.id}">${option.name}</option>
                `;
              }
            })}
          </select>
        `;
      }
    }
  }

  firstUpdated() {
    // this.showDropdown();
  }

  formatRepo(repo: { loading: boolean; text: string; id: string; }) {
    // console.log({ "smbfl-repo": repo });
    if (repo.loading) {
      return repo.text;
    }

    // console.log({ "this.value": this.value });
    var $container = $(
      this.value.map((val) => {
        const _selected = Number(repo.id) === val.id,
          selected = _selected ? "selected='true'" : "";
        // console.log({ _selected, selected });

        return '<option value="' + repo.id + '" ' + selected + '>' + repo.text + '</option>'
      })
    );
    return $container;
  }

  formatRepoSelection(repo: { full_name: string; text: string; }) {
    return repo.full_name || repo.text;
  }

  _start(params: any, totalShowing: number) {
    const _this = this;
    // console.log({ _this });

    // _this.totalShowing = 10;

    this.startSearchPage = isNaN(params.page) ? 0 : params.page;
    this.startSearchPage = this.startSearchPage === 0 ? this.startSearchPage : this.startSearchPage * totalShowing;
    $('.select2-search__field').on('keyup', function ($this) {
      $(_this.selectSelector).empty();
      _this.startSearchPage = 0
      // _this.totalShowing = 10;
      // console.log({ _this });
    });

    return _this.startSearchPage;
  }

  private showDropdownAlt() {
    const _this = this;
    let totalShowing = this.totalShowing,
      startSearchPage = this.startSearchPage;

      function _start(params: any, S2: JQuery<HTMLSelectElement>) {
        // console.log({ _this });
  
        // totalShowing = 0;
  
        startSearchPage = isNaN(params.page) ? 0 : params.page;
        startSearchPage = startSearchPage === 0 ? startSearchPage : startSearchPage * totalShowing;
        $('.select2-search__field').on('keyup', function ($this) {
          $(_this.selectSelector).empty();
          startSearchPage = 0
          totalShowing = 0;
          // console.log({ _this });
        });
  
        return startSearchPage;
      }

      function _page(params: any, S2: JQuery<HTMLSelectElement>) {
        // console.log({ _this });
  
        // totalShowing = 0;
  
        let startSearchPage = isNaN(params.page) ? 1 : params.page + 1;
        startSearchPage = startSearchPage === 0? 1 : startSearchPage;
        $('.select2-search__field').on('keyup', function ($this) {
          $(_this.selectSelector).empty();
          startSearchPage = 0
          totalShowing = 0;
          // console.log({ _this });
        });
  
        return startSearchPage;
      }

    if (this.showSelectorLoaded === false) {
      this.showSelectorLoaded = true;
      if (this.ajaxFetchUrl === null) {
        this.selectSelector.forEach(selectSelector => {
          // console.log({"selectSelector-1": selectSelector})
          $(selectSelector).select2({
            closeOnSelect: false,
            // @ts-ignore
            placeholder: this.label,
          });
          $(selectSelector).on('select2:select', (e) => {
            this.changeAction(e)
          })
        });
      } else {
        let _headers = {
          "Access-Control-Allow-Origin": "*/*",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
        };
        // console.log({"this.ajaxHeader": this.ajaxHeader})
        
        for (const header in this.ajaxHeader) {
          // console.log({header})
          // @ts-ignore
          _headers[header] = this.ajaxHeader[header];
        }

        // console.log({ _headers });
        // console.log({"this.selectSelector": this.selectSelector})
        this.selectSelector.forEach(selectSelector => {
          // console.log({"selectSelector-2": selectSelector})
          const S2: JQuery<HTMLSelectElement> = $(selectSelector).select2({
            closeOnSelect: false,
            ajax: {
              url: _this.ajaxFetchUrl,
              dataType: 'json',
              delay: 250,
              data: function (params: { term: any; }) {
                const start = _start(params, S2);
                const page = _page(params, S2);
                // let page = start / 10;
                // page = page === 0 ? 1 : page;
                let finalParams: any = {
                  "search": params.term, // search term
                  "start": start,
                  "page": page,
                };

                _this.ajaxFetchUrlParams.forEach((param) => {
                  finalParams[param.param] = param.value;
                });
                // console.log({finalParams});
                return finalParams;
              },
              headers: _headers,
              processResults: (data: any, params: any) => {
                // return _this.ajaxFetchProcessResponse(data, params);
                const processedResponse = this.ajaxFetchProcessResponse === null
                  ? this._processResults(data, params)
                  : this.ajaxFetchProcessResponse(data, params);

                // console.log({ "totalShowing-1": totalShowing });
                totalShowing += processedResponse.results.length;
                // console.log({ "totalShowing-2": totalShowing });

                return {
                  results: processedResponse.results,
                  pagination: {
                    // @ts-ignore
                    more: totalShowing < processedResponse.total
                  }
                };
              },
              cache: true
            },
            placeholder: this.label,
          });
          S2.on('select2:opening', (e) => {
            // console.log({ e });
            startSearchPage = 0
            totalShowing = 0;
          });
        });
      }

      const SELECT2s = this.querySelectorAll('.select2-container');
      // console.log({SELECT2s})
      SELECT2s.forEach(SELECT2 => {
        SELECT2.setAttribute('style', 'width: 100% !important; pointer-events: auto !important;');
      });
    }
  }

  private _processResults(data: any, params: any): SelectInputProcessedAjaxResponse_I {
    const response = data;
    params.page = params.page || 0;
    // console.log({ "smbfl-response": response, "check": response.error === false });

    let processedData: { id: number; text: string; }[] = [];
    if (response.error === false) {
      var _data = response['data'];
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const id = item['id'];
        const fullName = item['fullName'];
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
          // $($select).append($('<option>', { fullName: id }).text(fullName));
        }
      }
    }
    this.totalShowing += processedData.length;
    return {
      results: processedData,
      total: response.total,
      totalShowing: this.totalShowing
    };
  }

  // @ts-ignore
  private changeAction(changeActionEvent: Event<HTMLSelectElement, DataParams>) {
    // // console.log({ changeActionEvent });
    // // @ts-ignore
    // const selectedOptions = changeActionEvent.target.selectedOptions;
    // let currentValue: number[] = [];
    // for (const iterator of selectedOptions) {
    //   let selectedOption: HTMLOptionElement = iterator;
    //   // console.log({ iterator, selectedOption });
    //   const value = Number.isNaN(selectedOption.value)? 0: Number(selectedOption.value);
    //   if (!currentValue.includes(value)) {
    //     currentValue.push(value);
    //   }
    // }
    // this.currentValue = currentValue;
    // // console.log({'this.querySelector(`[input_id="${this.input_id}"]`)': this.querySelector(`[input_id="${this.input_id}"]`)})
    // @ts-ignore
    const selectedOptions2 = this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;
    let currentValue2: number[] = [];
    for (const iterator of selectedOptions2) {
      let selectedOption: HTMLOptionElement = iterator;
      // console.log({ iterator, selectedOption });
      const value = Number.isNaN(selectedOption.value)? 0: Number(selectedOption.value);
      if (!currentValue2.includes(value)) {
        currentValue2.push(value);
      }
    }
    // console.log({ currentValue, currentValue2 });
    this.currentValue = currentValue2;
    // @ts-ignore
    this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue", currentValue2)
  }

  createRenderRoot() {
    return this;
  }
}
