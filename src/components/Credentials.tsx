import React from 'react';
import { FileText, Eye } from 'lucide-react';

import sapImg from '../assets/Sapbusiness1.png';
import metrobankImg from '../assets/metrobank.png';
import patriciaImg from '../assets/patricia.png';
import createImg from '../assets/create.png';
import continuousImg from '../assets/continuous.png';
import internationalImg from '../assets/international.png';
import buildImg from '../assets/build.png';
import patdeanlistImg from '../assets/patdeanlist.jpg';

import sapPdf from '../assets/SAP BUSINESS ONE.pdf';
import metrobankPdf from '../assets/Metrobank Seminar Certificate.pdf';
import patriciaPdf from '../assets/PATRICIA ARLIE D. MIGUEL_FGD-CERTIFICATE.pdf';
import createPdf from '../assets/certificate-certificate-in-create-workplace-policies-and-procedures-for-sustainability-pace-4-68412c123fcec796ab03c926.pdf';
import continuousPdf from '../assets/certificate-certificate-in-continuous-improvement-management-pace-2-68412cda45c65ac8b605a6fc.pdf';
import internationalPdf from '../assets/certificate-certificate-in-international-market-and-business-forecasting-pace-3-68412741d4957a81490571f6.pdf';
import buildPdf from '../assets/certificate-certificate-in-build-critical-thinking-in-others-with-emotional-intelligence-pace-1-68412e51ced3cd44c80963e9.pdf';

interface CredentialItem {
  id: string;
  title: string;
  badge: string;
  details: string;
  image: string;
  fileSource: string;
  fileType: 'pdf' | 'image';
}

export const Credentials: React.FC = () => {

  const credentialsList: CredentialItem[] = [
    {
      id: 'sap-business-one',
      title: 'SAP Business One',
      badge: 'SAP CERTIFICATION',
      details: 'This certificate demonstrates my foundational knowledge of SAP Business One, an Enterprise Resource Planning (ERP) system used to streamline business operations. Through this training, I gained an understanding of business processes such as inventory management, purchasing, sales, financial management, and reporting, which are essential in supporting organizational efficiency and decision-making.',
      image: sapImg,
      fileSource: sapPdf,
      fileType: 'pdf',
    },
    {
      id: 'metrobank-seminar',
      title: 'Metrobank Seminar Certificate – Think Before You Click: A Hybrid Seminar on Preventing Social Engineering Attacks',
      badge: 'SEMINAR CERTIFICATE',
      details: 'This seminar enhanced my awareness of cybersecurity and the importance of protecting sensitive information from social engineering attacks. I learned how to identify common cyber threats, such as phishing and online scams, and apply safe digital practices to minimize security risks in both personal and professional settings.',
      image: metrobankImg,
      fileSource: metrobankPdf,
      fileType: 'pdf',
    },
    {
      id: 'patricia-fgd',
      title: 'MOVING ON: HOPING FOR THE END OF THE PANDEMIC',
      badge: 'SEMINAR CERTIFICATE',
      details: 'This seminar provided valuable insights into the challenges and lessons brought about by the COVID-19 pandemic. It emphasized resilience, adaptability, and the importance of maintaining a positive outlook while preparing for a safer and more productive future in both personal and professional environments.',
      image: patriciaImg,
      fileSource: patriciaPdf,
      fileType: 'pdf',
    },
    {
      id: 'create-sustainability',
      title: 'Eversity – Create Workplace Policies and Procedures for Sustainability',
      badge: 'EVERSITY CERTIFICATE',
      details: 'This course strengthened my understanding of workplace sustainability by introducing strategies for creating effective environmental policies and procedures. It emphasized the importance of responsible resource management and sustainable practices that contribute to long-term organizational success.',
      image: createImg,
      fileSource: createPdf,
      fileType: 'pdf',
    },
    {
      id: 'continuous-improvement',
      title: 'Eversity – Continuous Improvement Management',
      badge: 'EVERSITY CERTIFICATE',
      details: 'This certificate reflects my understanding of continuous improvement principles and their role in enhancing organizational performance. I learned how to identify opportunities for improvement, analyze processes, and implement strategies that promote efficiency, productivity, and quality.',
      image: continuousImg,
      fileSource: continuousPdf,
      fileType: 'pdf',
    },
    {
      id: 'international-forecasting',
      title: 'Eversity – International Market and Business Forecasting',
      badge: 'EVERSITY CERTIFICATE',
      details: 'Through this course, I developed a better understanding of global market trends and business forecasting techniques. It enhanced my ability to analyze market conditions, evaluate business opportunities, and make informed decisions using forecasting methods and economic insights.',
      image: internationalImg,
      fileSource: internationalPdf,
      fileType: 'pdf',
    },
    {
      id: 'critical-thinking',
      title: 'Eversity – Build Critical Thinking in Others with Emotional Intelligence',
      badge: 'EVERSITY CERTIFICATE',
      details: 'This course emphasized the value of combining emotional intelligence with critical thinking to improve communication, collaboration, and decision-making. It equipped me with strategies to encourage analytical thinking, build stronger relationships, and contribute effectively in team environments.',
      image: buildImg,
      fileSource: buildPdf,
      fileType: 'pdf',
    },
    {
      id: 'deanlist-certificate',
      title: "Patricia – Dean's Lister Certificate",
      badge: "DEAN'S LISTER",
      details: 'This certificate honors my academic excellence and Dean’s List achievement, highlighting my dedication, consistent performance, and strong discipline in both studies and project work.',
      image: patdeanlistImg,
      fileSource: patdeanlistImg,
      fileType: 'image',
    },
  ];

  return (
    <section
      id="credentials"
      className="scroll-section scroll-mt-20 w-full min-h-dvh flex flex-col items-center justify-start pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-transparent"
    >
      <div className="max-w-7xl w-full flex flex-col items-start py-2">

        {/* Header Title Section */}
        <div className="text-left w-full mb-10 z-10">
          <span className="text-xs font-extrabold tracking-[0.25em] text-primary uppercase font-sans flex items-center gap-2">
            FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-textDark font-sans mt-2">
            Recent Credentials
          </h2>
          <p className="text-sm md:text-base text-secondary-dark font-sans max-w-2xl mt-2 leading-relaxed">
            A compilation of my most recent certificates, works and achievements. Click on any credential below to view the official document.
          </p>
        </div>


        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full z-10">
          {credentialsList.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group bg-white/80 backdrop-blur-md"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-3 right-3 bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md tracking-widest font-sans uppercase">
                  {item.badge}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-bold font-sans flex items-center gap-1.5">
                    <Eye size={14} /> Click to view certificate
                  </span>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4 text-left">
                <div>
                  <h3 className="text-base font-extrabold text-textDark leading-snug group-hover:text-primary transition-colors font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-secondary-dark leading-relaxed font-sans mt-2 line-clamp-4">
                    {item.details}
                  </p>
                </div>

                {/* View Certificate — opens file directly in new tab */}
                <a
                  href={item.fileSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-xs py-3 px-4 rounded-xl border border-primary/20 hover:border-primary transition-all duration-300 shadow-sm active:scale-95 cursor-pointer font-sans"
                >
                  <FileText size={15} />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
