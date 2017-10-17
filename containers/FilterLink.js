import {connect} from "react-redux";
import {Link} from "../components/Link";
import {setVisibility} from "../actions";

const mapStateToProps = (state, ownProps) => {
    // console.log("FilterLink: " + ownProps.filter + "#" + state.visibilityFilter);
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            // console.log("点击了： " + ownProps.filter);
            dispatch(setVisibility(ownProps.filter));
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export {FilterLink}