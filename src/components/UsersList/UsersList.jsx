import React from "react";
import styles from "./UsersList.module.css";
import users from "./users";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users,
      imageErrors: {},
      imageLoaded: {},
      bgLoaded: false,
    };
  }

  componentDidMount() {
    const bgImage = new Image();
    bgImage.src =
      "https://variety.com/wp-content/uploads/2020/09/hollywood-walk-of-fame.jpg?w=1000&h=563&crop=1";

    bgImage.onload = () => {
      this.setState({ bgLoaded: true });
    };
  }

  handleImageError = (id) => {
    this.setState((prevState) => ({
      imageErrors: { ...prevState.imageErrors, [id]: true },
    }));
  };

  handleImageLoad = (id) => {
    this.setState((prevState) => ({
      imageLoaded: { ...prevState.imageLoaded, [id]: true },
    }));
  };

  render() {
    return (
      <div
        className={`${styles.container} ${this.state.bgLoaded ? styles.bgVisible : styles.bgHidden}`}
      >
        {this.state.users.map((user) => {
          const { id, firstName, lastName, profilePicture, contacts } = user;
          const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
          const hasError = this.state.imageErrors[id];
          const isLoaded = this.state.imageLoaded[id];

          return (
            <article key={id} className={styles.userCard}>
              <div className={styles.avatarContainer}>
                {!isLoaded && <div className={styles.initials}>{initials}</div>}
                {profilePicture && !hasError && (
                  <img
                    className={`${styles.userImg} ${isLoaded ? styles.visible : styles.hidden}`}
                    src={profilePicture}
                    alt="User"
                    onError={() => this.handleImageError(id)}
                    onLoad={() => this.handleImageLoad(id)}
                  />
                )}
              </div>
              <span className={styles.userName}>
                {firstName} {lastName}
              </span>
              <div className={styles.contacts}>
                <ul>
                  {contacts.map((contact, index) => (
                    <li key={index}>
                      <a href={contact}>{contact}</a>
                    </li>
                  ))}
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
