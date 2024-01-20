(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\letic\source\repos\angular-chatbot\src\main.ts */"zUnb");


/***/ }),

/***/ "1+r1":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");









class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









const _c0 = ["messageContainer"];
function ChatComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "message " + message_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2.text, " ");
} }
class Message {
}
var MessageType;
(function (MessageType) {
    MessageType["Bot"] = "bot";
    MessageType["User"] = "user";
    MessageType["Loading"] = "loading";
})(MessageType || (MessageType = {}));
class ChatComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.messages = [];
        this.canSendMessage = true;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            message: ['']
        });
        this.getBotMessage();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    onClickSendMessage() {
        const message = this.form.get('message').value;
        if (message && this.canSendMessage) {
            const userMessage = { text: message, type: MessageType.User };
            this.messages.push(userMessage);
            this.form.get('message').setValue('');
            this.form.updateValueAndValidity();
            this.getBotMessage();
        }
    }
    getBotMessage() {
        this.canSendMessage = false;
        const waitMessage = { type: MessageType.Loading };
        this.messages.push(waitMessage);
        setTimeout(() => {
            this.messages.pop();
            const botMessage = { text: 'Hello! How can I help you?', type: MessageType.Bot };
            this.messages.push(botMessage);
            this.canSendMessage = true;
        }, 2000);
    }
    onClickEnter(event) {
        event.preventDefault();
        this.onClickSendMessage();
    }
    scrollToBottom() {
        this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageContainer = _t.first);
    } }, inputs: { display: "display" }, decls: 19, vars: 4, consts: [[1, "chat-container", 3, "formGroup"], [3, "ngClass"], [1, "chat-header"], ["mat-card-avatar", "", "src", "./assets/bot.png", 1, "chat-icon"], [1, "chat-title"], [1, "chat-subtitle"], [1, "status-icon"], [1, "chat-content"], ["messageContainer", ""], ["class", "messages", 4, "ngFor", "ngForOf"], [1, "chat-actions"], ["appearance", "none", 1, "chat-form"], ["matInput", "", "type", "text", "placeholder", "Type message...", "formControlName", "message", 1, "chat-input", 3, "keydown.enter"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Send", 1, "send-button", 3, "disableRipple", "click"], [1, "send-icon"], [1, "messages"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Chatbot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatComponent_div_12_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_textarea_keydown_enter_15_listener($event) { return ctx.onClickEnter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_16_listener() { return ctx.onClickSendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["@charset \"UTF-8\";\n.chat-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.fixed-chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  height: 70%;\n  position: fixed;\n  border-radius: 8px;\n  margin-top: 7vh;\n}\n.collapsible-chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  height: 65%;\n  position: fixed;\n  top: 20%;\n  right: 4%;\n  border-radius: 8px;\n}\n.chat-header[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #465461;\n  color: #ECF3F4;\n  border-radius: 8px;\n  padding: 5%;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-icon[_ngcontent-%COMP%] {\n  filter: invert(100%);\n}\n.chat-header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 0px !important;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-subtitle[_ngcontent-%COMP%] {\n  color: #ECF3F4;\n  margin-bottom: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 4px;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-subtitle[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  background-color: greenyellow;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n}\n.chat-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n  margin: 5%;\n}\n.chat-content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  width: 100%;\n}\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px 10px 6px 10px;\n  border-radius: 12px;\n  min-height: 36px;\n  min-width: 5%;\n  max-width: 40%;\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 12px;\n  word-break: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n}\n.message.bot[_ngcontent-%COMP%] {\n  background-color: #729CA2;\n  color: #ECF3F4;\n  border-top-left-radius: 0px;\n  margin-right: auto;\n  margin-left: 0;\n}\n.message.user[_ngcontent-%COMP%] {\n  background-color: #ECF3F4;\n  color: #729CA2;\n  border-top-right-radius: 0px;\n  margin-left: auto;\n  margin-right: 0;\n}\n.message.loading[_ngcontent-%COMP%] {\n  background-color: #729CA2;\n  color: #ECF3F4;\n  border-top-left-radius: 0px;\n  margin-right: auto;\n  margin-left: 0;\n}\n.message.loading[_ngcontent-%COMP%]:after {\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: bottom;\n  animation: loading-message steps(4, end) 1500ms infinite;\n  content: \"\u2026\";\n  width: 0px;\n  font-size: 20px;\n  color: #ECF3F4;\n}\n@keyframes loading-message {\n  to {\n    width: 18px;\n  }\n}\n.chat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 100px;\n}\n.chat-actions[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 60%;\n  background-color: #ECF3F4;\n  margin-bottom: 5%;\n  border-radius: 20px;\n}\n.chat-actions[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%] {\n  resize: none;\n  height: 18px;\n  font-size: 14px;\n  overflow: scroll;\n  color: #465461;\n}\n.chat-actions[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  color: #729CA2;\n}\n.chat-actions[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   .send-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media only screen and (max-width: 700px) {\n  [class*=fixed-chat][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  [class*=collapsible-chat][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSx5QkM5Qkk7RUQrQkosY0M1Qkk7RUQ2Qkosa0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFFSTtFQUVJLG9CQUFBO0FBQVI7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBRFI7QUFJSTtFQUNJLGNDNUNBO0VENkNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBRlI7QUFJUTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZaO0FBT0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFKSjtBQU1JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSlI7QUFRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSxhQUFBO0FBTEo7QUFPSTtFQUNJLHlCQzNGRDtFRDRGQyxjQzFGQTtFRDJGQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxSO0FBUUk7RUFDSSx5QkNqR0E7RURrR0EsY0NwR0Q7RURxR0MsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVNJO0VBQ0kseUJDM0dEO0VENEdDLGNDMUdBO0VEMkdBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUFI7QUFVSTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUVBLHdEQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0N6SEE7QURpSFI7QUFVUTtFQUNJO0lBQ0ksV0FBQTtFQVJkO0FBQ0Y7QUFtQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBWEo7QUFhSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJDbEpBO0VEbUpBLGlCQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWNJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQy9KQTtBRG1KUjtBQWVJO0VBQ0ksY0NsS0Q7QURxSlA7QUFlUTtFQUNJLGVBQUE7QUFiWjtBQWtCQTtFQUNJO0lBQ0UsVUFBQTtFQWZKOztFQWtCRTtJQUNJLFVBQUE7RUFmTjtBQUNGIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2hhdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5maXhlZC1jaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA3MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiA3dmg7XG59XG5cbi5jb2xsYXBzaWJsZS1jaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiA2NSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMCU7XG4gIHJpZ2h0OiA0JTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uY2hhdC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY1NDYxO1xuICBjb2xvcjogI0VDRjNGNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA1JTtcbn1cbi5jaGF0LWhlYWRlciAuY2hhdC1pY29uIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG4uY2hhdC1oZWFkZXIgLmNoYXQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNoYXQtaGVhZGVyIC5jaGF0LXN1YnRpdGxlIHtcbiAgY29sb3I6ICNFQ0YzRjQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG4uY2hhdC1oZWFkZXIgLmNoYXQtc3VidGl0bGUgLnN0YXR1cy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbi5jaGF0LWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IDUlO1xufVxuLmNoYXQtY29udGVudCAubWVzc2FnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggMTBweCA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgbWluLXdpZHRoOiA1JTtcbiAgbWF4LXdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuLm1lc3NhZ2UuYm90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyOUNBMjtcbiAgY29sb3I6ICNFQ0YzRjQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tZXNzYWdlLnVzZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGM0Y0O1xuICBjb2xvcjogIzcyOUNBMjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tZXNzYWdlLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI5Q0EyO1xuICBjb2xvcjogI0VDRjNGNDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm1lc3NhZ2UubG9hZGluZzphZnRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmctbWVzc2FnZSBzdGVwcyg0LCBlbmQpIDE1MDBtcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nLW1lc3NhZ2Ugc3RlcHMoNCwgZW5kKSAxNTAwbXMgaW5maW5pdGU7XG4gIGNvbnRlbnQ6IFwi4oCmXCI7XG4gIHdpZHRoOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNFQ0YzRjQ7XG59XG5Aa2V5ZnJhbWVzIGxvYWRpbmctbWVzc2FnZSB7XG4gIHRvIHtcbiAgICB3aWR0aDogMThweDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctbWVzc2FnZSB7XG4gIHRvIHtcbiAgICB3aWR0aDogMThweDtcbiAgfVxufVxuXG4uY2hhdC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLmNoYXQtYWN0aW9ucyAuY2hhdC1mb3JtIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0YzRjQ7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNoYXQtYWN0aW9ucyAuY2hhdC1pbnB1dCB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGNvbG9yOiAjNDY1NDYxO1xufVxuLmNoYXQtYWN0aW9ucyAuc2VuZC1idXR0b24ge1xuICBjb2xvcjogIzcyOUNBMjtcbn1cbi5jaGF0LWFjdGlvbnMgLnNlbmQtYnV0dG9uIC5zZW5kLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgW2NsYXNzKj1maXhlZC1jaGF0XSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIFtjbGFzcyo9Y29sbGFwc2libGUtY2hhdF0ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn0iLCIkb3JhbmdlOiAjRkY4OTNCO1xyXG4kYmxhY2s6ICM0NjU0NjE7XHJcbiRibHVlOiAjNzI5Q0EyO1xyXG4kbGlnaHRfYmx1ZTogI0M0RENERjtcclxuJHdoaXRlOiAjRUNGM0Y0OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { messageContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageContainer']
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    email: 'leticiamichelin@outlook.com',
    githubUrl: 'https://github.com/leticiabma'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "OD22":
/*!**********************************************************!*\
  !*** ./src/app/pages/fixed-chat/fixed-chat.component.ts ***!
  \**********************************************************/
/*! exports provided: FixedChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedChatComponent", function() { return FixedChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/display-type.enum */ "Sy+D");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chat/chat.component */ "3tD2");




