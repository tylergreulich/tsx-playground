import { RouteComponentProps } from 'react-router-dom';

export interface DataProps extends RouteComponentProps<{}> {
  coin: {
    data: [
      {
        data: [
          {
            quotes: {
              USD: {
                price: number;
                percent_change_1h: number;
                percent_change_7d: number;
                percent_change_24h: number;
                market_cap: number;
              };
            };
          }
        ];
      }
    ];
  };
  onClick?: () => void;
  style?: string;
}
