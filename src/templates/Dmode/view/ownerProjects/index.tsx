import { useObserver } from 'mobx-react-lite'
import styles from './index.module.scss'
import {ResumeModel_D} from "../../index.tsx";

export const OwnerProjects = () => {
  // const { data } = useTemplate<ResumeModel_C>()
  return useObserver(() => (

            <MyComponent/>
  ))
}

const MyComponent = () => {

  const data = new ResumeModel_D
  const sectionsArray = data.defaultData.data.sections
  const linksArray = data.defaultData.data.links
  return (
      <div>
        {sectionsArray.map((item, index) => (
            <div key={index}>
              {/*<div className={styles.name} style={{*/}
              {/*  color: '#333', fontSize: '34px',*/}
              {/*  fontWeight: 'bold',*/}
              {/*  marginBottom: '20px',*/}
              {/*  marginTop: '20px',*/}


              {/*}}>*/}
              {/*  <p>{item.name}</p>*/}
              {/*</div>*/}
              //后面要修改，自动生成
              <div className={styles.index}>
                <div className={styles.text}>{item.name}</div>
              </div>

              {item.type === 'custom' && (
                  <div>
                    {item.data.map((item) => (
                        <div key={item.title}>
                          <h3>{item.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                    ))}
                  </div>
              )}


              {item.type === 'skills' && (
                  <div>
                    {item.data.map((skill) => (
                        <div key={skill.title}>
                          <h3>{skill.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: skill.description }} />
                        </div>
                    ))}
                  </div>
              )}



              {item.type === 'empolyment' && (
                  <div>
                    {item.data.map((job) => (
                        <div key={job.title}>
                          <h3>{job.title}</h3>
                          <p>{job.subTitle}</p>
                          <p>{job.city}</p>
                          <p dangerouslySetInnerHTML={{ __html: job.description }} />
                          <p>{job.startDate} - {job.endDate}</p>
                        </div>
                    ))}
                  </div>
              )}

              {item.type === 'education' && (
                  <div>
                    {item.data.map((job) => (
                        <div key={job.title}>
                          <h3>{job.title}</h3>
                          <p>{job.subTitle}</p>
                          <p>{job.city}</p>
                          <p dangerouslySetInnerHTML={{ __html: job.description }} />
                          <p>{job.startDate} - {job.endDate}</p>
                        </div>
                    ))}
                  </div>
              )}
            </div>
        ))}

        {/* 链接 */}

        {linksArray.map((link, index) => (

            <li key={index}>
              <a href={link.src} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>

        ))}

      </div>
  );
};


interface Section {
  id: string;
  name: string;
  type: string;
  data: {
    title: string;
    description: string;
  }[];
  columns: string;
  position?: string;
  onlyDesc?: boolean;
  profile?: boolean;
}

interface EmploymentData {
  title: string;
  subTitle: string;
  city: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface EducationData {
  title: string;
  subTitle: string;
  city: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface Props {
  sections: Section[];
}


