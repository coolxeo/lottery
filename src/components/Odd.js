import React from 'react'

function Odd({oddKey, odd}) {
  return (
    <tr>
      <td>{oddKey}</td>
      <td></td>
      <td>{odd.winners}</td>
      <td>{odd.prize}</td>
    </tr>
  )
}

export default Odd
