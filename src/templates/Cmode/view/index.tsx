import clsx from 'clsx'
import { useObserver } from 'mobx-react-lite'
import React, {FC, useState} from 'react'
import { Header } from './header'
import styles from './index.module.scss'
import { OwnerProjects } from './ownerProjects'
import { WorkingHistory } from './workingHistory'
import {ResumeModel_C} from "..";
import EditorHeader from "../../../components/build/Top/EditorHeader.tsx";
import Navbar from "../../../components/build/LeftSidebar/Navbar.tsx";
import UserInfoForm from "../../../components/build/Center/UserInfoForm.tsx";
import {renderIntoDocument} from "react-dom/test-utils";

const View: FC = () => {
    const [userInfo, setUserInfo] = useState({});
    const rm = new ResumeModel_C
    console.log("这是第一套：",rm)
  const config = rm.defaultConfig
  const data = rm.defaultData

  const renderContent = useObserver(() => {
    const modules = {
      introduce: (
        <div className={clsx(styles.content, styles.introduce)}>
          {data.introduce.split('\n').map((it, i) => {
            return <div key={i}>{it}</div>
          })}
        </div>
      ),
      ownerProjects: (
        <div className={clsx(styles.content, styles.ownerProjects)}>
          <OwnerProjects />
        </div>
      ),
      workingHistory: (
        <div className={clsx(styles.content)}>
          <WorkingHistory />
        </div>
      ),
      aboutMe: <div className={clsx(styles.content)}>{data.aboutMe}</div>,
    }

    return config.modules
      .filter((it) => it.visible)
      .map((it) => {
        return (
          <div key={it.key}>
            <div className={styles.title}>
              {React.createElement(rm.titleComponent, {
                value: it.name,
              })}
            </div>
            {modules[it.key]}
          </div>
        )
      })
  })

  return useObserver(() => (


//todo  这个地方的写法多少感觉有些问题，模版里应该只写模板的问题，但我把外层导航和编辑部分也加进来了，感觉有点乱，后面要在修改下

    <div>
        <EditorHeader />
        <div className="flex">
            <Navbar />
            <UserInfoForm onInfoChange={setUserInfo} />
            <div
                className={styles.index}
                style={
                    {
                        '--color-primary': config.primaryColor,
                    } as any
                }
            >
                <div className={styles.header}>
                    <Header />
                </div>

                {renderContent}
            </div>
        </div>
    </div>
  ))
}

export default View
