/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import { fetchItems } from 'data/actions';

const Twitter = ({ fetchTwitters, twitters }) => {
  useEffect(() => {
    fetchTwitters();
    return () => fetchTwitters;
  }, [fetchTwitters]);
  return (
    <GridViewTemplate pageType="twitters">
      {twitters.map(({ title, content, twitterName, created, _id: id }) => (
        <Card
          cardType="twitters"
          title={title}
          content={content}
          twitterName={twitterName}
          created={created}
          key={id}
          id={id}
        />
      ))}
    </GridViewTemplate>
  );
};
const mapStateToProps = (state) => ({
  twitters: state.twitters,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

Twitter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  twitters: PropTypes.array,
  fetchTwitters: PropTypes.func.isRequired,
};
Twitter.defaultProps = {
  twitters: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
