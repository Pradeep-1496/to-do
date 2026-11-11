import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
