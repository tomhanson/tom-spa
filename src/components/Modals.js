import React, { Component } from 'react';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';

class Modals extends Component {
    toggleClose() {
        ModalManager.close();
        history.pushState(null, null, `/`)
    }
    render() {
        const styles = {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                perspective: 1300,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
                transition: '0.3s all'

            }
        };
        return (
            <Modal style={ styles } effect={ Effect.ScaleUp }>
                <h1>{ this.props.project.title.rendered }</h1>
                <button onClick={ this.toggleClose.bind(this) }>Close Modal</button>
            </Modal>
        )
    }
}

export default Modals;