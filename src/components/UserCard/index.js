import styles from "./UserCard.module.css";

function UserCard(props) {
  const { firstName, lastName, nickName, tweets, following, followers } = props;
  function addFollowers() {
    let newFollowers = document.querySelector("#user_followers");
    newFollowers.classList.toggle("addFollower");
    newFollowers.classList.contains("addFollower")
      ? (newFollowers.textContent = followers + 1)
      : (newFollowers.textContent = followers);
  }

  return (
    <>
      <div className={styles.wrap_card}>
        <div className={styles.top_part}>
          <p className={styles.name_user}>
            {firstName} {lastName}
          </p>
          <p className={styles.nickname}>{nickName}</p>
          <span onClick={addFollowers} className={styles.plus_circle}>
            +
          </span>
        </div>
        <ul className={styles.user_list}>
          <li>
            <p>Tweets</p>
            <p>{tweets}</p>
          </li>
          <li>
            <p>Following</p>
            <p>{following}</p>
          </li>
          <li>
            <p>Followers</p>
            <p id="user_followers">{followers}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserCard;
