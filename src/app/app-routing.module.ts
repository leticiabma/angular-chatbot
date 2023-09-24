import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedChatComponent } from './pages/fixed-chat/fixed-chat.component';
import { CollapsibleChatComponent } from './pages/collapsible-chat/collapsible-chat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fixed-chat',
    pathMatch: 'full',
  },
  {
    path: 'fixed-chat',
    component: FixedChatComponent
  },
  {
    path: 'collapsible-chat',
    component: CollapsibleChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
