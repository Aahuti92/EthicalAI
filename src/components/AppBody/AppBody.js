import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppBody.module.css';
import { CallMissedSharp } from '@material-ui/icons';

const AppBody = () => (
  <div className={styles.AppBody}>
    <p className={styles.h1}>Ethical AI</p>
    <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <img alt="Fairy" src={process.env.PUBLIC_URL + "/images/fairybig.png"} className={styles.fairy}/>
    <a href="#">Read More ⟶</a>

  </div>
);

AppBody.propTypes = {};

AppBody.defaultProps = {};

export default AppBody;
