import React from "react";
import styles from "./UsersList.module.css";
import users from "./users";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users,
    };
  }

  render() {
    
    return (
      <div className={styles.container}>
        {this.state.users.map((user) => {
        const { id, firstName, lastName, profilePicture, contacts } = user;
          return (
            <article key={id} className={styles.userCard}>
              <img
                src={profilePicture}
                alt="photoUser"
                className={styles.userImg}
              />
              <h1>
                {firstName} {lastName}
              </h1>
              <div className={styles.contacts}>
                <ul>
                  {contacts.map((contact, index) => {
                    return (
                      <li key={index}>
                        <a href={contact}>{contact}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

export default UsersList;
