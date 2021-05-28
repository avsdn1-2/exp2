import React from 'react';
import {createPortal} from "react-dom";

class Block extends React.Component {
    render() {
        return createPortal(
            (<span>Test</span>), this.props.item
        );
    }
}

export {Block};
