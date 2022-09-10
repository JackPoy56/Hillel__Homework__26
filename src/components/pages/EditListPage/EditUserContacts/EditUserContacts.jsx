import { React, useContext, useState, useEffect } from 'react';
import { MyStoreContext } from '../../../App';
import '../EditListPage.scss';
import REG_PHONE from '../../../../constants/itemConstants';

export default function EditUserContacts({ name, surname, phone, id }) {
    const data = useContext(MyStoreContext);

    const user = {
        id: id,
        name: name,
        surname: surname,
        phone: phone,
    };

    const [editContact, setEditContact] = useState(false);
    const [editeUser, setEditeUser] = useState(user);

    useEffect(() => {
        setEditeUser(user);
    }, [editContact]);

    const handleChange = (e) => {
        e.target.classList.remove('error');
        setEditeUser({ ...editeUser, [e.target.name]: e.target.value });
    };

    const saveEdit = (userId) => {
        const userItem = document.getElementById(`${userId}`);
        if (editeUser.name === '') {
            userItem.querySelector('.name').classList.add('error');

            return;
        } else if (editeUser.surname === '') {
            userItem.querySelector('.surname').classList.add('error');

            return;
        } else if (editeUser.phone === '' || editeUser.phone.match(REG_PHONE) === null) {
            userItem.querySelector('.phone').classList.add('error');

            return;
        } else {
            data.setUsers(data.users.map((userObj) => {
                if (userObj.id === userId) {
                    return editeUser;
                } else {
                    return userObj;
                }
            }));
            setEditContact(false);
        }
    };

    const getEditContact = () => {
        setEditContact(!editContact);
    };

    return (
        <div className="EditUserContacts" id={id}>
            {!editContact && (
                <div>
                    <p>{editeUser.name}</p>
                    <p>{editeUser.surname}</p>
                    <p>{editeUser.phone}</p>
                </div>
            )}
            {editContact && (
                <div>
                    <input
                        className="name"
                        type="text"
                        value={editeUser.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        className="surname"
                        type="text"
                        value={editeUser.surname}
                        name="surname"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        className="phone"
                        type="phone"
                        value={editeUser.phone}
                        name="phone"
                        title="The correct format for entering the phone is +380 00 000 000!!!"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            )}
            <div className="wrap">
                <button type="button" onClick={() => editContact && saveEdit(id)}>Save</button>
                <button type="button" onClick={() => getEditContact()}>Edit contact</button>
            </div>
        </div>
    );
}