class FixedChatComponent {
    constructor() {
        this.displayType = src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_1__["DisplayType"];
    }
}
FixedChatComponent.ɵfac = function FixedChatComponent_Factory(t) { return new (t || FixedChatComponent)(); };
FixedChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FixedChatComponent, selectors: [["app-fixed-chat"]], decls: 1, vars: 1, consts: [[3, "display"]], template: function FixedChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.displayType.Fixed);
    } }, directives: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXhlZC1jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fixed-chat',
                templateUrl: './fixed-chat.component.html',
                styleUrls: ['./fixed-chat.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "P0tK":
/*!**********************************************************************!*\
  !*** ./src/app/pages/collapsible-chat/collapsible-chat.component.ts ***!
  \**********************************************************************/
/*! exports provided: CollapsibleChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleChatComponent", function() { return CollapsibleChatComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/display-type.enum */ "Sy+D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/chat/chat.component */ "3tD2");








function CollapsibleChatComponent_app_chat_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-chat", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("display", ctx_r0.displayType.Collapsible)("@fadeAnimation", undefined);
} }
class CollapsibleChatComponent {
    constructor() {
        this.botIconPath = './assets/bot.png';
        this.chatIconPath = './assets/chat.png';
        this.isOpen = false;
        this.iconSrc = this.botIconPath;
        this.iconState = 'default';
        this.displayType = src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__["DisplayType"];
    }
    onChangeChatState() {
        this.isOpen = !this.isOpen;
        this.iconState = (this.iconState === 'default' ? 'rotated' : 'default');
        if (this.isOpen)
            this.iconSrc = this.chatIconPath;
        else
            this.iconSrc = this.botIconPath;
    }
}
CollapsibleChatComponent.ɵfac = function CollapsibleChatComponent_Factory(t) { return new (t || CollapsibleChatComponent)(); };
CollapsibleChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CollapsibleChatComponent, selectors: [["app-collapsible-chat"]], decls: 3, vars: 5, consts: [["matSuffix", "", "mat-fab", "", 1, "chat-button", 3, "disableRipple", "click"], [3, "src", "ngClass"], [3, "display", 4, "ngIf"], [3, "display"]], template: function CollapsibleChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollapsibleChatComponent_Template_button_click_0_listener() { return ctx.onChangeChatState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CollapsibleChatComponent_app_chat_2_Template, 1, 2, "app-chat", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("@rotateAnimation", ctx.iconState)("ngClass", ctx.isOpen ? "button-icon chat" : "button-icon bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]], styles: [".chat-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 5%;\n  right: 3%;\n  background-color: #465461;\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  filter: invert(100%);\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon.chat[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon.bot[_ngcontent-%COMP%] {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb2xsYXBzaWJsZS1jaGF0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx5QkNSSTtBRE9SO0FBR0k7RUFFSSxvQkFBQTtBQURSO0FBR1E7RUFDSSxVQUFBO0FBRFo7QUFJUTtFQUNJLFVBQUE7QUFGWiIsImZpbGUiOiJjb2xsYXBzaWJsZS1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy9jb2xvcnMnO1xyXG5cclxuLmNoYXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgcmlnaHQ6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG5cclxuICAgIC5idXR0b24taWNvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcclxuICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxuXHJcbiAgICAgICAgJi5jaGF0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYm90IHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkb3JhbmdlOiAjRkY4OTNCO1xyXG4kYmxhY2s6ICM0NjU0NjE7XHJcbiRibHVlOiAjNzI5Q0EyO1xyXG4kbGlnaHRfYmx1ZTogI0M0RENERjtcclxuJHdoaXRlOiAjRUNGM0Y0OyJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotateAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(-360deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, }))
                ])
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapsibleChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-collapsible-chat',
                templateUrl: './collapsible-chat.component.html',
                styleUrls: ['./collapsible-chat.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotateAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(-360deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, }))
                        ])
                    ]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy+D":
