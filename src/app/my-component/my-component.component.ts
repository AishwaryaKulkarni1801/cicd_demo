import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  // accept any because template binding may produce string/event values; coerce in code
  num1: any = 0;
  num2: any = 0;
  result: number | null = null;

  calculate(operator: string): void {
    const a = Number(this.num1);
    const b = Number(this.num2);

    switch (operator) {
      case '+':
        this.result = a + b;
        break;
      case '-':
        this.result = a - b;
        break;
      case '*':
        this.result = a * b;
        break;
      case '/':
        this.result = b !== 0 ? a / b : NaN;
        break;
      default:
        this.result = null;
    }
  }
}

