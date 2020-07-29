import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTags, deleteTags, changeDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addTags: tag => dispatch(addTags(tag)),
  deleteTags: tag => dispatch(deleteTags(tag)),
  changeDuration: (value, type) => dispatch(changeDuration(value, type)),
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