/*!***************************************************!*\
  !*** ./src/app/shared/enums/display-type.enum.ts ***!
  \***************************************************/
/*! exports provided: DisplayType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayType", function() { return DisplayType; });
var DisplayType;
(function (DisplayType) {
    DisplayType["Fixed"] = "fixed-chat";
    DisplayType["Collapsible"] = "collapsible-chat";
})(DisplayType || (DisplayType = {}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/enums/display-type.enum */ "Sy+D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");







function AppComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copied email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(location) {
        this.location = location;
        this.email = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].email;
        this.copyEmail = false;
        this.displayType = _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__["DisplayType"];
        this.display = _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__["DisplayType"].Fixed;
        const path = this.location.path().split('/')[1];
        this.display = path ? path : this.display;
    }
    onClickCopyEmail() {
        this.copyEmail = true;
        setTimeout(() => {
            this.copyEmail = false;
        }, 2000);
    }
    onClickRedirectGithub() {
        window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].githubUrl, '_blank');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 8, consts: [[1, "full-width", "full-height"], [1, "app-header", "display-flex", "-row", "-center"], [1, "header-title", "display-flex", "-center"], [1, "header-actions", "display-flex", "-center"], [1, "chat-buttons"], [1, "button-container"], ["id", "fixed-chat", "type", "radio", "name", "display-button", 3, "value", "routerLink", "checked"], ["for", "fixed-chat"], ["id", "collapsible-chat", "type", "radio", "name", "display-button", 3, "value", "routerLink", "checked"], ["for", "collapsible-chat"], [1, "app-socials", "display-flex", "full-height"], [1, "socials-icons", "display-flex", "-column", "-center", "full-height"], [1, "display-flex", "-center"], ["src", "./assets/github-logo.png", 1, "icon", 3, "click"], ["src", "./assets/mail.png", 1, "icon", 3, "cdkCopyToClipboard", "click"], ["class", "copy-alert", 4, "ngIf"], [1, "copy-alert"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Angular Chatbot Example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Collapsible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_17_listener() { return ctx.onClickRedirectGithub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_19_listener() { return ctx.onClickCopyEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_span_20_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.displayType.Fixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.displayType.Fixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.display === ctx.displayType.Fixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.displayType.Collapsible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.displayType.Collapsible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.display === ctx.displayType.Collapsible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.copyEmail);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["CdkCopyToClipboard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".app-header[_ngcontent-%COMP%] {\n  height: 15%;\n  background-color: #465461;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.app-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 100%;\n  text-align: center;\n  color: #ECF3F4;\n  font-size: 2vh;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 3%;\n  height: 30%;\n  border-radius: 0;\n  border: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 15%;\n  text-align: center;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.8vh;\n  padding: 0.5em 0.5em;\n  cursor: pointer;\n  transition: all 0.3s;\n  background: #ECF3F4;\n  border-radius: 2px;\n  color: #465461;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: #729CA2;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%] {\n  width: 10%;\n  justify-content: center;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .socials-icons[_ngcontent-%COMP%] {\n  gap: 20%;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  filter: invert(100%);\n  width: 2.5vh;\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .copy-alert[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16%;\n  width: 10%;\n  color: #729CA2;\n  font-size: 2vh;\n  font-weight: 500;\n  animation: copy-alert 2s 1;\n  -webkit-animation: copy-alert 2s 1;\n  animation-fill-mode: forwards;\n  animation-delay: 2s;\n  -webkit-animation-delay: 1s;\n  \n  -webkit-animation-fill-mode: forwards;\n}\n@keyframes copy-alert {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EseUJDSEk7RURJSiw4QkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNDUkE7RURTQSxjQUFBO0FBRFI7QUFJSTtFQUNJLFVBQUE7QUFGUjtBQUlRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGWjtBQUlZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRmhCO0FBSWdCO0VBQ0ksYUFBQTtBQUZwQjtBQUtnQjtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkN4Q1o7RUR5Q1ksa0JBQUE7RUFDQSxjQzdDWjtBRDBDUjtBQU1nQjtFQUNJLFlBQUE7QUFKcEI7QUFPZ0I7RUFDSSxtQkNwRGI7QUQrQ1A7QUFXSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQVRSO0FBV1E7RUFDSSxRQUFBO0FBVFo7QUFZUTtFQUVJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFWWjtBQWFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNDN0VMO0VEOEVLLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUVBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBNEIsc0JBQUE7RUFDNUIscUNBQUE7QUFYWjtBQWNRO0VBQ0k7SUFBTSxVQUFBO0VBWGhCO0VBWVU7SUFBSSxVQUFBO0VBVGQ7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL2NvbG9ycyc7XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWFjdGlvbnMge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgIC5jaGF0LWJ1dHRvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMyU7XHJcbiAgICAgICAgICAgIGhlaWdodDozMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQgeyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjh2aDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1zb2NpYWxzIHtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuc29jaWFscy1pY29uc3tcclxuICAgICAgICAgICAgZ2FwOiAyMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMi41dmg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3B5LWFsZXJ0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmNvcHktYWxlcnQgMnMgMTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246Y29weS1hbGVydCAycyAxO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OjJzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheToxczsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQGtleWZyYW1lcyBjb3B5LWFsZXJ0e1xyXG4gICAgICAgICAgICBmcm9tIHtvcGFjaXR5IDoxO31cclxuICAgICAgICAgICAgdG8ge29wYWNpdHkgOjA7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29weS1hbGVydHtcclxuICAgICAgICAgICAgZnJvbSB7b3BhY2l0eSA6MTt9XHJcbiAgICAgICAgICAgIHRvIHtvcGFjaXR5IDowO31cclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59IiwiJG9yYW5nZTogI0ZGODkzQjtcclxuJGJsYWNrOiAjNDY1NDYxO1xyXG4kYmx1ZTogIzcyOUNBMjtcclxuJGxpZ2h0X2JsdWU6ICNDNERDREY7XHJcbiR3aGl0ZTogI0VDRjNGNDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material.module */ "1+r1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/fixed-chat/fixed-chat.component */ "OD22");
/* harmony import */ var _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/collapsible-chat/collapsible-chat.component */ "P0tK");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_7__["FixedChatComponent"],
        _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_8__["CollapsibleChatComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_7__["FixedChatComponent"],
                    _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_8__["CollapsibleChatComponent"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/fixed-chat/fixed-chat.component */ "OD22");
/* harmony import */ var _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/collapsible-chat/collapsible-chat.component */ "P0tK");
/* harmony import */ var _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/enums/display-type.enum */ "Sy+D");







const routes = [
    {
        path: '',
        redirectTo: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__["DisplayType"].Fixed,
        pathMatch: 'full',
    },
    {
        path: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__["DisplayType"].Fixed,
        component: _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_2__["FixedChatComponent"]
    },
    {
        path: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__["DisplayType"].Collapsible,
        component: _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_3__["CollapsibleChatComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map