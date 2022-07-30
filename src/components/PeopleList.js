import {connect} from 'react-redux'
import './PeopleList.css'

function PeopleList(props) {
    const arr = props.contacts;
    const listItems = arr?.map((val, index) =>
    <li key={index}>{val}</li>
    );
    return (
    <div className='list'>
        <ul>{listItems}</ul>
    </div>
    )
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(PeopleList) 