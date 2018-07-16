import styled from 'styled-components';

interface StyledProps {
  positiveGrowth: boolean;
}

export const CryptoContainer = styled.section`
  margin: 0 auto;
  width: 90rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.3rem;

  h1 {
    width: 100%;
    border-bottom: 0.1rem solid #eee;
    color: #eee;
    text-align: center;
    padding: 1rem 0;
    font-size: 3.25rem;
  }
`;

export const MarketCapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  color: #eee;
`;

export const ResultsLabel = styled.section`
  display: grid;
  grid-template: 5rem / 0.5fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  justify-items: center;
  align-items: center;
  color: #eee;
  font-size: 1.75rem;
`;

export const Results = styled.div`
  display: grid;
  grid-template-rows: repeat(100, 50px);
  width: 100%;
  align-items: center;
`;

export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr;
  font-size: 1.75rem;
  justify-items: center;
  align-items: center;
  color: ${(props: StyledProps) =>
    props.positiveGrowth ? 'lightgreen' : '#f74636'};
`;
