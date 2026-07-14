import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import green_check from './../../../../assets/green_check.webp';
import red_x from './../../../../assets/red_x.webp';
import './styles.css';

const Compare = () => {

  const [allExpanded, setAllExpanded] = useState(false);

  const data = [
    {
      feature: 'Exceptional Comfort',
      text: 'Noticeably less dry in drier climates or seasons. Heat radiates uniformly from the floor, keeping your feet warm while maintaining a comfortable ambient temperature at head height.'
    },
    {
      feature: 'Improved Air Quality',
      text: 'The absence of vents and blowers significantly reduces the amount of dust and allergens circulating inside—perfect for respiratory sensitive individuals.'
    },
    {
      feature: 'Silent Operation',
      text: 'No noises caused by fans turning on, whistling in the vents and ducts or clanking radiators.'
    },
    {
      feature: 'Lower Energy Costs',
      text: 'Hydronic floor systems are highly efficient, often 25% to 35% more efficient than forced air systems. Results can vary from state to state.'
    },
    {
      feature: 'Increased Property Value',
      text: 'Homes with hydronic floor heating are becoming increasingly popular, particularly for high-end luxury and energy-conscious buyers. You can expect to recoup up to 80% of installation costs at the time of sale.'
    },
  ];

  const columns = [
    {
      name: '',
      cell: row => (
        <div className='column_feature'>
          {row.feature}
        </div>
      )
    },
    {
      name: 'Air', center: true, cell: row => (
        <div className='benefits_row' >
          <img src={red_x} alt='cross_mark'
            className='check_mark' />
        </div>
      )
    },
    {
      name: 'Floor', center: true, cell: row => (
        <div className='benefits_row'>
          <img src={green_check} alt='check_mark'
            className='check_mark' />
        </div>
      )
    }
  ];

  const ExpandedRow = row => {
    return (
      <div className='expanded_row'>
        <p>{row.data.text}</p>
      </div>
    );
  };

  return (
    <>
      <div className='button_container'>
        <button
          onClick={() => setAllExpanded(v => !v)}
          className='expand_button'
        >
          {allExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        animateRows
        expandableRows
        // expandableRowsHideExpander
        expandableRowsComponent={ExpandedRow}
        expandableRowExpanded={row => allExpanded}
      />
    </>
  );
};

export default Compare;
