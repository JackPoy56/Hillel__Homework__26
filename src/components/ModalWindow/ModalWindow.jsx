import { React, useContext } from 'react';
import ReactDOM from 'react-dom';
import { MyStoreContext } from '../App';
import './ModalWindow.scss';

 export default function ModalWindow() {
    const data = useContext(MyStoreContext);

    if (!data.showModal) return null;

    const removeItem = (idElement) => {
        data.setUsers(data.users.filter((user) => {
          return user.id !== idElement;
        }));
        data.setShowModal(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') data.setShowModal(false);
    };

    return ReactDOM.createPortal(
        <>
            <div
                className="wrapper"
                onClick={() => data.setShowModal(false)}
                onKeyDown={(e) => handleKeyDown(e)}
                role="button"
                tabIndex="0"
            >
                {' '}
            </div>
            <div className="ModalWindow">
                <p>Delete this contact?</p>
                <div>
                    <button type="button" onClick={() => removeItem(data.deleteItem)}>Yes</button>
                    <button type="button" onClick={() => data.setShowModal(false)}>No</button>
                </div>
            </div>
        </>,
        document.getElementById('portal'),
    );
}
