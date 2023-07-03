import React, { Component, PureComponent } from 'react';

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

interface IChartObserver {
  chartBuilt: boolean;
}

export class ChartObserver extends PureComponent<{}, IChartObserver> {
  private timerId: any = null;

  constructor(props: {}) {
    super(props);
    this.state = { chartBuilt: false };
    this.timerId = null;
  }

  componentDidMount() {}

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  public update(): void {
    this.setState({ chartBuilt: true });
    this.timerId = setTimeout(() => {
      this.setState({ chartBuilt: false });
    }, 3000);
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
