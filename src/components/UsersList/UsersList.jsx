import React from "react";
import styles from "./UsersList.module.css";
import users from "./users";
import defaultStopgap from "./defaultStopgap.jpg";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users,
    };
  }

  defaultStopgap = (e) => {
    return (e.target.src = defaultStopgap);
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.users.map((user) => {
          const { id, firstName, lastName, profilePicture, contacts } = user;
          return (
            <article key={id} className={styles.userCard}>
              <img
                className={styles.userImg}
                onError={this.defaultStopgap}
                src={profilePicture || defaultStopgap}
                alt="Photo-User"
              />
              <span className={styles.userName}>
                {firstName} {lastName}
              </span>
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
