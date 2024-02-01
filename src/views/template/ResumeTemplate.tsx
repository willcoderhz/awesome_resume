import Header from '../../components/home/Header.tsx';
import Footer from '../../components/home/Footer.tsx';
import {IndexPage} from "./index.tsx";
const ResumeTemplate = () => (
    <div className="layout-demo">
        <Header />
            <IndexPage/>
        <Footer />
    </div>
);

export default ResumeTemplate;
