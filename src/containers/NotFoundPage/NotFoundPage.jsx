import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import EmptyResult from '../../components/EmptyResult/EmptyResult';
import { BigButton } from '../../components/Button/Button';


const NotFoundPage = props => (
  <div>
    <PageHeader>
      <BigButton onClick={() => props.history.push('/search')} type="primary">Go to search</BigButton>
    </PageHeader>
    <ContentWrapper>
      <EmptyResult text="Error 404: Resource not found" />
    </ContentWrapper>
  </div>
);

export default NotFoundPage;
