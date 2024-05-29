import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(
  name: string,
  pro: string,
  basic: string,
) {
  return { name, pro, basic };
}

const rows = [
  createData('CPU', 'Inter i9 11900K', 'Ryzen 5 5600 4.4GHZ'),
  createData('GPU', 'Nvidia RTX 3060 OC 12GB', 'GTX 1660 OC Gigabyte'),
  createData('MBO', 'Gigabyte A529M H 1.0', 'Gigabyte A529M H 1.0'),
  createData('RAM', 'DDR4 16GB FURY BEAST 3200Mhz', 'DDR4 16GB FURY BEAST 3200Mhz'),
  createData('SSD', '1TB M.2', '1TB M.2'),
  createData('PSU', 'CHIEFTEC GPC-600S 600W', 'CHIEFTEC GPC-600S 600W'),
  createData('Monitor', 'Samsung Odyssey G4 27" 240HZ 1ms', '165HZ 27" 1ms Flat'),
  createData('Keyboard', 'Motospeed CK108 (Mechanical - Red Switch)', 'Motospeed CK108 (Mechanical - Red Switch)'),
  createData('Mouse', 'Benq Zowie FK2-B', 'Cooler Master CM110'),
  createData('Headphones', 'Cooler Master CH331', 'White Shark OX GB'),
  createData('Chairs', 'Cooler Master Caliber R1', 'Cooler Master Caliber R1'),
];

export const TableDevices = () => {
  return (
    <Table sx={{ '& thead th:nth-child(1)': { width: '20%' } }} style={{ border: '1px solid white', borderRadius: '4px', color: 'white', marginTop: '10px' }}>
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Pro PC</th>
          <th>Basic PC</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.pro}</td>
            <td>{row.basic}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
