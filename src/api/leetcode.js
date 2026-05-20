import axios from "axios";

const USERNAME = "YOUR_LEETCODE_USERNAME";

export const fetchLeetcodeData = async () => {
  try {
    const query = {
      query: `
      query userSessionProgress($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }

          profile {
            ranking
          }
        }
      }
      `,
      variables: {
        username: USERNAME,
      },
    };

    const res = await axios.post(
      "https://leetcode.com/graphql",
      query,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = res.data.data.matchedUser;

    const stats = data.submitStats.acSubmissionNum;

    return {
      easy: stats[1].count,
      medium: stats[2].count,
      hard: stats[3].count,
      total: stats[0].count,
      ranking: data.profile.ranking,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};