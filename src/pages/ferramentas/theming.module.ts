import { FerramentasPage } from './ferramentas';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
        FerramentasPage,
    ],
    imports: [
        IonicPageModule.forChild(FerramentasPage),
    ],
    exports: [
        FerramentasPage
      
    ]
})

export class ThemingPageModule { };
