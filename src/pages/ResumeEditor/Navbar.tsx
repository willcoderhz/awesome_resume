import React from 'react';
import styles from './ResumeEditor.module.css';
import './NavbarStyles.css'; 

const Navbar = () => {
  return (
    <div className={styles.navbar}>
     <div className="navbarStyled"> {/* 使用新的CSS类名 */}
      <ul>
        <li>编辑</li>
        <li>模板</li>
        <li>导出</li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;