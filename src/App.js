import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Blogshome from "./Pages/Blogs/Blogshome";
import VideoBlog from "./Pages/Blogs/VideoBlog";
import ArticleBlog from "./Pages/Blogs/ArticleBlog";
import CaseStudyBlog from "./Pages/Blogs/CaseStudyBlog";
import Aboutus from "./Pages/Aboutus";
import SkillPage from "./Pages/SkillPage";
import Education from "./Pages/Education";
import Errorpage from "./Pages/404";
import Experience from "./Pages/Experience";
import Websitedevelopment from "./Pages/Solution/Websitedevelopment";
import Websitedesign from "./Pages/Solution/WebsiteDesign";
import Redesign from "./Pages/Solution/Redesign";
import Websitemaintenance from "./Pages/Solution/Websitemaintenance";
import Seo from "./Pages/Solution/Seo";
import Contentcreation from "./Pages/Solution/Contentcreation";
import Privacypolicy from "./Pages/Privacypolicy";
import Termsandconditions from "./Pages/Termsandconditions";
import ScrollToTop from "./Scrolltotop";
import WorkPage from "./Pages/WorkPage";
import Allassets from "./Pages/work/Assets";
import Template from "./Pages/work/Template";
import CompleteWebsites from "./Pages/work/CompleteWebsites";
import FrontEndDevelopment from "./Pages/Solution/FrontEndDevelopment";
import BackEndDevelopment from "./Pages/Solution/BackEndDevelopment";
import Projectmanagement from "./Pages/Solution/ProjectManagement";
import CommunicationSkills from "./Pages/Solution/CommunicationSkills";
import PhotoEditing from "./Pages/Solution/PhotoEditing";
import VideoEditing from "./Pages/Solution/VideoEditing";


export default function App() {





  return (
    <Router>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage navcolor="red" />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/about" element={<Aboutus />} />
            <Route exact path="/skills" element={<SkillPage />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/errorpage" element={<Errorpage />} />
            <Route exact path="/privacy" element={<Privacypolicy />} />
            <Route exact path="/terms" element={<Termsandconditions />} />
            <Route exact path="/work" element={<WorkPage />} />

            <Route exact path="/work/Allassets" element={<Allassets />} />
            <Route exact path="/work/Template" element={<Template />} />
            <Route exact path="/work/CompleteWebsites" element={<CompleteWebsites />} />

            <Route exact path="/bloghome" element={<Blogshome />} />
            <Route exact path="/videoblog" element={<VideoBlog />} />
            <Route exact path="/articleblog" element={<ArticleBlog />} />
            <Route exact path="/casestudyblog" element={<CaseStudyBlog />} />

            <Route exact path="/websitedevelopment" element={<Websitedevelopment />} />
            <Route exact path="/websitedesign" element={<Websitedesign />} />
            <Route exact path="/redesign" element={<Redesign />} />
            <Route exact path="/seo" element={<Seo />} />
            <Route exact path="/contentcreation" element={<Contentcreation />} />
            <Route exact path="/websitemaintenance" element={<Websitemaintenance />} />
            <Route exact path="/FrontEndDevelopment" element={<FrontEndDevelopment />} />
            <Route exact path="/BackEndDevelopment" element={<BackEndDevelopment />} />
            <Route exact path="/Projectmanagement" element={<Projectmanagement />} />
            <Route exact path="/CommunicationSkills" element={<CommunicationSkills />} />
            <Route exact path="/PhotoEditing" element={<PhotoEditing />} />
            <Route exact path="/VideoEditing" element={<VideoEditing />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
}
