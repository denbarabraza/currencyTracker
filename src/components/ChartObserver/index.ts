import { IObserver } from '@/components/ChartObserver/interface';
import { PopUp } from '@/components/ChartPopUp';
import { ICurrencyChartResponse } from '@/types/api';

export class Subject {
  private observers: IObserver[] = [];

  private data: ICurrencyChartResponse[];

  constructor(data: ICurrencyChartResponse[]) {
    this.data = data;
  }

  public processData(): void {
    this.notifyObservers();
  }

  public registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

export class ChartObserver implements IObserver {
  private subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  public update(): void {
    const activePopUp = new PopUp({});

    activePopUp.renderComponent();
  }

  public unsubscribe(): void {
    this.subject.removeObserver(this);
  }
}
