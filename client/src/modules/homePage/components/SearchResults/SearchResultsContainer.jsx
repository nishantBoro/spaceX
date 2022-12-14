import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../components-library';

import { selectSearchResultMetaData } from '../../slices/pageData';

import SearchResults from './SearchResults';

function SearchResultsContainer() {
  const { isSectionEnabled, isSectionLoading } = useSelector((state) =>
    selectSearchResultMetaData(state)
  );

  if (!isSectionEnabled) {
    return null;
  }

  return isSectionLoading ? (
    <div className="w-full h-[300px] flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <SearchResults />
  );
}

export default SearchResultsContainer;
