'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Briefcase, Book, Award, FileText, Link } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const [expandedSections, setExpandedSections] = useState({
    experience: true,
    publications: false,
    qualifications: false,
    mlProject: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Justin Hennessy</h1>
          <p className="text-xl">Chief Technical Officer | AI Enablement Specialist</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              I am a passionate lifelong learner with a career defined by growth, innovation, and a commitment to empowering others. At the core of my success is a belief that people and their potential drive meaningful outcomes. I specialise in guiding organisations to navigate the transformative possibilities of AI, focusing on ethical adoption, strategic integration, and workforce enablement. I believe that AI should augment human potential, empowering individuals to focus on high-value activities while driving operational efficiency. My mission in every role is to inspire, support, and align talent and passion with strategic goals, fostering environments where teams thrive and innovation flourishes.
            </p>
          </CardContent>
        </Card>

        <section className="mb-8">
          <Button
            variant="ghost"
            className="w-full flex justify-between items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            onClick={() => toggleSection('experience')}
          >
            <div className="flex items-center">
              <Briefcase className="mr-2" />
              <h2 className="text-2xl font-semibold">Professional Experience</h2>
            </div>
            {expandedSections.experience ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedSections.experience && (
            <div className="mt-4 space-y-6">
              <ExperienceItem
                company="Intalgo.ai"
                position="Co-Founder"
                period="Apr 2024 to Present"
                description="An AI enablement consultancy dedicated to helping businesses leverage AI technologies to drive growth and operational efficiency. Focused on developing strategies for ethical AI adoption, workforce enablement, and operational transformation."
                achievements={[
                  "Co-developed an AI maturity model to guide organisations in assessing readiness and adopting AI effectively.",
                  "Assessed AI maturity to provide strategic and tactical guidance for organisational growth.",
                  "Delivered AI literacy programs to enhance workforce understanding and adoption of AI tools.",
                  "Built internal expertise and fostered cross-functional collaboration for handling AI projects.",
                  "Developed strategic roadmaps to integrate AI into business operations, ensuring alignment with innovation goals.",
                  "Advocated for ethical AI implementation, focusing on risk mitigation and societal impact.",
                  "Ensured compliance with AI governance standards and regulatory requirements."
                ]}
              />
              <ExperienceItem
                company="Recit.app"
                position="Fractional CTO/Co-Founder"
                period="Sep 2024 to Present"
                description="Technical Co-founded Recit, a tool designed to streamline month-end reconciliations for businesses using Xero. Overseeing the Development of features for seamless Xero integration, task allocation, and consistent workflows to improve efficiency and collaboration in accounting teams. Focused on creating an intuitive platform to enhance accuracy and simplify financial close processes."
              />
              <ExperienceItem
                company="Instaband"
                position="Fractional CTO/Co-Founder"
                period="Oct 2022 to Present"
                description="Instaband is an online platform designed to connect musicians, bands, and DJs with event organisers, venues, and individuals. It simplifies the process of discovering, previewing, and booking live music for events, offering artist profiles, audio samples, and direct booking options. Catering to weddings, private parties, corporate events, and live music venues, Instaband empowers users to create memorable experiences with flexible tools and resources for a seamless booking experience."
              />
              <ExperienceItem
                company="Accruent"
                position="Chief Technical Officer, RedEye"
                period="Dec 2023 to Apr 2024"
                description="Led technical integration and AI initiatives following RedEye's acquisition."
                achievements={[
                  "Ran point on all systems and process integrations for Security, IT, Engineering, and Infrastructure.",
                  "Connected all parts of the business, especially Product Engineering."
                ]}
                aiAchievements={[
                  "Experimented with using LLMs to extract title block information from engineering CAD drawings using OpenAI's vision API.",
                  "Established an AI education program to enhance AI literacy across all staff, with a focus on prompt engineering.",
                  "Initiated and coordinated a cross-company collaboration to explore product innovation using LLMs for semantic search and inference.",
                  "Formed and led a splinter product team to develop and deploy enhancements to RedEye's drawing search capabilities."
                ]}
              />
              <ExperienceItem
                company="RedEye.co"
                position="Chief Technical (Product) Officer"
                period="Dec 2022 to Dec 2023"
                description="Led RedEye's product and technical strategy, focusing on DevOps maturity and developer experience."
                achievements={[
                  "Influenced RedEye's acquisition, due diligence, and closing.",
                  "Oversaw RedEye's product and technical strategy, DevOps maturity, and developer experience.",
                  "Worked with the Chief Data Officer on RedEye's DataOps and Data strategy.",
                  "Coached the CEO on a new vision and mission and helped roll it out.",
                  "Rebooted the executive team from a foundation of trust.",
                  "Delivered all technical and product commitments failed over the previous 4 years.",
                  "Unified Product, Engineering, Platform, and Security under one banner.",
                  "Completed ISO27001 surveillance audit and certification."
                ]}
                aiAchievements={[
                  "Built and deployed an internal ChatBOT to manage internal product and business information, integrated with Microsoft Teams (leveraging OpenAI's API and local vector storage).",
                  "Designed and implemented process automation augmented with LLM capabilities, including a product feedback system that significantly accelerated the review of customer and business feedback using low/no-code pipeline technology.",
                  "Conducted R&D into using convolutional neural networks for engineering drawing classification.",
                  "Began a deep dive into AI agents, exploring autonomous processes that leverage synthetic reasoning for task completion."
                ]}
              />
              <ExperienceItem
                company="Smartsheet"
                position="Chief Technical Officer, Outfit"
                period="Sep 2022 to Dec 2022"
                description="Post-acquisition transitional contract role focusing on systems integration."
                achievements={[
                  "Ran point on all systems and process integrations for Security, IT, Engineering, and Infrastructure.",
                  "Connected all parts of the business, particularly Product Engineering."
                ]}
              />
              <ExperienceItem
                company="Outfit.io"
                position="Chief Technical (Product) Officer"
                period="Jul 2021 to Sep 2022"
                description="Led product and engineering functions, driving significant organizational improvements."
                achievements={[
                  "Played a pivotal role in Outfit's acquisition, with my leadership team identified as key individuals in the deal.",
                  "Unified Product and Engineering functions into one team.",
                  "Transformed Professional Services into a profitable arm of the company.",
                  "Established a platform team for 'plumbing,' tooling, and automation.",
                  "Facilitated company-wide OKR rollout.",
                  "Completed ISO27001 certification."
                ]}
              />
              <ExperienceItem
                company="Plato (volunteering)"
                position="Leadership Mentor"
                period="May 2018 to Current"
                description="Volunteer mentoring role focused on technical leadership development."
                achievements={[
                  "Mentored numerous technical leaders and the CEO of Plato.",
                  "Assisted the VP of Engineering at SheerID with setting technical vision and direction."
                ]}
              />
              <ExperienceItem
                company="Maropost Inc"
                position="Chief Technical Officer"
                period="Jan 2021 to Jul 2021"
                description="Led technical strategy and team development following acquisition."
                achievements={[
                  "Led Agile transformation for 80+ team members.",
                  "Integrated a large contingent from India to optimise organisational communication structures.",
                  "Managed a $3M+ platform budget.",
                  "Influenced technical strategy at the executive level."
                ]}
              />
              <ExperienceItem
                company="Neto eCommerce"
                position="Chief Technical Officer"
                period="Dec 2014 to Jan 2021"
                description="Led technical strategy and platform development for a leading eCommerce platform."
                achievements={[
                  "Reduced platform COGS by 30%.",
                  "Delivered technical strategies for efficiency and scalability.",
                  "Completed PCI Level 1 compliance projects.",
                  "Built a leadership team focused on technical excellence."
                ]}
              />
              <ExperienceItem
                company="Everyday Hero"
                position="Operations Engineer"
                period="Jan 2011 to Dec 2014"
                description="Focused on platform migration and infrastructure improvements."
                achievements={[
                  "Migrated platforms to AWS and implemented automation strategies.",
                  "Developed Dockerised infrastructure and advanced CI/CD pipelines."
                ]}
              />
              <ExperienceItem
                company="CodeFire"
                position="Operations and Project Manager"
                period="Apr 2008 to Jan 2011"
                description="Led operations and project management initiatives."
                achievements={[
                  "Facilitated Agile adoption within development teams.",
                  "Implemented monitoring solutions and engagement processes."
                ]}
              />
              <ExperienceItem
                company="Comunet Pty Ltd"
                position="Senior System Engineer"
                period="Jul 2005 to Apr 2008"
                description="Focused on Linux systems and enterprise solutions."
                achievements={[
                  "Established the Linux division and implemented high-availability clusters.",
                  "Packaged enterprise monitoring solutions for clients."
                ]}
              />
              <ExperienceItem
                company="City of Mitcham Council"
                position="Manager Information Technology"
                period="Aug 2000 to Oct 2005"
                description="Managed IT infrastructure and led technological improvements."
                achievements={[
                  "Migrated production servers to blade infrastructure.",
                  "Integrated a fibre backbone into networking architecture."
                ]}
              />
              <ExperienceItem
                company="Annesley College"
                position="IT Manager"
                period="Jul 1999 to Dec 2000"
                description="Managed IT systems for the educational institution."
                achievements={[
                  "Successfully implemented Windows NT 4.0 directory services for all departments."
                ]}
              />
            </div>
          )}
        </section>

        <section className="mb-8">
          <Button
            variant="ghost"
            className="w-full flex justify-between items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            onClick={() => toggleSection('mlProject')}
          >
            <div className="flex items-center">
              <Book className="mr-2" />
              <h2 className="text-2xl font-semibold">100 Days of ML Project</h2>
            </div>
            {expandedSections.mlProject ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedSections.mlProject && (
            <div className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This project was a comprehensive exploration of data science and machine learning workflows, focusing on solving real-world problems through hands-on coding practice over 100 days. It involved cleaning and preprocessing data, engineering impactful features, and building predictive models, with a particular emphasis on interpretability and robustness. The journey highlighted the importance of validation strategies, understanding evaluation metrics, and leveraging powerful models like Random Forests. By combining technical skills with practical insights, the project provided a solid foundation for applying machine learning effectively in various domains.
                  </p>
                  <h4 className="font-semibold mb-2">Top 6 Key Learnings:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-semibold">Data Preprocessing is Key:</span> Effective handling of missing values, encoding categorical data, and feature scaling are foundational for building reliable models.</li>
                    <li><span className="font-semibold">Validation Strategies Prevent Overfitting:</span> Proper train-test splits, cross-validation, and awareness of temporal data structures ensure robust and generalizable models.</li>
                    <li><span className="font-semibold">Feature Engineering Drives Performance:</span> Domain-specific features and reducing multicollinearity significantly enhance model accuracy and interpretability.</li>
                    <li><span className="font-semibold">Understand Model Metrics:</span> Metrics like precision, recall, F1-score, and AUC-ROC are critical for evaluating model effectiveness, especially for imbalanced datasets.</li>
                    <li><span className="font-semibold">Random Forests are Powerful and Interpretable:</span> As an ensemble method, Random Forests provide strong performance and insights through feature importance and decision paths.</li>
                    <li><span className="font-semibold">Model Interpretation Adds Value:</span> Tools like `eli5` and partial dependence plots are essential for understanding model decisions and building trust with stakeholders.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        <section className="mb-8">
          <Button
            variant="ghost"
            className="w-full flex justify-between items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            onClick={() => toggleSection('publications')}
          >
            <div className="flex items-center">
              <FileText className="mr-2" />
              <h2 className="text-2xl font-semibold">Publications / Case Studies / Interviews</h2>
            </div>
            {expandedSections.publications ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedSections.publications && (
            <div className="mt-4 space-y-4">
              <PublicationItem
                title="Professional Blog"
                links={[
                  { url: "https://intalgo.substack.com/", text: "Intalgo.ai" },
                  { url: "https://justinhennessy.substack.com/archive?sort=new", text: "Personal" },
                  { url: "https://justinhennessy.com/blog", text: "Personal (Old)" }
                ]}
              />
              <PublicationItem
                title="Guest Speaker"
                links={[
                  { url: "https://www.youtube.com/watch?v=tsKoWuaGXPk&list=PLP5Q2TkbA7pGtqFqt13U48YoNy57WAMRx", text: "AWS Presentation on Growth Mindset" }
                ]}
              />
              <PublicationItem
                title="Case Studies"
                links={[
                  { url: "https://www.cloudflare.com/case-studies/neto-leverages-cloudflare-to-secure-and-supercharge-their-ecommerce/", text: "Cloudflare" },
                  { url: "https://www.datadoghq.com/case-studies/neto/", text: "Datadog" }
                ]}
              />
              <PublicationItem
                title="Interviews"
                links={[
                  { url: "https://www.devpath.fm/episodes/engineering-vp-and-mentor-justin-hennessy", text: "Devpath.fm" },
                  { url: "https://open.spotify.com/episode/1t630rGsiXWthNjX4EAZlu", text: "Taking Control Podcast" }
                ]}
              />
            </div>
          )}
        </section>

        <section className="mb-8">
          <Button
            variant="ghost"
            className="w-full flex justify-between items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            onClick={() => toggleSection('qualifications')}
          >
            <div className="flex items-center">
              <Award className="mr-2" />
              <h2 className="text-2xl font-semibold">Professional Qualifications and Development</h2>
            </div>
            {expandedSections.qualifications ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {expandedSections.qualifications && (
            <div className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Qualifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>2015: Amazon Certified Solutions Architect Associate</li>
                    <li>2011: Certified Scrum Master</li>
                    <li>2004: Red Hat Certified Technician (RHCT)</li>
                    <li>2001: Microsoft Certified System Engineer NT 4.0</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>2011-2012: Agile Coaching with Lyssa Adkins</li>
                    <li>2002: Project Management Theory</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Justin Hennessy. All rights reserved.</p>
          <p className="mt-2">References supplied on request.</p>
        </div>
      </footer>
    </div>
  )
}

function ExperienceItem({ company, position, period, description, achievements, aiAchievements }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">{company}</CardTitle>
        <CardDescription>{position} | {period}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{description}</p>
        {achievements && achievements.length > 0 && (
          <>
            <h4 className="font-semibold mb-1">Key Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </>
        )}
        {aiAchievements && aiAchievements.length > 0 && (
          <>
            <h4 className="font-semibold mb-1 mt-2">AI Related Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {aiAchievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  )
}

function PublicationItem({ title, links }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              <Link className="mr-2 h-4 w-4" />
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}