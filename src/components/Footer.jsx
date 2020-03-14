import React from  "react";

class FooterContainer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="container">
                    <footer className="footer">
                        <ul className="list-wrapper">
                            <li className="list-link">Phone: <a href="#">+ 333333</a></li>
                            <li className="list-link">Phone: <a href="#">+ 777777</a></li>
                            <li className="list-link">Phone: <a href="#">+ 888888</a></li>
                        </ul>
                        <ul className="list-wrapper">
                            <li className="list-link">Phone: <a href="#">+ 333333</a></li>
                            <li className="list-link">Phone: <a href="#">+ 777777</a></li>
                            <li className="list-link">Phone: <a href="#">+ 888888</a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        )
    }
}

export default FooterContainer;