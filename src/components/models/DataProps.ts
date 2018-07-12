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
  value: string;
  filterByRank: string;
  filterByShow: string;
  filterByChange: string;
  changeRank: (event: React.FormEvent) => void;
  changeShow: (event: React.FormEvent) => void;
  changeGrowth: (event: React.FormEvent) => void;
  changedValue: () => any;
  getData: () => Promise<null>;
}
