import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux';
import OrderForm from './OrderForm';
// import {getAllTags} from '../../../redux/tagsRedux';
// import {getAllFilters, changeSearchPhrase, addTags, deleteTags, changeDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),

});

// const mapDispatchToProps = dispatch => ({
//   changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
//   addTags: tag => dispatch(addTags(tag)),
//   deleteTags: tag => dispatch(deleteTags(tag)),
//   changeDuration: (payload) => dispatch(changeDuration(payload)),
//   // TODO - add more dispatchers for other filters
// });

export default connect(mapStateToProps)(OrderForm);