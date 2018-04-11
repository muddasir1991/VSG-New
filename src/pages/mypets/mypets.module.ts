import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MypetsPage } from './mypets';

@NgModule({
  declarations: [
    MypetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MypetsPage),
  ],
})
export class MypetsPageModule {}
