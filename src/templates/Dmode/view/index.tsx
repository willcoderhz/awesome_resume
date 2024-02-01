import { useObserver } from 'mobx-react-lite'
import React, {FC, useState} from 'react'
import { Header } from './header'
import styles from './index.module.scss'
import {ResumeModel_D} from "..";
import EditorHeader from "../../../components/build/Top/EditorHeader.tsx";
import Navbar from "../../../components/build/LeftSidebar/Navbar.tsx";
import UserInfoForm from "../../../components/build/Center/UserInfoForm.tsx";
import { OwnerProjects } from '../view/ownerProjects/index.tsx'

const View: FC = () => {
    const [userInfo, setUserInfo] = useState({});
    const rm = new ResumeModel_D
    const config = rm.defaultConfig
    
  return useObserver(() => (


//todo  这个地方的写法多少感觉有些问题，模版里应该只写模板的问题，但我把外层导航和编辑部分也加进来了，感觉有点乱，后面要在修改下

    <div>
        <EditorHeader />
        <div className="flex">
            <Navbar />
            <UserInfoForm onInfoChange={setUserInfo} />
            <div className={styles.index}
                style={
                    {
                        '--color-primary': config.primaryColor,
                    } as any
                }
            >
                <div className={styles.header}>
                    <Header />
                </div>
                <OwnerProjects/>
            </div>
        </div>
    </div>
  ))
}

export default View
