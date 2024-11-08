'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Briefcase, Book, Award, FileText, Link, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Define the valid section names as a type
type SectionName = 'experience' | 'publications' | 'qualifications' | 'mlProject';

// Define the type for the expanded sections state
interface ExpandedSections {
  experience: boolean;
  publications: boolean;
  qualifications: boolean;
  mlProject: boolean;
}

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  link?: string;
  linkLabel?: string;
  achievements?: string[];
  aiAchievements?: string[];
}

interface PublicationLink {
  url: string;
  text: string;
}

interface PublicationItemProps {
  title: string;
  links: PublicationLink[];
}

// Add this interface near the top with other interfaces
interface ResumeData {
  basics: {
    name: string;
    summary: string;
    email?: string;
    phone?: string;
    location?: {
      city?: string;
      region?: string;
    };
  };
  work: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
    aiAchievements?: string[];
  }[];
}

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    experience: false,
    publications: false,
    qualifications: false,
    mlProject: false
  });

  const toggleSection = (section: SectionName) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  // Replace the exportToMarkdown function
  const exportToMarkdown = () => {
    const resumeData: ResumeData = {
      basics: {
        name: "Justin Hennessy",
        summary: "I am a passionate lifelong learner with a career defined by growth, innovation, and a commitment to empowering others. At the core of my success is a belief that people and their potential drive meaningful outcomes. I specialise in guiding organisations to navigate the transformative possibilities of AI, focusing on ethical adoption, strategic integration, and workforce enablement."
      },
      work: [
        {
          company: "Intalgo.ai",
          position: "Co-Founder",
          startDate: "Apr 2024",
          endDate: "Present",
          summary: "An AI enablement consultancy dedicated to helping businesses leverage AI technologies to drive growth and operational efficiency. Focused on developing strategies for ethical AI adoption, workforce enablement, and operational transformation.",
          highlights: [
            "Co-developed an AI maturity model to guide organisations in assessing readiness and adopting AI effectively.",
            "Assessed AI maturity to provide strategic and tactical guidance for organisational growth.",
            "Delivered AI literacy programs to enhance workforce understanding and adoption of AI tools.",
            "Built internal expertise and fostered cross-functional collaboration for handling AI projects.",
            "Developed strategic roadmaps to integrate AI into business operations, ensuring alignment with innovation goals.",
            "Advocated for ethical AI implementation, focusing on risk mitigation and societal impact.",
            "Ensured compliance with AI governance standards and regulatory requirements."
          ]
        },
        {
          company: "Recit.app",
          position: "Fractional CTO/Co-Founder",
          startDate: "Sep 2024",
          endDate: "Present",
          summary: "Technical Co-founded Recit, a tool designed to streamline month-end reconciliations for businesses using Xero. Overseeing the Development of features for seamless Xero integration, task allocation, and consistent workflows to improve efficiency and collaboration in accounting teams. Focused on creating an intuitive platform to enhance accuracy and simplify financial close processes.",
          highlights: []
        },
        {
          company: "Instaband",
          position: "Fractional CTO/Co-Founder",
          startDate: "Oct 2022",
          endDate: "Present",
          summary: "Instaband is an online platform designed to connect musicians, bands, and DJs with event organisers, venues, and individuals. It simplifies the process of discovering, previewing, and booking live music for events, offering artist profiles, audio samples, and direct booking options. Catering to weddings, private parties, corporate events, and live music venues, Instaband empowers users to create memorable experiences with flexible tools and resources for a seamless booking experience.",
          highlights: []
        },
        {
          company: "Accruent",
          position: "Chief Technical Officer, RedEye",
          startDate: "Dec 2023",
          endDate: "Apr 2024",
          summary: "Led technical integration and AI initiatives following RedEye's acquisition.",
          highlights: [
            "Ran point on all systems and process integrations for Security, IT, Engineering, and Infrastructure.",
            "Connected all parts of the business, especially Product Engineering."
          ],
          aiAchievements: [
            "Experimented with using LLMs to extract title block information from engineering CAD drawings using OpenAI's vision API.",
            "Established an AI education program to enhance AI literacy across all staff, with a focus on prompt engineering.",
            "Initiated and coordinated a cross-company collaboration to explore product innovation using LLMs for semantic search and inference.",
            "Formed and led a splinter product team to develop and deploy enhancements to RedEye's drawing search capabilities."
          ]
        },
        {
          company: "RedEye.co",
          position: "Chief Technical (Product) Officer",
          startDate: "Dec 2022",
          endDate: "Dec 2023",
          summary: "Led RedEye's product and technical strategy, focusing on DevOps maturity and developer experience.",
          highlights: [
            "Influenced RedEye's acquisition, due diligence, and closing.",
            "Oversaw RedEye's product and technical strategy, DevOps maturity, and developer experience.",
            "Worked with the Chief Data Officer on RedEye's DataOps and Data strategy.",
            "Coached the CEO on a new vision and mission and helped roll it out.",
            "Rebooted the executive team from a foundation of trust.",
            "Delivered all technical and product commitments failed over the previous 4 years.",
            "Unified Product, Engineering, Platform, and Security under one banner.",
            "Completed ISO27001 surveillance audit and certification."
          ],
          aiAchievements: [
            "Built and deployed an internal ChatBOT to manage internal product and business information, integrated with Microsoft Teams (leveraging OpenAI's API and local vector storage).",
            "Designed and implemented process automation augmented with LLM capabilities, including a product feedback system that significantly accelerated the review of customer and business feedback using low/no-code pipeline technology.",
            "Conducted R&D into using convolutional neural networks for engineering drawing classification.",
            "Began a deep dive into AI agents, exploring autonomous processes that leverage synthetic reasoning for task completion."
          ]
        },
        {
          company: "Smartsheet",
          position: "Chief Technical Officer, Outfit",
          startDate: "Sep 2022",
          endDate: "Dec 2022",
          summary: "Post-acquisition transitional contract role focusing on systems integration.",
          highlights: [
            "Ran point on all systems and process integrations for Security, IT, Engineering, and Infrastructure.",
            "Connected all parts of the business, particularly Product Engineering."
          ]
        },
        {
          company: "Outfit.io",
          position: "Chief Technical (Product) Officer",
          startDate: "Jul 2021",
          endDate: "Sep 2022",
          summary: "Led product and engineering functions, driving significant organizational improvements.",
          highlights: [
            "Played a pivotal role in Outfit's acquisition, with my leadership team identified as key individuals in the deal.",
            "Unified Product and Engineering functions into one team.",
            "Transformed Professional Services into a profitable arm of the company.",
            "Established a platform team for 'plumbing,' tooling, and automation.",
            "Facilitated company-wide OKR rollout.",
            "Completed ISO27001 certification."
          ]
        },
        {
          company: "Plato (volunteering)",
          position: "Leadership Mentor",
          startDate: "May 2018",
          endDate: "Current",
          summary: "Volunteer mentoring role focused on technical leadership development.",
          highlights: [
            "Mentored numerous technical leaders and the CEO of Plato.",
            "Assisted the VP of Engineering at SheerID with setting technical vision and direction."
          ]
        },
        {
          company: "Maropost Inc",
          position: "Chief Technical Officer",
          startDate: "Jan 2021",
          endDate: "Jul 2021",
          summary: "Led technical strategy and team development following acquisition.",
          highlights: [
            "Led Agile transformation for 80+ team members.",
            "Integrated a large contingent from India to optimise organisational communication structures.",
            "Managed a $3M+ platform budget.",
            "Influenced technical strategy at the executive level."
          ]
        },
        {
          company: "Neto eCommerce",
          position: "Chief Technical Officer",
          startDate: "Dec 2014",
          endDate: "Jan 2021",
          summary: "Led technical strategy and platform development for a leading eCommerce platform.",
          highlights: [
            "Reduced platform COGS by 30%.",
            "Delivered technical strategies for efficiency and scalability.",
            "Completed PCI Level 1 compliance projects.",
            "Built a leadership team focused on technical excellence."
          ]
        },
        {
          company: "Various Companies",
          position: "IT and Operations Roles",
          startDate: "Jul 1999",
          endDate: "Dec 2014",
          summary: "Held various IT and operations roles, focusing on infrastructure improvements, platform migrations, and project management.",
          highlights: [
            "Led platform migrations to AWS and implemented automation strategies.",
            "Facilitated Agile adoption and developed Dockerised infrastructure.",
            "Managed IT infrastructure, including server migrations and network architecture enhancements."
          ]
        }
      ]
    };

    const markdown = `# ${resumeData.basics.name}

${resumeData.basics.summary}

## Professional Experience
${resumeData.work.map(job => `
### ${job.position} at ${job.company}
${job.startDate} - ${job.endDate}

${job.summary}

Key Achievements:
${job.highlights.map(highlight => `- ${highlight}`).join('\n')}
${job.aiAchievements ? `\nAI Achievements:\n${job.aiAchievements.map(achievement => `- ${achievement}`).join('\n')}` : ''}
`).join('\n')}

## Publications / Case Studies / Interviews

### Professional Blog
- [Intalgo.ai](https://intalgo.substack.com/)
- [Personal](https://justinhennessy.substack.com/archive?sort=new)
- [Personal (Old)](https://justinhennessy.com/blog)

### Guest Speaker
- [AWS Presentation on Growth Mindset](https://www.youtube.com/watch?v=tsKoWuaGXPk&list=PLP5Q2TkbA7pGtqFqt13U48YoNy57WAMRx)

### Case Studies
- [Cloudflare](https://www.cloudflare.com/case-studies/neto-leverages-cloudflare-to-secure-and-supercharge-their-ecommerce/)
- [Datadog](https://www.datadoghq.com/case-studies/neto/)

### Interviews
- [Devpath.fm](https://www.devpath.fm/episodes/engineering-vp-and-mentor-justin-hennessy)
- [Taking Control Podcast](https://open.spotify.com/episode/1t630rGsiXWthNjX4EAZlu)

## Professional Qualifications

### Qualifications
- 2015: Amazon Certified Solutions Architect Associate
- 2011: Certified Scrum Master
- 2004: Red Hat Certified Technician (RHCT)
- 2001: Microsoft Certified System Engineer NT 4.0

### Development
- 2011-2012: Agile Coaching with Lyssa Adkins
- 2002: Project Management Theory
`;

    // Create blob and download
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Remove the expandAll function and replace with this:
  const toggleAllSections = (expand: boolean) => {
    setExpandedSections({
      experience: expand,
      publications: expand,
      qualifications: expand,
      mlProject: expand
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Justin Hennessy</h1>
          <p className="text-xl">Fractional CTO | Coach and Mentor | Tech Co-founder | Content Creator | Musician | Streamer</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => toggleAllSections(!Object.values(expandedSections).every(Boolean))}
          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
        >
          {Object.values(expandedSections).every(Boolean) ? (
            <>
              <Minimize2 className="h-4 w-4 mr-2" />
              Collapse All
            </>
          ) : (
            <>
              <Maximize2 className="h-4 w-4 mr-2" />
              Expand All
            </>
          )}
        </Button>
      </div>

      <main className="container mx-auto px-4 py-8">
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
            {expandedSections.experience ?
              <ChevronUp className="text-blue-600" /> :
              <ChevronDown className="text-blue-600" />
            }
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
                description="Technical Co-founded, Recit is designed to make month-end reconciliation faster and more accurate, reducing the need for double-checking and double-handling. Deeply integrated with Xero, it offers a simple way to standardise workflows, coordinate smoothly across clients, and streamline communication. With Recit, you gain a single lens to view all client data, building an organised structure your clients can rely on as they grow. Not only does it allow you to handle reconciliations quickly with consistent accuracy, but it also provides a workflow that clients can easily pick up as they scale. As Recit evolves, we’re working toward a future where finance teams are seamlessly augmented by AI, with automation taking on repetitive processes and freeing teams to focus on strategy and growth. Recit is building the path to an autonomous future in finance – where streamlined efficiency meets intelligent support."
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
                description="Led technical integration following RedEye's acquisition by Accruent, a leading provider of intelligent solutions for the built environment."
                link="https://www.accruent.com/resources/press-releases/accruent-acquisition-redeye-accelerate-strategy-next-generation"
                linkLabel="Acquisition announcement"
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
                link="https://www.smartsheet.com/content-center/news/smartsheet-acquires-outfit-bolstering-its-industry-leading-digital-asset"
                linkLabel="Acquisition announcement"
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
                link="https://community.platohq.com/mentors/justin-hennessy"
                linkLabel="Profile"
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
                link="https://www.maropost.com/press/martech-leader-maropost-acquires-e-commerce-platform-neto-for-60m-considerations/"
                linkLabel="Acquisition announcement"
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
                company="Various Companies"
                position="IT and Operations Roles"
                period="Jul 1999 to Dec 2014"
                description="Held various IT and operations roles, focusing on infrastructure improvements, platform migrations, and project management."
                achievements={[
                  "Led platform migrations to AWS and implemented automation strategies.",
                  "Facilitated Agile adoption and developed Dockerised infrastructure.",
                  "Managed IT infrastructure, including server migrations and network architecture enhancements."
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

        <div className="flex gap-4 mt-4">
          <Button onClick={exportToMarkdown}>
            Export to Markdown
          </Button>
        </div>
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

function ExperienceItem({
  company,
  position,
  period,
  description,
  link,
  linkLabel,
  achievements,
  aiAchievements
}: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-blue-600">
          {company}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-600 ml-2 inline-flex items-center"
            >
              <Link className="inline h-4 w-4 mr-1" />
              {linkLabel || 'Read more'}
            </a>
          )}
        </CardTitle>
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

function PublicationItem({ title, links }: PublicationItemProps) {
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