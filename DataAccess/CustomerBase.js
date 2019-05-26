/**
 * NS Base customer record - contains definitions for most of the built in fields
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        define(["require", "exports", "./Record", "N/record", "./Sublist", "./AddressBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Sublist_1 = require("./Sublist");
    var AddressBase_1 = require("./AddressBase");
    /**
     * The address _sublist_ on customer records, not to be confused with the Address _subrecord_.
     * Customer address info is split between this sublist and the subrecord pointed to by the _addressbook_ field.
     */
    var AddressSublist = /** @class */ (function (_super) {
        __extends(AddressSublist, _super);
        function AddressSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(AddressSublist.prototype, "addressbookaddress", {
            /**
             * The Address subrecord associated to this line
             *
             * Extend this class and override this property
             * if you want to replace AddressBase with a custom Address subclass.
             *
             * @example
             export class MyCustomAddressClass extends AddressBase {
             }
         
             export class MyAddressSublist extends AddressSublist {
               get addressbookaddress() {
                  return new MyCustomAddressClass(this.nsrecord.getSublistSubrecord({
                  sublistId:'addressbook',
                  fieldId:'addressbookaddress',
                  line: this._line
                  }))
               }
            }
             */
            get: function () {
                return new AddressBase_1.AddressBase(this.nsrecord.getSublistSubrecord({
                    sublistId: 'addressbook',
                    fieldId: 'addressbookaddress',
                    line: this._line
                }));
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "attention", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "defaultbilling", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "defaultshipping", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "displaystate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], AddressSublist.prototype, "dropdownstate", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], AddressSublist.prototype, "id", void 0);
        __decorate([
            Sublist_1.SublistFieldType.integernumber
        ], AddressSublist.prototype, "internalid", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "isresidential", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "label", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], AddressSublist.prototype, "override", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "phone", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "state", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], AddressSublist.prototype, "zip", void 0);
        return AddressSublist;
    }(Sublist_1.SublistLine));
    exports.AddressSublist = AddressSublist;
    var CustomerBase = /** @class */ (function (_super) {
        __extends(CustomerBase, _super);
        function CustomerBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomerBase.recordType = record.Type.CUSTOMER;
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "accountnumber", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "category", void 0);
        __decorate([
            Record_1.FieldType.textarea
        ], CustomerBase.prototype, "comments", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "companyname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "currency", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "customform", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], CustomerBase.prototype, "datecreated", void 0);
        __decorate([
            Record_1.FieldType.email
        ], CustomerBase.prototype, "email", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "entityid", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "entitystatus", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "externalid", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "fax", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "firstname", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CustomerBase.prototype, "isinactive", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "isperson", void 0);
        __decorate([
            Record_1.FieldType.datetime
        ], CustomerBase.prototype, "lastmodifieddate", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "language", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "lastname", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "parent", void 0);
        __decorate([
            Record_1.FieldType.freeformtext
        ], CustomerBase.prototype, "phone", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "salesrep", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "subsidiary", void 0);
        __decorate([
            Record_1.FieldType.checkbox
        ], CustomerBase.prototype, "taxable", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "taxitem", void 0);
        __decorate([
            Record_1.FieldType.select
        ], CustomerBase.prototype, "terms", void 0);
        __decorate([
            Record_1.FieldType.sublist(AddressSublist)
        ], CustomerBase.prototype, "addressbook", void 0);
        return CustomerBase;
    }(Record_1.NetsuiteRecord));
    exports.CustomerBase = CustomerBase;
    var ContactsSublist = /** @class */ (function (_super) {
        __extends(ContactsSublist, _super);
        function ContactsSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ContactsSublist.prototype, "contact", void 0);
        __decorate([
            Sublist_1.SublistFieldType.email
        ], ContactsSublist.prototype, "email", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ContactsSublist.prototype, "giveaccess", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ContactsSublist.prototype, "passwordconfirm", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ContactsSublist.prototype, "role", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ContactsSublist.prototype, "sendemail", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ContactsSublist.prototype, "strength", void 0);
        return ContactsSublist;
    }(Sublist_1.SublistLine));
    exports.ContactsSublist = ContactsSublist;
});
