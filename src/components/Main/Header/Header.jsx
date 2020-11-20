import React, { Component } from 'react';
// import Status from '../../images/sync-alt.svg'
// import Search from '../../images/search.svg'
// import Msgs from '../../images/envelope-open-text.svg'
// import Elispse from '../../images/ellipsis-v.svg'
import Thumbnail from '../../../images/profile-1.jpg'

class Header extends Component {
    state = {  }
    render() {
        return (
            <header className="header">
                <div className="profile-pic-thumbnail">
                    <img src={Thumbnail} alt="profile Thumnail" />
                    </div>
                 <div className="icons">
            <span className="fa fa-sync-alt" title="Status">
                <span className="status-avail"></span>
            </span>
            <span className="fa fa-envelope-open-text" title="Messages"></span>
            <span className="fa fa-ellipsis-v" title="More"></span>

                 </div>

               
            </header>
        );
    }
}

export default Header;