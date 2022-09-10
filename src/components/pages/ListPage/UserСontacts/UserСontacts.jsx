import { React, useContext } from 'react';
import './UserСontacts.scss';
import { MyStoreContext } from '../../../App';

export default function UserСontacts({ name, surname, phone, id }) {
    const data = useContext(MyStoreContext);

    const showModal = (ItemId) => {
        data.setShowModal(true);
        data.setDeleteItem(ItemId);
    };

    return (
        <div className="UserСontacts" id={id}>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{phone}</p>
            <p>
                <button type="button" onClick={() => showModal(id)}>Delete</button>
            </p>
        </div>
    );
}
