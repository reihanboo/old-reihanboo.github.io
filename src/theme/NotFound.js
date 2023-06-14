import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import { useHistory } from "react-router-dom";
import { PageMetadata } from "@docusaurus/theme-common";

export default function NotFound() {
  const history = useHistory();
  const [countdownWidth, setCountdownWidth] = useState("100%");

  useEffect(() => {
    const start = Date.now();
    const timeout = setTimeout(() => {
      history.goBack();
    }, 5000);

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - start;
      const remainingTime = Math.max(0, 5000 - elapsedTime);
      const newWidth = `${(remainingTime / 5000) * 100}%`;
      setCountdownWidth(newWidth);
    }, 10);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [history]);

  return (
    <>
      <PageMetadata
        title={translate({
          id: "theme.NotFound.title",
          message: "Page Not Found",
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page"
                >
                  Page Not Found
                </Translate>
              </h1>
              <p>
                <a href="/" onClick={() => history.goBack()}>
                  Back to Home
                </a>
              </p>
              <div
                style={{
                  height: "5px",
                  backgroundColor: "#ddd",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#007bff",
                    width: countdownWidth,
                    transition: "width 0.01s linear",
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
