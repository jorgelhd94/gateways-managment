import React from 'react';
import PropTypes from 'prop-types';
import THead from './THead/THead';

const SimpleTable = ({headerList, contentList}) => {
  const header = headerList.map((value) => {
    return <THead key={value}>{value}</THead>;
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
              <tbody>{contentList}</tbody>
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
