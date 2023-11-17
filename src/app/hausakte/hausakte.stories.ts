import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HausakteComponent } from './hausakte.component'; // Pfad zur Komponentendatei
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'; // Hier ist der korrekte Import für MatCardModule
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

export default {
  title: 'Hausakte Component',
  component: HausakteComponent,
  decorators: [
    moduleMetadata({
      declarations: [HausakteComponent],
      imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
      ],
    }),
  ],
};

export const Default = () => ({
  component: HausakteComponent,
});
