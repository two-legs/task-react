import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';

const SearchPage = props => {
  return (
    <div>
      <SearchHeader />
      <ResultsPanel sortable>7 movies found</ResultsPanel>
      <ContentWrapper>
      </ContentWrapper>
    </div>
  );
};

export default SearchPage;
