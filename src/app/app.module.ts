import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { EJAngular2Module } from "ej-angular2";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule, EJAngular2Module.forRoot()

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
