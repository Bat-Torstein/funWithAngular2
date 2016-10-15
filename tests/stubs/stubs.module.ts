import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({ selector: 'item-list', template: '' })
class ItemListStub { }

@Component({ selector: 'md-spinner', template: '' })
class SpinnerStub { }

@Component({ selector: 'confirm-dialog', template: '' })
class ConfirmDialogStub { }

@Component({ selector: 'attribute-dialog', template: '' })
class AttributeDialogStub { }

@Component({ selector: 'app-overview', template: '' })
class OverviewStub { }


@NgModule({
    declarations: [
        ItemListStub,
        SpinnerStub,
        ConfirmDialogStub,
        AttributeDialogStub,
        OverviewStub
    ],
    exports: [
        ItemListStub,
        SpinnerStub,
        ConfirmDialogStub,
        AttributeDialogStub,
        OverviewStub
    ]
})
export class StubsModule { }