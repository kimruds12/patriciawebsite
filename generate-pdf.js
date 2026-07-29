import fs from 'fs';
import PDFDocument from 'pdfkit';

// Create a document
const doc = new PDFDocument({ margin: 50 });

// Pipe its output to a file
doc.pipe(fs.createWriteStream('public/Patricia_Arlie_Miguel_Resume.pdf'));

// Colors
const primaryColor = '#E29381';
const darkColor = '#1A1A1A';
const greyColor = '#555555';
const lineColor = '#E5E7EB';

// Header
doc.fontSize(22).fillColor(darkColor).text('PATRICIA ARLIE D. MIGUEL', { align: 'center', paragraphGap: 5 });
doc.fontSize(9).fillColor(greyColor).text('358 Tangke St., Malinta, Valenzuela City  |  0992-706-4506  |  pdmiguel9961val@student.fatima.edu.ph', { align: 'center', paragraphGap: 20 });

// Draw line
doc.moveTo(50, doc.y).lineTo(562, doc.y).strokeColor(lineColor).stroke().moveDown(1.5);

// Helper for section headings
function addSectionHeader(title) {
  doc.fontSize(12).fillColor(darkColor).text(title.toUpperCase(), { paragraphGap: 6 });
  doc.moveTo(50, doc.y).lineTo(562, doc.y).strokeColor(lineColor).stroke().moveDown(0.8);
}

// Helper for job/education entries
function addEntryHeader(title, date, subTitle) {
  const currentY = doc.y;
  doc.fontSize(10).fillColor(darkColor).text(title, { lineGap: 2 });
  if (date) {
    // Keep it on the same line but aligned to the right
    doc.fontSize(9).fillColor(greyColor).text(date, { align: 'right', y: currentY });
  }
  if (subTitle) {
    doc.fontSize(9).fillColor(greyColor).text(subTitle, { paragraphGap: 8 });
  }
}

// EDUCATION
addSectionHeader('Education');
addEntryHeader('Our Lady of Fatima University', '2023 - Present', 'Bachelor of Science in Business Administration, Major in Banking and Finance');
doc.moveDown(0.5);
addEntryHeader('Our Lady of Fatima University', '2023', 'Senior High School, Graduated with Honors');
doc.moveDown(1);

// WORK EXPERIENCE
addSectionHeader('Work Experience');
addEntryHeader("Arlie's Pest Control (Family Business), Valenzuela City", '2022 - Present', 'Business Support Assistant');
doc.fontSize(9).fillColor(darkColor);
doc.text('• Identified and secured new clients, contributing to the growth of the business\'s customer base.', { textIndent: 12, paragraphGap: 4 });
doc.text('• Assisted in the preparation and organization of financial statements to support accurate business record-keeping.', { textIndent: 12, paragraphGap: 4 });
doc.text('• Communicated directly with clients to address inquiries and maintain strong working relationships.', { textIndent: 12, paragraphGap: 12 });
doc.moveDown(1);

// SKILLS
addSectionHeader('Skills');
doc.fontSize(10).fillColor(darkColor).text('Financial Support', { paragraphGap: 4 });
doc.fontSize(9).fillColor(greyColor);
doc.text('• SAP Business One — enterprise resource planning software (Logistics and Financials modules)', { textIndent: 12, paragraphGap: 3 });
doc.text('• Basic financial statement preparation and bookkeeping support', { textIndent: 12, paragraphGap: 8 });

doc.fontSize(10).fillColor(darkColor).text('Client Relations', { paragraphGap: 4 });
doc.fontSize(9).fillColor(greyColor);
doc.text('• Client sourcing and relationship management', { textIndent: 12, paragraphGap: 3 });
doc.text('• Client-facing coordination and inquiry handling', { textIndent: 12, paragraphGap: 8 });

doc.fontSize(10).fillColor(darkColor).text('Soft Skills', { paragraphGap: 4 });
doc.fontSize(9).fillColor(greyColor);
doc.text('• Interpersonal communication', { textIndent: 12, paragraphGap: 3 });
doc.text('• Microsoft Office (Word, Excel, Canva)', { textIndent: 12, paragraphGap: 12 });
doc.moveDown(1);

// AWARDS & HONORS
addSectionHeader('Awards & Honors');
addEntryHeader('Dean\'s Lister, 2nd Year (1st and 2nd Semester)', '', '');
doc.moveDown(0.2);
addEntryHeader('Academic Scholarship, 25% Tuition Fee Discount', '1st Sem S.Y. 2024-2025', '');
doc.moveDown(0.2);
addEntryHeader('Academic Scholarship, 25% Tuition Fee Discount', '2nd Sem S.Y. 2025-2026', '');
doc.moveDown(1);

// TRAININGS & PROFESSIONAL DEVELOPMENT
addSectionHeader('Trainings & Professional Development');
doc.fontSize(9).fillColor(darkColor).text('• SAP Business One Student Courseware (TB1000 Logistics, TB1100 Financials)', { textIndent: 12, paragraphGap: 4 });
doc.text('• Metrobank Seminar, "Think Before You Click: A Hybrid Seminar on Preventing Social Engineering Attacks"', { textIndent: 12, paragraphGap: 12 });
doc.moveDown(1);

// COMMUNITY INVOLVEMENT
addSectionHeader('Community Involvement');
addEntryHeader('National Service Training Program (NSTP) - Civic Welfare Training Service (CWTS)', 'Summer Term, A.Y. 2023-2024', 'Completed civic welfare training and community service requirements.');
doc.moveDown(0.5);
addEntryHeader('Focus Group Discussion, "Moving On: Hoping for the End of the Pandemic"', 'Participant', 'Community discussion on post-pandemic recovery.');
doc.moveDown(1);

// REFERENCES
addSectionHeader('References');
doc.fontSize(9).fillColor(greyColor).text('Available upon request.', { paragraphGap: 12 });

// Finalize PDF file
doc.end();
console.log('PDF Resume generated successfully at public/Patricia_Arlie_Miguel_Resume.pdf');
