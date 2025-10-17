import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, RouterLink,RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
