import { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

const GITHUB_USERNAME = "Suryaprakash-s-sys";
const LEETCODE_USERNAME = "Surya_Prakash_25";

function About() {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);

  // ================= TERMINAL EFFECT =================
  const [terminalText, setTerminalText] = useState("");
  const fullTerminalText =
    " system.init_dashboard() => live connection secure.";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTerminalText((prev) => prev + fullTerminalText.charAt(index));
      index++;

      if (index >= fullTerminalText.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // ================= GITHUB API =================
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
        );

        const repoRes = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        );

        // ---------- LANGUAGE CALCULATION ----------
        const languageMap = {};

        repoRes.data.forEach((repo) => {
          if (repo.language) {
            languageMap[repo.language] = (languageMap[repo.language] || 0) + 1;
          }
        });

        const total = Object.values(languageMap).reduce((a, b) => a + b, 0);

        const languages = Object.entries(languageMap)
          .map(([name, count]) => ({
            name,
            level: `${Math.round((count / total) * 100)}%`,
          }))
          .sort((a, b) => parseInt(b.level) - parseInt(a.level));

        setGithubData({
          profile: userRes.data,
          languages,
        });
      } catch (err) {
        console.error("GitHub Error:", err);
      }
    };

    fetchGithubData();
  }, []);

  // ================= LEETCODE API =================
  useEffect(() => {
    const fetchLeetcodeData = async () => {
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
            username: LEETCODE_USERNAME,
          },
        };

        const res = await axios.post("https://leetcode.com/graphql", query, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const stats = res.data.data.matchedUser.submitStats.acSubmissionNum;

        setLeetcodeData({
          total: stats[0].count,
          easy: stats[1].count,
          medium: stats[2].count,
          hard: stats[3].count,
          ranking: res.data.data.matchedUser.profile.ranking,
        });
      } catch (err) {
        console.error("LeetCode Error:", err);
      }
    };

    fetchLeetcodeData();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about__scanlines"></div>

      <div className="about__scroll-border">
        {/* HEADER */}
        <div className="about__header">
          <div className="about__section-label">
            <span className="terminal-prompt">&gt;</span>
            Command Center
          </div>

          <h2 className="about__title">
            THE
            <br />
            <span>DEVELOPER</span>
            <br />
            STORY
          </h2>

          <div className="about__terminal-status">
            {terminalText}
            <span className="terminal-cursor"></span>
          </div>

          <div className="about__header-rule"></div>
        </div>

        {/* DASHBOARD */}
        <div className="compact-dashboard">
          {/* ================= GITHUB ================= */}
          <div className="hud-widget compact-widget">
            <div className="hud-widget__header">
              <div className="hud-widget__title">⚡ GITHUB COMMAND CENTER</div>

              <div className="hud-widget__status-pill">ONLINE</div>
            </div>

            {/* PROFILE */}
            <div className="hud-widget__profile">
              <img
                src={githubData?.profile?.avatar_url}
                alt=""
                className="github-avatar"
              />

              <div className="hud-widget__user-meta">
                <h4>@{githubData?.profile?.login}</h4>

                <p>
                  Public Repositories :
                  <span className="text-neon-green">
                    {" "}
                    {githubData?.profile?.public_repos || 0}
                  </span>
                </p>
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="hud-widget__section">
              <h5>LANGUAGES DEPLOYED</h5>

              {githubData?.languages?.slice(0, 5).map((lang) => (
                <div key={lang.name} className="hud-progress-row">
                  <span className="hud-progress-lbl">{lang.name}</span>

                  <div className="hud-progress-bar-bg">
                    <div
                      className="hud-progress-bar-fill gh-fill"
                      style={{
                        width: lang.level,
                      }}
                    ></div>
                  </div>

                  <span className="hud-progress-pct">{lang.level}</span>
                </div>
              ))}
            </div>

            {/* CONTRIBUTION GRAPH */}
            <div className="hud-widget__section">
              <h5>CONTRIBUTION GRAPH</h5>

              <img
                className="github-graph"
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true&area=true`}
                alt=""
              />
            </div>
          </div>

          {/* ================= LEETCODE ================= */}
          <div className="hud-widget compact-widget">
            <div className="hud-widget__header">
              <div className="hud-widget__title">⚔️ LEETCODE BATTLE LOG</div>

              <div className="hud-widget__status-pill fire-pill">LIVE</div>
            </div>

            {/* METRICS */}
            <div className="battle-main-metrics">
              <div className="battle-metric">
                <span className="battle-metric__lbl">SOLVED</span>

                <span className="battle-metric__val text-neon-orange">
                  {leetcodeData?.total || 0}
                </span>
              </div>

              <div className="battle-metric">
                <span className="battle-metric__lbl">GLOBAL RANK</span>

                <span className="battle-metric__val">
                  {leetcodeData?.ranking || "N/A"}
                </span>
              </div>
            </div>

            {/* EASY MED HARD */}
            <div className="hud-widget__stats-grid compact-grid">
              <div className="hud-mini-stat border-orange">
                <span className="hud-mini-stat__val text-easy">
                  {leetcodeData?.easy || 0}
                </span>

                <span className="hud-mini-stat__lbl">Easy</span>
              </div>

              <div className="hud-mini-stat border-orange">
                <span className="hud-mini-stat__val text-medium">
                  {leetcodeData?.medium || 0}
                </span>

                <span className="hud-mini-stat__lbl">Medium</span>
              </div>

              <div className="hud-mini-stat border-orange">
                <span className="hud-mini-stat__val text-hard">
                  {leetcodeData?.hard || 0}
                </span>

                <span className="hud-mini-stat__lbl">Hard</span>
              </div>
            </div>

            {/* LEETCODE CARD */}
            <div className="hud-widget__section">
              <img
                className="leetcode-card"
                src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
