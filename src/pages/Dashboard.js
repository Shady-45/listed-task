import React, { useEffect, useState } from "react";
import "../CSS/Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/Firebase";
import { useNavigate } from "react-router-dom";
import { GrNotification } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import LineCharts from "../components/LineCharts";
import Piecharts from "./Piecharts";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [user, load] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [user]);

  const fetchData = async () => {
    const getData = await fetch(
      "https://645604512e41ccf16911d4f0.mockapi.io/api/v2/dashboard"
    );
    const response = await getData.json();
    setUserData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(userData);
  /*   const payments = userData.map((item) => item.payments);
  console.log(); */
  return (
    <>
      <main className="dashboard-container">
        <section className="left-side-dashboard">
          <div className="left-items">
            <h2 className="left-heading">Board.</h2>
            <div className="items-container">
              <div className="items">
                <img
                  className="items-img"
                  src="/dashboard.png"
                  alt="dashboard"
                />
                <h3>Dashboard</h3>
              </div>
              <div className="items">
                <img
                  className="items-img"
                  src="/transaction.png"
                  alt="dashboard"
                  referrerPolicy="no-referrer"
                />
                <h3>Transactions</h3>
              </div>
              <div className="items">
                <img
                  className="items-img"
                  src="/schedule.png"
                  alt="dashboard"
                />
                <h3>Schedules</h3>
              </div>
              <div className="items">
                <img className="items-img" src="/profile.png" alt="dashboard" />
                <h3>Users</h3>
              </div>
              <div className="items">
                <img className="items-img" src="/setting.png" alt="dashboard" />
                <h3>Settings</h3>
              </div>
            </div>
          </div>
          <div className="left-items-2 ">
            <h3>Help</h3>
            <h3>Contact Us</h3>
          </div>
        </section>
        <section className="right-side-dashboard">
          <div className="db-container">
            <h3 className="db-heading">Dashboard</h3>
            <div className="db-inner">
              <div className="inner-container">
                <input
                  type="text"
                  className="inner-input"
                  name=""
                  placeholder="Search.."
                  id=""
                />
                <AiOutlineSearch className="search-icon" />
              </div>

              <GrNotification className="notification-icon" />
              {user ? (
                <img
                  className="profile"
                  src={user.photoURL}
                  alt={user.displayName}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <CgProfile className="profile" />
              )}
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="inner-card">
                <p>Total Revenues</p>

                <img className="card-img" src="/revenue.png" alt="revenue" />
              </div>

              <p>$2,129,430</p>
            </div>
            <div className="card gold">
              <div className="inner-card">
                <p>Total Transactions</p>

                <img
                  className="card-img"
                  src="/transaction-2.png"
                  alt="transactions"
                />
              </div>

              <p>1,520</p>
            </div>
            <div className="card pink">
              <div className="inner-card">
                <p>Total Likes</p>

                <img className="card-img" src="/likes.png" alt="likes" />
              </div>

              <p>9,721</p>
            </div>
            <div className="card blue">
              <div className="inner-card">
                <p>Total Users</p>

                <img className="card-img" src="/users.png" alt="users" />
              </div>

              <p>892</p>
            </div>
          </div>

          <LineCharts />
          <div className="charts-container">
            <Piecharts />
            <div className="chart-schedules">
              <div className="inner-container">
                <h2>Today’s schedule</h2>
                <span className="selection-container">
                  <p>See All</p>
                  <AiOutlineArrowRight />
                </span>
              </div>
              <div className="inner-info-container">
                <article className="section-info">
                  <h2 className="section-head">
                    Meeting with suppliers from Kuta Bali
                  </h2>
                  <p className="section-paragraph">14.00-15.00</p>
                  <p className="section-paragraph">
                    at Sunset Road, Kuta, Bali{" "}
                  </p>
                </article>
                <article className="section-info-factory">
                  <h2 className="section-head">
                    Check operation at Giga Factory 1
                  </h2>
                  <p>18.00-20.00</p>
                  <p>at Central Jakarta </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
