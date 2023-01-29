import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryLeakedExampleComponent } from './memory-leaked-example/memory-leaked-example.component';
import { NoMemoryLeakedExampleComponent } from './no-memory-leaked-example/no-memory-leaked-example.component';
import { ParentMemoryLeakedComponent } from './memory-leaked-example/parent-memory-leaked/parent-memory-leaked.component';
import { ParentNoMemoryLeakedComponent } from './no-memory-leaked-example/parent-no-memory-leaked/parent-no-memory-leaked.component';

const routes: Routes = [
    {
        path: 'memory-leaked-example',
        component: MemoryLeakedExampleComponent
    },
    {
        path: 'no-memory-leaked-example',
        component: NoMemoryLeakedExampleComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    declarations: [
        MemoryLeakedExampleComponent,
        ParentMemoryLeakedComponent,
        NoMemoryLeakedExampleComponent,
        ParentNoMemoryLeakedComponent
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }