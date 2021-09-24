
import Layout from '../components/layout/Layout'
import Timeline from '../components/timeline/Timeline'
import styles from '../styles/Home.module.css'
import Login from './login'
import React, { useState, useEffect } from "react";
import Router from 'next/router'
import LoginForm from '../components/Login/LoginForm';


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      <main>
        {isLoggedIn ? (
          <Timeline />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </main>
    </Layout>
  );
}

