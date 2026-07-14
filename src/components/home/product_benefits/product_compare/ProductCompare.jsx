import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import green_check from './../../../../assets/green_check.webp';
import red_x from './../../../../assets/red_x.webp';
import './styles.css';

const Compare = () => {

  const [allExpanded, setAllExpanded] = useState(false);

  const data = [
    {
      feature: 'Made in Korea',
      text: `Aside from the quality, the South Korean floor heating industry is one of the most advanced in the world; over 90% of their homes have floor heating!`
    },
    {
      feature: 'More Efficient',
      text: `Our carbon composite panels heat up quicker and retain that heat longer than our competitors' panels, resulting in lower utility costs.`
    },
    {
      feature: 'Faster Heat Distribution',
      text: `The patented water flow algorithm utilized by our controllers ensure that your living space is heated as quickly as possible, up to 200% faster than competitors without incurring any increase in costs.`
    },
    {
      feature: 'Wet | Dry Compatible',
      text: 'Our floor heating panels are compatible with both wet and dry construction.'
    },
    {
      feature: 'Streamlined Setup',
      text: 'Our system allows for clean and simple line management, reducing the need for unnecessary connections and clutter.'
    },
    {
      feature: 'Anti-leak Protection',
      text: 'Our state of the art manifold has built in measures to detect and prevent problems the instant a leak is detected.'
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
      name: 'Competitors', center: true, cell: row => (
        <div className='benefits_row' >
          <img src={red_x} alt='cross_mark'
            className='check_mark' />
        </div>
      )
    },
    {
      name: 'K-hydronics', center: true, cell: row => (
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
        expandableRowsComponent={ExpandedRow}
        expandableRowExpanded={row => allExpanded}
      />
    </>
  );
};


export default Compare;
