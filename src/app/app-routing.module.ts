import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedChatComponent } from './pages/fixed-chat/fixed-chat.component';
import { CollapsibleChatComponent } from './pages/collapsible-chat/collapsible-chat.component';
import { DisplayType } from './shared/enums/display-type.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: DisplayType.Fixed,
    pathMatch: 'full',
  },
  {
    path: DisplayType.Fixed,
    component: FixedChatComponent
  },
  {
    path: DisplayType.Collapsible,
    component: CollapsibleChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
