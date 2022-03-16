import React from 'react';
import PropTypes from 'prop-types';
import THead from './THead/THead';
import TD from './TD/TD';

const SimpleTable = ({headerList, contentList}) => {
  const header = headerList.map((value) => {
    return <THead key={value}>{value}</THead>;
  });

  const content = contentList.map((data, row) => {
    const listRow = Object.keys(data).map((key, col) => {
      return <TD key={row + '' + col}>{data[key]}</TD>
    });
    return <tr key={row}>{listRow}</tr>;
  });

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-2 overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>{header}</tr>
              </thead>
              <tbody>{content}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

SimpleTable.propTypes = {
  headerList: PropTypes.array.isRequired,
  contentList: PropTypes.array.isRequired
};

export default SimpleTable;
