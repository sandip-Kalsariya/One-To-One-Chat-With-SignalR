import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as bootstrap from "bootstrap"

//Components
import { BackofficeComponent } from './backoffice.component';

const routes: Routes = [
    {
        path: '',
        component: BackofficeComponent,
        children: [
            { path: '', redirectTo: 'chat' },
            { path: 'chat',
             loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    bootstrap: [BackofficeComponent],
    exports: [RouterModule]
})

export class BackofficeModule { }