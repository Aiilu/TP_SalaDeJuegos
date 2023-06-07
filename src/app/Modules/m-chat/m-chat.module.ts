import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MChatRoutingModule } from './m-chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    MChatRoutingModule,
    FormsModule
  ]
})
export class MChatModule { }
