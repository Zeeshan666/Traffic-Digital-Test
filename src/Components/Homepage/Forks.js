import React from "react";
import { Avatar, Image } from "antd";

const Forks = (data) => {
  const forks = data.forks.forks || [];
  return (
    <div className="forksBox">
      {forks && forks.length > 2 ? (
        <p>Forks:(Only Last 3 Users who forked recently)</p>
      ) : (
        <p>Forks:</p>
      )}

      {forks && forks.length > 0 ? (
        forks.slice(-3).map((fork, ind) => (
          <ul>
            <li key={ind}>
              <a
                href={`https://gist.github.com/${fork.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <Avatar
                  src={<Image src={fork.user.avatar_url} />}
                  style={{ margin: 5 }}
                />
                {fork.user.login}
              </a>
            </li>
          </ul>
        ))
      ) : (
        <p>No forks Added yet.</p>
      )}
    </div>
  );
};

export default Forks;
