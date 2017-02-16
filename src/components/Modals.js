import React, { Component } from 'react';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';

class Modals extends Component {
    render() {
        const SlideFromRight = {
            transition : {
                property : 'all',
                duration : 500,
                timingfunction : 'cubic-bezier(0.25, 0.5, 0.5, 0.9)'
            },
            begin : {
                'transform': 'translateX(35%)',
                'opacity': '1'
            },
            end : {
                'transform': 'translateX(0)',
                'opacity': '1'
            }
        };
        const styles = {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 998,
                overflow: 'hidden',
                perspective: 1300,
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
            },
            content: {
                position: 'relative',
                width: '100%',
                margin: '0',
                border: '0',
                background: '#fff',
                overflow: 'auto',
                borderRadius: '0',
                outline: 'none',
                height: '100%',
                boxShadow: '0',
                zIndex: 998
            }
        };
        return (
            <Modal style={ styles } effect={SlideFromRight}>
                <h1>{ this.props.project.title.rendered }</h1>
                <button onClick={ModalManager.close}>Close Modal</button>
            </Modal>
        )
    }
}

export default Modals;