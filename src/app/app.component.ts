import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { MenuModule } from 'src/app/components/menu/menu.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'v18';
}
