// import '@@assets/styles/views/widget/simple-table/main.scss';
// import { LitElement, html, css, TemplateResult } from 'lit';
// import { customElement, property, query, queryAll } from 'lit/decorators.js';
// import '@material/mwc-button';
// import '@material/mwc-circular-progress';
// import '@@addons/widgets/form/new/switch';
// import '@@addons/widgets/add_remove_widget';
// import '@@widgets/datatables';
// import '@@interfaces/datatables';
// import './one-tag';
// import './one-tag/sms';
// import './one-tag/day';
// import './one-tag/date';
// import './one-tag/group';
// import './one-tag/admin';
// import './one-tag/break';
// import './one-tag/member';
// import './one-tag/subgroup';
// import './one-tag/location';
// import './one-tag/attachment';
// import "@@addons/widgets/buttons/link-buttons/link-button";
// import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
// import { DELETE_MeetingEvent } from '@@addons/network/attendance/setup/schedule/delete';
// import { CONSTANTS } from '@@addons/constants';


// @customElement("attendance-setup-view-one")
// export class AttendanceSetupViewOne extends LitElement {
//   constructor() { super(); }

//   @property({ type: Number })
//   public CLIENT_ID: number = 0;

//   @property({ type: Array })
//   public _data?: Array<string> = [];

//   @property({ type: Object })
//   private urlQueryParams?: { [k: string]: string; } = undefined;

//   @property({ type: Number })
//   private meetingEventId?: number = 0;

//   async connectedCallback() {
//     super.connectedCallback();
//     this.urlQueryParams = urlQueryParams();
//     this.getMeetingEventId();
//   }

//   disconnectedCallback() { }
//   static styles = [
//     css`
//    :host { display: block; }
//   `
//   ];

//   render() {
//     return html`${this.schedule}`;
//   }

//   private get schedule() {
//     return html`<div class="row">
//       <div class="col-md-12 my-2">
//         <link-button isblockcontent="false" aClass="" bClass="button primary mr-4"
//           href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
//           label="Edit Schedule"></link-button>
//         <mwc-icon-button class="ml-4 danger -mt-2 mb-2" icon="delete_forever" delete-this-item="${this.meetingEventId}"
//           @click="${this.deleteMeetingEvent}"></mwc-icon-button>
//         <attendance-setup-view-one-schedule CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-schedule>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-admin CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-admin>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-attachment CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-attachment>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-break CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-break>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-date CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-date>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-day CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-day>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-group CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-group>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-subgroup CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-subgroup>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-location CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-location>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-member CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-member>
//       </div>
//       <div class="col-md-6 my-2">
//         <attendance-setup-view-one-sms CLIENT_ID="${this.CLIENT_ID}" 
//           meetingEventId="${this.meetingEventId}">
//         </attendance-setup-view-one-sms>
//       </div>
//     </div>`;
//   }

//   firstUpdated() {
    
//   }

//   private getMeetingEventId() {
//     let meetingEventId = urlQueryParamsGet('meeting-event-id');
//     let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
//     this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
//     // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
//   }

//   async deleteMeetingEvent(e: PointerEvent) {
//     e.preventDefault();
//     // console.log({ e });
    
//     // @ts-ignore
//     const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
//     await DELETE_MeetingEvent(meetingEventId);
//   }

//   createRenderRoot() {
//     return this;
//   }
// }
