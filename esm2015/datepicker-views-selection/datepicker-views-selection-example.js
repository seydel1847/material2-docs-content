/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
/** @type {?} */
const moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
/** @type {?} */
export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/**
 * \@title Datepicker emulating a Year and month picker
 */
export class DatepickerViewsSelectionExample {
    constructor() {
        this.date = new FormControl(moment());
    }
    /**
     * @param {?} normalizedYear
     * @return {?}
     */
    chosenYearHandler(normalizedYear) {
        /** @type {?} */
        const ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    }
    /**
     * @param {?} normlizedMonth
     * @param {?} datepicker
     * @return {?}
     */
    chosenMonthHandler(normlizedMonth, datepicker) {
        /** @type {?} */
        const ctrlValue = this.date.value;
        ctrlValue.month(normlizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
}
DatepickerViewsSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-views-selection-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n",
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
                styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    DatepickerViewsSelectionExample.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9kYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi9kYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU90RixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7QUFFbEMsT0FBTyxFQUFDLE9BQU8sSUFBSSxhQUFhLEVBQVMsTUFBTSxRQUFRLENBQUM7O01BRWxELE1BQU0sR0FBRyxhQUFhLElBQUksT0FBTzs7OztBQUl2QyxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxTQUFTO0tBQ3JCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFNBQVM7UUFDcEIsY0FBYyxFQUFFLFVBQVU7UUFDMUIsYUFBYSxFQUFFLElBQUk7UUFDbkIsa0JBQWtCLEVBQUUsV0FBVztLQUNoQztDQUNGOzs7O0FBZ0JELE1BQU0sT0FBTywrQkFBK0I7SUFiNUM7UUFjRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQWNuQyxDQUFDOzs7OztJQVpDLGlCQUFpQixDQUFDLGNBQXNCOztjQUNoQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsY0FBc0IsRUFBRSxVQUFpQzs7Y0FDcEUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNqQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLGtmQUFzRDtnQkFFdEQsU0FBUyxFQUFFO29CQUNULDRGQUE0RjtvQkFDNUYsOEZBQThGO29CQUM5RixpQ0FBaUM7b0JBQ2pDLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUM7b0JBRTVFLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7aUJBQ2xEOzthQUNGOzs7O0lBRUMsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNb21lbnREYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbi8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHJvbGx1cCBpcyB1c2VkLCBtb21lbnQgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgZGlmZmVyZW50bHkuXG4vLyBTaW5jZSBNb21lbnQuanMgZG9lc24ndCBoYXZlIGEgZGVmYXVsdCBleHBvcnQsIHdlIG5vcm1hbGx5IG5lZWQgdG8gaW1wb3J0IHVzaW5nIHRoZSBgKiBhc2Bcbi8vIHN5bnRheC4gSG93ZXZlciwgcm9sbHVwIGNyZWF0ZXMgYSBzeW50aGV0aWMgZGVmYXVsdCBtb2R1bGUgYW5kIHdlIHRodXMgbmVlZCB0byBpbXBvcnQgaXQgdXNpbmdcbi8vIHRoZSBgZGVmYXVsdCBhc2Agc3ludGF4LlxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQge2RlZmF1bHQgYXMgX3JvbGx1cE1vbWVudCwgTW9tZW50fSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSBfcm9sbHVwTW9tZW50IHx8IF9tb21lbnQ7XG5cbi8vIFNlZSB0aGUgTW9tZW50LmpzIGRvY3MgZm9yIHRoZSBtZWFuaW5nIG9mIHRoZXNlIGZvcm1hdHM6XG4vLyBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXG5leHBvcnQgY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdNTS9ZWVlZJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ01NL1lZWVknLFxuICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxuICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcbiAgfSxcbn07XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBlbXVsYXRpbmcgYSBZZWFyIGFuZCBtb250aCBwaWNrZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBgTW9tZW50RGF0ZUFkYXB0ZXJgIGNhbiBiZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IGltcG9ydGluZyBgTW9tZW50RGF0ZU1vZHVsZWAgaW4geW91clxuICAgIC8vIGFwcGxpY2F0aW9uJ3Mgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2ZcbiAgICAvLyBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7cHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRV19LFxuXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNWV9GT1JNQVRTfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlclZpZXdzU2VsZWN0aW9uRXhhbXBsZSB7XG4gIGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobW9tZW50KCkpO1xuXG4gIGNob3NlblllYXJIYW5kbGVyKG5vcm1hbGl6ZWRZZWFyOiBNb21lbnQpIHtcbiAgICBjb25zdCBjdHJsVmFsdWUgPSB0aGlzLmRhdGUudmFsdWU7XG4gICAgY3RybFZhbHVlLnllYXIobm9ybWFsaXplZFllYXIueWVhcigpKTtcbiAgICB0aGlzLmRhdGUuc2V0VmFsdWUoY3RybFZhbHVlKTtcbiAgfVxuXG4gIGNob3Nlbk1vbnRoSGFuZGxlcihub3JtbGl6ZWRNb250aDogTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPE1vbWVudD4pIHtcbiAgICBjb25zdCBjdHJsVmFsdWUgPSB0aGlzLmRhdGUudmFsdWU7XG4gICAgY3RybFZhbHVlLm1vbnRoKG5vcm1saXplZE1vbnRoLm1vbnRoKCkpO1xuICAgIHRoaXMuZGF0ZS5zZXRWYWx1ZShjdHJsVmFsdWUpO1xuICAgIGRhdGVwaWNrZXIuY2xvc2UoKTtcbiAgfVxufVxuIl19