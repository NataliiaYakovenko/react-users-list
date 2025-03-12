import React from "react";
import styles from "./UsersList.module.css";
import users from "./users";

const stopgap =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnbTIIFSI_Cynlk5j4uD0tOdfr1p2k2-niA&s";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users,
    };
  }

  defaultStopgap = (e) => {
    return (e.target.src = stopgap );
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.users.map((user) => {
          const { id, firstName, lastName, profilePicture, contacts } = user;
          return (
            <article key={id} className={styles.userCard}>
              <img
                onError={this.defaultStopgap}
                src={profilePicture ? profilePicture : stopgap}
                alt="Photo-User"
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
