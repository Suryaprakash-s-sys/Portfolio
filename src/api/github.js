import axios from "axios";

const USERNAME = "Suryaprakash-s-sys";

export const fetchGithubData = async () => {
  try {
    const userRes = await axios.get(
      `https://api.github.com/users/${USERNAME}`
    );

    const repoRes = await axios.get(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100`
    );

    const eventsRes = await axios.get(
      `https://api.github.com/users/${USERNAME}/events/public`
    );

    const repos = repoRes.data;

    // Language calculation
    const languageCount = {};

    repos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] =
          (languageCount[repo.language] || 0) + 1;
      }
    });

    const total = Object.values(languageCount).reduce(
      (a, b) => a + b,
      0
    );

    const languages = Object.entries(languageCount).map(([name, count]) => ({
      name,
      level: `${Math.round((count / total) * 100)}%`,
    }));

    // Recent Activity
    const activities = eventsRes.data.slice(0, 5).map((event, index) => ({
      id: index,
      text: event.type.replace("Event", ""),
      time: new Date(event.created_at).toLocaleDateString(),
    }));

    return {
      profile: userRes.data,
      repos,
      languages,
      activities,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};