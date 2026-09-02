import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import projects from "../data/projects";
import { cardReveal, fadeUp, stagger, viewport } from "../animations/motion";

export default function Projects() {
  return (
    <section id="projects" className="projects-page py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.header variants={fadeUp} initial="hidden" animate="visible" className="projects-header">
          <p className="section-kicker">پروژه‌های منتخب</p>
          <h1>پشت هر خروجی، یک مسئله<br /><span>واقعی وجود دارد.</span></h1>
          <p>در این بخش فقط ابزارها را فهرست نکرده‌ام؛ می‌توانید مسئله، تصمیم‌های فنی و مسیر رسیدن به راهکار را ببینید.</p>
        </motion.header>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="case-grid">
          {projects.map((project) => (
            <motion.article key={project.slug} variants={cardReveal} className={`case-card case-card-${project.accent}`}>
              <Link className="case-card-media" to={`/projects/${project.slug}`} tabIndex="-1" aria-hidden="true">
                <img src={project.image} alt="" width="1586" height="1000" loading="lazy" />
              </Link>
              <div className="case-card-content">
              <div className="case-card-top">
                <span>{project.index}</span>
                <small>{project.eyebrow}</small>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="case-tech-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="case-card-actions">
                <Link to={`/projects/${project.slug}`} aria-label={`مطالعه پروژه ${project.title}`}>
                  مطالعه پروژه <FaArrowLeft />
                </Link>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">نسخه زنده <FaArrowUpRightFromSquare /></a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`مخزن GitHub پروژه ${project.title}`}><FaGithub /> GitHub</a>}
              </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
