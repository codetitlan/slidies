import React from "react";
import { motion } from "framer-motion";

const Slide9: React.FC = () => {
  return (
    <motion.div
      className="slide about-me-slide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="slide-content"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h2
          className="slide-title"
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          About Me – Bridging Tech, Community, and Innovation
        </motion.h2>

        <div className="about-me-container">
          <motion.div
            className="profile-section"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="profile-avatar">
              {/* Avatar placeholder - can be replaced with actual image */}
              <div className="avatar-placeholder"></div>
            </div>
            <div className="profile-logos">
              {/* Logos for Codetitlan, AI, etc. */}
              <div className="logo codetitlan-logo"></div>
              <div className="logo ai-symbol"></div>
              <div className="logo community-symbol"></div>
            </div>
          </motion.div>

          <motion.div
            className="bio-section"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <h3>CTO & Founder of Codetitlan</h3>
            <p className="bio-text">
              Researcher and community leader deeply involved in technological
              empowerment across Ibero-America. Based in Mexico with active
              international collaborations.
            </p>

            <h4>Areas of Expertise</h4>
            <ul className="expertise-list">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                AI & Automation
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Geopolitics & Socioeconomic Impacts of Technology
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Ethical Software Development and Community Building
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                Advocating for Fairness and Equity in Tech
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="personal-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="creative-expressions">
            <h4>Beyond Technology</h4>
            <p>
              Passionate about creative expression through dancing and
              acrobatics – bringing a multidimensional approach to innovation
              and community leadership.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="quote-container"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <blockquote>
            &ldquo;I&apos;m passionate about the intersection of technology and
            society&mdash;not just how innovation can change the world, but how
            we can guide it responsibly. My goal with Codetitlan and beyond is
            to ensure we harness technology ethically, inclusively, and
            sustainably, especially here in Ibero-America.&rdquo;
          </blockquote>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slide9;
