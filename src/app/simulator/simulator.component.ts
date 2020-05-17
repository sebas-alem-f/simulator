import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  constructor() {
    this.tabs = this.tabs.map((item) => {
      item.amount.value = item.amount.min;
      item.time.value = item.time.min;
      this.calcFrench(item);
      return item;
    });
  }

  tabs = [
    {
      active: true,
      name: 'Ordinario',
      icon: 'shop',
      interestRate: 15.8,
      paymentMonth: 0,
      amount: {
        value: 0,
        max: 80000,
        min: 5000,
        marks: {
          5000: '<span nz-typography>$5000</span>',
          80000: {
            label: '<span nz-typography><strong>$80000</strong></span>',
          }
        }
      },
      time: {
        value: 0,
        max: 120,
        min: 12,
        marks: {
          12: '<span nz-typography>&nbsp;12&nbsp;meses</span>',
          120: {
            label: '<span nz-typography><strong>120&nbsp;meses</strong></span>',
          }
        }
      }
    },
    {
      active: true,
      name: 'Sobre Ruedas',
      icon: 'car',
      interestRate: 16.06,
      paymentMonth: 0,
      amount: {
        value: 0,
        max: 30000,
        min: 5000,
        marks: {
          5000: '<span nz-typography>$5000</spannz-typography>',
          30000: {
            label: '<span nz-typography><strong>$30000</strong></span>',
          }
        }
      },
      time: {
        value: 0,
        max: 120,
        min: 36,
        marks: {
          36: '<span nz-typography>&nbsp;36&nbsp;meses</span>',
          120: {
            label: '<span nz-typography><strong>120&nbsp;meses</strong></span>',
          }
        }
      }
    },
    {
      active: true,
      name: 'Educativo',
      icon: 'highlight',
      interestRate: 9.10,
      paymentMonth: 0,
      amount: {
        value: 0,
        max: 20000,
        min: 3000,
        marks: {
          3000: '<span nz-typography>$3000</span>',
          20000: {
            label: '<span nz-typography><strong>$20000</strong></span>',
          }
        }
      },
      time: {
        value: 0,
        max: 60,
        min: 12,
        marks: {
          12: '<span nz-typography>&nbsp;12&nbsp;meses</span>',
          60: {
            label: '<span nz-typography><strong>60&nbsp;meses</strong></span>',
          }
        }
      }
    },
    {
      active: true,
      name: 'De Emergencia',
      icon: 'medicine-box',
      interestRate: 15.8,
      paymentMonth: 0,
      amount: {
        value: 0,
        max: 5000,
        min: 1000,
        marks: {
          1000: '<span nz-typography>$1000</span>',
          5000: {
            label: '<span nz-typography><strong>$5000</strong></span>',
          }
        }
      },
      time: {
        value: 0,
        max: 48,
        min: 12,
        marks: {
          12: '<span nz-typography>&nbsp;12&nbsp;meses</span>',
          48: {
            label: '<span nz-typography><strong>48&nbsp;meses</strong></span>',
          }
        }
      }
    },
  ];

  ngOnInit(): void {
  }

  calcFrench(item) {
    const {interestRate} = item;
    const {value: amount} = item.amount;
    const {value: time} = item.time;
    const interestRateAnnual = interestRate / 100;
    const interestRateMonth = interestRateAnnual / 12;
    const legalReserve = amount * 0.03;
    const initialAmount = amount + legalReserve;

    item.paymentMonth = initialAmount * (interestRateMonth / (1 - Math.pow(1 + interestRateMonth, -time)));
  }

}
