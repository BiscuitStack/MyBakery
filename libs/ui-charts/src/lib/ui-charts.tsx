import styles from './ui-charts.module.css';

/* eslint-disable-next-line */
export interface UiChartsProps {}

export function UiCharts(props: UiChartsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCharts!</h1>
    </div>
  );
}

export default UiCharts;
