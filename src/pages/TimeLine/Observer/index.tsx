import { ICurrencyChartResponse } from '@/types/api';

export class ChartSubject {
  private observers: ChartObserver[] = [];

  public attach(observer: ChartObserver): void {
    this.observers.push(observer);
  }

  public detach(observer: ChartObserver): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  public buildChart(data: ICurrencyChartResponse[]) {
    this.notify();
  }

  private notify(): void {
    this.observers.forEach(observer => observer.update());
  }
}

export class ChartObserver {
  public update(): void {
    alert('The graph has been successfully built');
  }
}
