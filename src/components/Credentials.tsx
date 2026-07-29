import React, { useState, useEffect } from 'react';
import { FileText, ExternalLink, X, Download, Eye } from 'lucide-react';

import sapImg from '../assets/Sapbusiness1.png';
import metrobankImg from '../assets/metrobank.png';
import patriciaImg from '../assets/patricia.png';
import createImg from '../assets/create.png';
import continuousImg from '../assets/continuous.png';
import internationalImg from '../assets/international.png';
import buildImg from '../assets/build.png';

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
  pdf: string;
}

export const Credentials: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<CredentialItem | null>(null);

  const credentialsList: CredentialItem[] = [
    {
      id: 'sap-business-one',
      title: 'SAP Business One',
      badge: 'SAP CERTIFICATION',
      details: 'This certificate demonstrates my foundational knowledge of SAP Business One, an Enterprise Resource Planning (ERP) system used to streamline business operations. Through this training, I gained an understanding of business processes such as inventory management, purchasing, sales, financial management, and reporting, which are essential in supporting organizational efficiency and decision-making.',
      image: sapImg,
      pdf: sapPdf,
    },
    {
      id: 'metrobank-seminar',
      title: 'Metrobank Seminar Certificate – Think Before You Click: A Hybrid Seminar on Preventing Social Engineering Attacks',
      badge: 'SEMINAR CERTIFICATE',
      details: 'This seminar enhanced my awareness of cybersecurity and the importance of protecting sensitive information from social engineering attacks. I learned how to identify common cyber threats, such as phishing and online scams, and apply safe digital practices to minimize security risks in both personal and professional settings.',
      image: metrobankImg,
      pdf: metrobankPdf,
    },
    {
      id: 'patricia-fgd',
      title: 'MOVING ON: HOPING FOR THE END OF THE PANDEMIC',
      badge: 'SEMINAR CERTIFICATE',
      details: 'This seminar provided valuable insights into the challenges and lessons brought about by the COVID-19 pandemic. It emphasized resilience, adaptability, and the importance of maintaining a positive outlook while preparing for a safer and more productive future in both personal and professional environments.',
      image: patriciaImg,
      pdf: patriciaPdf,
    },
    {
      id: 'create-sustainability',
      title: 'Eversity – Create Workplace Policies and Procedures for Sustainability',
      badge: 'EVERSITY CERTIFICATE',
      details: 'This course strengthened my understanding of workplace sustainability by introducing strategies for creating effective environmental policies and procedures. It emphasized the importance of responsible resource management and sustainable practices that contribute to long-term organizational success.',
      image: createImg,
      pdf: createPdf,
    },
    {
      id: 'continuous-improvement',
      title: 'Eversity – Continuous Improvement Management',
      badge: 'EVERSITY CERTIFICATE',
      details: 'This certificate reflects my understanding of continuous improvement principles and their role in enhancing organizational performance. I learned how to identify opportunities for improvement, analyze processes, and implement strategies that promote efficiency, productivity, and quality.',
      image: continuousImg,
      pdf: continuousPdf,
    },
    {
      id: 'international-forecasting',
      title: 'Eversity – International Market and Business Forecasting',
      badge: 'EVERSITY CERTIFICATE',
      details: 'Through this course, I developed a better understanding of global market trends and business forecasting techniques. It enhanced my ability to analyze market conditions, evaluate business opportunities, and make informed decisions using forecasting methods and economic insights.',
      image: internationalImg,
      pdf: internationalPdf,
    },
    {
      id: 'critical-thinking',
      title: 'Eversity – Build Critical Thinking in Others with Emotional Intelligence',
      badge: 'EVERSITY CERTIFICATE',
      details: 'This course emphasized the value of combining emotional intelligence with critical thinking to improve communication, collaboration, and decision-making. It equipped me with strategies to encourage analytical thinking, build stronger relationships, and contribute effectively in team environments.',
      image: buildImg,
      pdf: buildPdf,
    },
  ];

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPdf]);

  return (
    <section
      id="credentials"
      className="scroll-section scroll-mt-20 w-full min-h-dvh flex flex-col items-center justify-start pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-bgGradientStart to-bgGradientEnd"
    >
      <div className="max-w-7xl w-full flex flex-col items-start py-2">

        {/* Header Title Section (matching Picture 1 format) */}
        <div className="text-left w-full mb-10 z-10">
          <span className="text-xs font-extrabold tracking-[0.25em] text-primary uppercase font-sans flex items-center gap-2">
            FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-textDark font-sans mt-2">
            Recent Credentials
          </h2>
          <p className="text-sm md:text-base text-secondary-dark font-sans max-w-2xl mt-2 leading-relaxed">
            A compilation of my most recent certificates, works and achievements. Click on any credential below to view the official PDF document.
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
                    <Eye size={14} /> Click View Certificate to inspect PDF
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

                {/* View Certificate Button */}
                <button
                  onClick={() => setSelectedPdf(item)}
                  className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-xs py-3 px-4 rounded-xl border border-primary/20 hover:border-primary transition-all duration-300 shadow-sm active:scale-95 cursor-pointer font-sans"
                >
                  <FileText size={15} />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF View Modal Overlay */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-fade-in">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/40">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-xl flex-shrink-0">
                  <FileText size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-sm md:text-base font-bold text-textDark font-sans line-clamp-1">
                    {selectedPdf.title}
                  </h3>
                  <p className="text-xs text-secondary-dark font-sans hidden sm:block line-clamp-1">
                    {selectedPdf.details}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={selectedPdf.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm font-sans"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200/60 rounded-xl transition-colors cursor-pointer"
                  title="Close viewer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body */}
            <div className="flex-1 w-full bg-slate-100 relative min-h-[400px] md:min-h-[550px] overflow-hidden">
              <object
                data={selectedPdf.pdf}
                type="application/pdf"
                className="w-full h-full min-h-[400px] md:min-h-[550px]"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                  <p className="text-sm text-secondary-dark font-sans">
                    Your browser does not support inline PDF viewing. You can view or download the certificate below:
                  </p>
                  <a
                    href={selectedPdf.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-xs font-sans shadow-md"
                  >
                    <ExternalLink size={16} /> Open PDF in New Tab
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
