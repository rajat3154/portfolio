
import hacktoskill from "./hacktoskill.png";
import elevatelabs from "./elevatelabs.jpg";
import nxtwave from "./nxtwave.png";
import javadsa from "./javadsa.jpg";
import edunet from "./edunet.jpg";
import aspireforher from "./aspireforher.jpg";
import linkedin from "./linkedin.jpg";
import mludemy from "./mludemy.jpg";
import aws1 from "./aws1.jpg";
import aws2 from "./aws2.jpg";
import microcertification from "./microcertification.jpg";
import cohort from "./cohort.jpg";
import datascience from "./datascience.jpg";
import delloitte from "./delloitte.jpg";
import tata from "./tata.jpg";
import ibm1 from "./ibm1.jpg";
import ibm2 from "./ibm2.jpg";


export const certifications = [
      {
            _id: "1",
            title: "Google Gen AI Academy",
            issuingOrganization: "Google Cloud",
            organizationLogo:
                  "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
            issueDate: "2025-07-23",
            expirationDate: "2026-07-23",
            credentialId: "2025H2S04GENAI-A900076",
            credentialUrl:
                  "https://certificate.hack2skill.com/user/genai9/2025H2S04GENAI-A900076",
            certificateImage: { url: hacktoskill },
            skills: ["Vertex AI", "Gemini API", "LLMs", "Generative AI"],
            category: "genai",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },

      {
            _id: "2",
            title: "Data Analyst Internship",
            issuingOrganization: "Elevate Labs",
            organizationLogo: "https://example.com/default_logo.png",
            issueDate: "2025-06-16",
            expirationDate: "2026-06-16",
            credentialId: "EL-DA-2025-06-16-001",
            credentialUrl:
                  "https://www.elevatelabs.com/certificates/EL-DA-2025-06-16-001",
            certificateImage: { url: elevatelabs },
            skills: [
                  "Data Analysis",
                  "Real-world projects",
                  "Analytical thinking",
                  "Professionalism",
            ],
            category: "data",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "3",
            title: "AI for Students",
            issuingOrganization: "NxtWave",
            organizationLogo: "https://example.com/default_logo.png",
            issueDate: "2025-04-04",
            expirationDate: "2026-04-04",
            credentialId: "NW-AI-2025-04-04-001",
            credentialUrl:
                  "https://www.nxtwave.com/certificates/NW-AI-2025-04-04-001",
            certificateImage: { url: nxtwave },
            skills: ["Generative AI", "AI Model Building"],
            category: "ai",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "4",
            title: "Alpha (DSA with Java) Course",
            issuingOrganization: "Apna College",
            organizationLogo: "https://example.com/default_logo.png",
            issueDate: "2025-07-23",
            expirationDate: "2026-07-23",
            credentialId: "679140f6f71074a7d60d73ee",
            credentialUrl:
                  "https://www.apnacollege.in/certificates/679140f6f71074a7d60d73ee",
            certificateImage: { url: javadsa },
            skills: ["Data Structures and Algorithms", "Java"],
            category: "dsa",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "5",
            title: "IBM AI & Cloud Internship",
            issuingOrganization: "Edunet Foundation in Collaboration with AICTE",
            organizationLogo: "https://example.com/edunet_logo.png",
            issueDate: "2024-01-15",
            expirationDate: "2025-01-15",
            credentialId: "STU656c3b5e83d7b1701591902",
            credentialUrl:
                  "https://www.edunetfoundation.org/verify/STU656c3b5e83d7b1701591902",
            certificateImage: { url: edunet },
            skills: [
                  "SkillsBuild",
                  "IBM Cloud Platform",
                  "Emerging Technologies",
                  "AI",
                  "Cloud",
            ],
            category: "cloud",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "6",
            title: "The Generative AI Revolution Workshop",
            issuingOrganization:
                  "AspireForHer, in collaboration with AWS, SheKnowsAI, and MaTPO",
            organizationLogo: "https://example.com/aspireforher_logo.png",
            issueDate: "2024-09-21",
            expirationDate: "2025-09-21",
            credentialId: "AFH-GAI-2024-09-21-001",
            credentialUrl:
                  "https://www.aspireforher.com/verify/AFH-GAI-2024-09-21-001",
            certificateImage: { url: aspireforher },
            skills: ["Generative AI", "Innovation", "AI Revolution"],
            category: "genai",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "7",
            title: "Career Essentials in Generative AI",
            issuingOrganization: "LinkedIn Learning and Microsoft",
            organizationLogo: "https://example.com/linkedin_microsoft_logo.png",
            issueDate: "2024-09-14",
            expirationDate: "2025-09-14",
            credentialId:
                  "5d1b1af8bc1b624a2ab36b44b33e69153e0d6a6518fb836c19c620e93f5b67",
            credentialUrl:
                  "https://www.linkedin.com/learning/certificates/5d1b1af8bc1b624a2ab36b44b33e69153e0d6a6518fb836c19c620e93f5b67",
            certificateImage: { url: linkedin },
            skills: [
                  "Computer Ethics",
                  "Artificial Intelligence (AI)",
                  "Generative AI",
            ],
            category: "grnai",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "8",
            title: "Data Science,Machine Learning,DL,NLP Bootcamp",
            issuingOrganization: "Udemy",
            organizationLogo: "https://example.com/udemy_logo.png",
            issueDate: "2025-07-12",
            expirationDate: "2026-07-12",
            credentialId: "UC-8b73c7db-ec54-4acb-ad08-0460bc1e5457",
            credentialUrl: "ude.my/UC-8b73c7db-ec54-4acb-ad08-0460bc1e5457",
            certificateImage: { url: mludemy },
            skills: [
                  "Data Science",
                  "Machine Learning",
                  "Deep Learning (DL)",
                  "Natural Language Processing (NLP)",
            ],
            category: "datascience",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "9",
            title: "AWS Academy Cloud Foundations",
            issuingOrganization: "AWS Academy",
            organizationLogo: "https://example.com/aws_academy_logo.png",
            issueDate: "2024-07-10",
            expirationDate: "2025-07-10",
            credentialId: null,
            credentialUrl: "https://www.credly.com/go/7SFdsUWe",
            certificateImage: { url: aws1 },
            skills: ["Cloud Computing", "AWS Cloud Foundations"],
            category: "cloud",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "10",
            title: "AWS Academy Introduction to Cloud Semester 1",
            issuingOrganization: "AWS Academy",
            organizationLogo: "https://example.com/aws_academy_logo.png",
            issueDate: "2024-07-07",
            expirationDate: "2025-07-07",
            credentialId: null,
            credentialUrl: "https://www.credly.com/go/gxmX19YW",
            certificateImage: { url: aws2 },
            skills: ["Cloud Computing", "AWS Introduction to Cloud"],
            category: "cloud",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "11",
            title: "Micro-Certification - Welcome to ServiceNow",
            issuingOrganization: "ServiceNow",
            organizationLogo: "https://example.com/servicenow_logo.png",
            issueDate: "2025-04-05",
            expirationDate: "2026-04-05",
            credentialId: "SN-MC-2025-04-05-001",
            credentialUrl:
                  "https://www.servicenow.com/certificates/SN-MC-2025-04-05-001",
            certificateImage: { url: microcertification },
            skills: ["ServiceNow", "Micro-Certification"],
            category: "cloud",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "12",
            title: "Academic India Cohort",
            issuingOrganization: "ServiceNow",
            organizationLogo: "https://example.com/servicenow_logo.png",
            issueDate: "2025-08-08",
            expirationDate: "2026-08-08",
            credentialId: "SN-AIC-2025-08-08-001",
            credentialUrl:
                  "https://www.servicenow.com/certificates/SN-AIC-2025-08-08-001",
            certificateImage: { url: cohort },
            skills: ["ServiceNow", "Academic Program", "IT Service Management"],
            category: "cloud",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "13",
            title: "Introduction to Data Science course",
            issuingOrganization: "Cisco Networking Academy",
            organizationLogo: "https://example.com/cisco_networking_academy_logo.png",
            issueDate: "2025-01-20",
            expirationDate: "2026-01-20",
            credentialId: null,
            credentialUrl:
                  "https://www.netacad.com/credentials/verify?id=some_id_from_qr_code",
            certificateImage: { url: datascience },
            skills: [
                  "Data Analytics",
                  "AI in Data",
                  "Machine Learning in Data",
                  "Data Analytics Career Paths",
            ],
            category: "datascience",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "14",
            title: "Data Analytics Job Simulation",
            issuingOrganization: "Deloitte",
            organizationLogo: "https://example.com/deloitte_logo.png",
            issueDate: "2025-04-16",
            expirationDate: "2026-04-16",
            credentialId: "DAH2FRuP1nb8QN3",
            credentialUrl: "https://www.forage.com/verify/WPYTGAXfEYRQuqv9A",
            certificateImage: { url: delloitte },
            skills: ["Data analysis", "Forensic technology"],
            category: "datascience",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "15",
            title: "Data Visualisation",
            issuingOrganization: "Forage (in collaboration with Tata)",
            organizationLogo: "https://example.com/forage_tata_logo.png",
            issueDate: "2025-01-13",
            expirationDate: "2026-01-13",
            credentialId: "KHorggumKHZYTJxYH",
            credentialUrl: "https://www.theforage.com/verify/3p474Hyj6Ypw8CE",
            certificateImage: { url: tata },
            skills: [
                  "Data Visualisation",
                  "Framing Business Scenarios",
                  "Choosing Right Visuals",
                  "Creating Effective Visuals",
                  "Communicating Insights and Analysis",
            ],
            category: "datascience",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "16",
            title: "Getting Started with Enterprise Data Science",
            issuingOrganization: "IBM",
            organizationLogo: "https://example.com/ibm_logo.png",
            issueDate: "2023-12-27",
            expirationDate: "2024-12-27",
            credentialId: null,
            credentialUrl: "https://www.credly.com/go/FABQ4XKr",
            certificateImage: { url: ibm1 },
            skills: ["Enterprise Data Science"],
            category: "datascience",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      {
            _id: "17",
            title: "Getting Started with Enterprise-grade AI",
            issuingOrganization: "IBM",
            organizationLogo: "https://example.com/ibm_logo.png",
            issueDate: "2024-01-06",
            expirationDate: "2025-01-06",
            credentialId: null,
            credentialUrl: "https://www.credly.com/go/Z81y1DfI",
            certificateImage: { url: ibm2 },
            skills: ["Enterprise-grade AI"],
            category: "ai",
            stats: [
                  { label: "Modules", value: "26" },
                  { label: "Completion", value: "100%" },
                  { label: "Projects", value: "5" },
            ],
      },
      // Add other certifications...
];