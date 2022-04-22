function UserList({contacts}) {
    return(
        <div>
            {contacts.map((contact)=> (
                <div className="card" key={contact.phonenumber}>
                    <p>{contact.name} </p>
                    <p>{contact.email} </p>
                    <p>{contact.phonenumber} </p>
                </div>
            ))}
        </div>
    )
}


export default UserList;