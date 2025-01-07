import logo from './logo.svg';
import './App.css';
import CardIntroduction from './components/cardIntroduction';
import Navbar from './components/navbar';
import EducationCard from './components/educationCard';
import Section from './components/section';
import SkillsCard from './components/skillsCard';
import WorkCard from './components/workCard';
import ProjectsCard from './components/projectsCard';
import Footer from './components/footer';
import Contact from './components/contact';
import CertificationsCard from './components/certificationsCard';
import ThemeToggle from './components/toggleMode';

function App() {
  return (
    <div className="App">
      <CardIntroduction />
      <Navbar />
      <Section titre={"Education"} > </Section>
      <EducationCard />
      <Section titre={"Work"}></Section>
      <WorkCard />
      <Section titre={"Skills"} ></Section>
      <SkillsCard />
      <Section titre={"Projects"} />
      <ProjectsCard />
      <Section titre={"Certifications"} />
      <CertificationsCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
