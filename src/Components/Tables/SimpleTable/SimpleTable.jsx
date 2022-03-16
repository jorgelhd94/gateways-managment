import React from 'react';
import PropTypes from 'prop-types';

const SimpleTable = (props) => {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-2 overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    User
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="/images/person/8.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">Jean marc</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
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
