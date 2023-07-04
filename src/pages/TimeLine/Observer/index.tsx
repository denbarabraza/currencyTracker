import React, { PureComponent } from 'react';

import { IChartObserver } from '@/pages/TimeLine/Observer/interface';
import { Container, PopUpItem } from '@/pages/TimeLine/Observer/style';
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

export class ChartObserver extends PureComponent<{}, IChartObserver> {
  private timerId: any = null;

  constructor(props: {}) {
    super(props);
    this.state = { chartBuilt: false };
    this.timerId = null;
  }

  componentDidMount() {
    this.setState({ chartBuilt: true });
    this.timerId = setTimeout(() => {
      this.setState({ chartBuilt: false });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  public update(): void {
    console.log('update отработал');
  }

  render(): React.ReactElement {
    return (
      <Container>
        {this.state.chartBuilt ? (
          <PopUpItem>The graph has been successfully built</PopUpItem>
        ) : null}
      </Container>
    );
  }
}
