import React from 'react';
import Table from '../../../../components/table';

export default ({entries}) => {
  const renderRow = ([domain, range]) => {
    return (
      <tr key={`${domain}-${range}`}>
        <td>{domain}</td>
        <td>{range}</td>
      </tr>
    );
  }

  return (
    <Table
      headerItems={['Domain', 'Range']}
      items={entries}
      renderRow={renderRow}
    />
  )
}
