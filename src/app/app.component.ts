import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroPlus, heroArrowPath, heroXMark } from '@ng-icons/heroicons/outline';
import { heroPaperAirplaneSolid } from '@ng-icons/heroicons/solid';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';

export interface Chat {
  from: "user" | "bot",
  message: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIcon,
    MarkdownModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ heroPaperAirplaneSolid, heroPlus, heroArrowPath, heroXMark })]
})
export class AppComponent {
  constructor() {}
}
