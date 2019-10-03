import React from 'react';
import Odd from './Odd'

const tiers=[
  'rank1',
  'rank2',
  'rank3',
  'rank4',
  'rank5',
  'rank6',
  'rank7',
  'rank8',
  'rank9',
  'rank10',
  'rank11',
  'rank12'
];

function Odds({odds}) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Tier</th>
          <th>Match</th>
          <th>Winners</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map(oddKey =>(
          <Odd key={oddKey} oddKey={oddKey} odd={odds[oddKey]}></Odd>
        ))}
      </tbody>
    </table>
  )
}

export default Odds
