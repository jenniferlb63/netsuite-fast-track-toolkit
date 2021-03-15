/**
 * NetSuite Customer Payment (customerpayment) record
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Sublist", "N/record", "./Transaction", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerPaymentBase = exports.ApplySublist = void 0;
    var Sublist_1 = require("./Sublist");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Record_1 = require("./Record");
    var ApplySublist = /** @class */ (function (_super) {
        __extends(ApplySublist, _super);
        function ApplySublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "amount", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ApplySublist.prototype, "apply", void 0);
        __decorate([
            Sublist_1.SublistFieldType.date
        ], ApplySublist.prototype, "applydate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "createdfrom", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "disc", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "doc", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "discamt", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "internalid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ApplySublist.prototype, "job", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], ApplySublist.prototype, "line", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "refnum", void 0);
        __decorate([
            Sublist_1.SublistFieldType.currency
        ], ApplySublist.prototype, "total", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ApplySublist.prototype, "url", void 0);
        return ApplySublist;
    }(Sublist_1.SublistLine));
    exports.ApplySublist = ApplySublist;
    /**
     * Customer Payment Record
     */
    var CustomerPaymentBase = /** @class */ (function (_super) {
        __extends(CustomerPaymentBase, _super);
        function CustomerPaymentBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomerPaymentBase.recordType = function () { return record.Type.CUSTOMER_PAYMENT; };
        __decorate([
            Record_1.FieldType.select
        ], CustomerPaymentBase.prototype, "customer", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerPaymentBase.prototype, "checknum", void 0);
        __decorate([
            Record_1.FieldType.currency
        ], CustomerPaymentBase.prototype, "payment", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerPaymentBase.prototype, "paymentmethod", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CustomerPaymentBase.prototype, "autoapply", void 0);
        __decorate([
            Record_1.FieldType.sublist(ApplySublist)
        ], CustomerPaymentBase.prototype, "apply", void 0);
        return CustomerPaymentBase;
    }(Transaction_1.TransactionBase));
    exports.CustomerPaymentBase = CustomerPaymentBase;
});
