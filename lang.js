const translations = {
  hr: {
    mainTitle: "Znanja i sposobnosti",
    name: "Marija Malešević",
    generalTitle: "Opšte",
    general: "Završila sam gimnaziju (2021–2025), sa završnim radom iz informatike i računarstva na temu „Razvoj operativnih sistema od UNIX-a do modernih OS”. Kroz rad sam produbila znanje prvenstveno o procesorskom radu, hardverskim komponentama, njihovoj evoluciji i funkcionalnostima. Posjedujem iskustvo rada u operativnim sistemima (Windows 7/11), kao i s osnovnim računarskim programima i paketima (MS Office). Takođe imam znanje iz baza podataka, uz iskustvo korištenja Microsoft Excela i SQL jezika.",
    hobbiesTitle: "Slobodne aktivnosti",
    hobbiesIntro: "Iskustvo u dizajnu stičem i dalje razvijam u slobodno vrijeme. Radim na izradi funkcionalnih i estetski prilagođenih elemenata za interakciju unutar korisničkog interfejsa, kao i na dizajnu web stranica i aplikacija, što uključuje:",
    ux: "razumijevanje principa UX dizajna, s fokusom na pristupačnost i jednostavnost korištenja",
    ui: "primjenu principa UI dizajna, tipografije i vizuelne hijerarhije, uz veliki broj manjih privatnih projekata",
    tools: "korištenje alata Figma, Adobe XD i Canva",
    course: "položen kurs iz UI/UX dizajna (JS Guru, Banja Luka) sa praktičnim zadacima",
    responsive: "izradu responsivnog dizajna za različite uređaje i rezolucije",
    workTitle: "Radno iskustvo",
    work: "Kroz dosadašnji rad na poziciji tehničke podrške brzo napredujem u rješavanju problema: instalacija hardvera, održavanje softvera i ostale neophodne aktivnosti koje interni softverski sistem zahtijeva. Radi lakše revizije, sve korake evidentiram na strukturiran način unutar tiketnog sistema, u unaprijed definisanom formatu. Po potrebi se konsultujem s nadređenima u slučaju bilo kakve alarmantne situacije ili nedoumice.",
    langTitle: "Jezičke sposobnosti",
    en: "Engleski jezik – odlično znanje u govoru i pismu; aktivno korištenje u komunikaciji i radu s tehničkom dokumentacijom.",
    it: "Italijanski jezik – osnovno znanje; razumijevanje svakodnevnih izraza. Trenutno u fazi daljeg usavršavanja kroz samostalno učenje.",
    otherTitle: "Ostalo",
    other1: "Prilagodljiva sam i otvorena za timski rad; komunikativna, s pozitivnim pristupom prema korisnicima.",
    other2: "Fleksibilna sam po pitanju radnih sati, uz iskustvo rada i u noćnim smjenama.",
    other3: "Takođe imam iskustvo rada od kuće, uz stabilnu i pouzdanu internet konekciju u svakom trenutku.",
    other4: "Smatram se angažovanom, motivisanom i komunikativnom osobom, s velikom željom za daljim profesionalnim usavršavanjem",
    birth: "Datum rođenja:",
    birthValue: "2. decembar 2006.",
    place: "Mjesto prebivališta:",
    placeValue: "Banja Luka, Bosna i Hercegovina",
    citizenship: "Državljanstvo:",
    citizenshipValue: "Bosansko i hrvatsko (dvojno)",
    email: "marijja06@gmail.com"
  },
  en: {
    mainTitle: "Skills and Abilities",
    name: "Marija Malešević",
    generalTitle: "General",
    general: "I graduated from high school (2021–2025), with a final thesis in informatics and computer science on the topic \"Development of operating systems from UNIX to modern OS\". Through my work, I deepened my knowledge primarily about processor operations, hardware components, their evolution and functionalities. I have experience working with operating systems (Windows 7/11), as well as with basic computer programs and packages (MS Office). I also have knowledge of databases, with experience using Microsoft Excel and SQL.",
    hobbiesTitle: "Free Activities",
    hobbiesIntro: "I gain and continue to develop design experience in my free time. I work on creating functional and aesthetically adapted elements for interaction within the user interface, as well as on designing websites and applications, which includes:",
    ux: "understanding UX design principles, with a focus on accessibility and ease of use",
    ui: "applying UI design principles, typography and visual hierarchy, with a large number of smaller private projects",
    tools: "use of tools: Figma, Adobe XD and Canva",
    course: "completed a UI/UX design course (JS Guru, Banja Luka) with practical assignments",
    responsive: "creating responsive design for different devices and resolutions",
    workTitle: "Work Experience",
    work: "Through my current work in a technical support position, I am quickly advancing in problem solving: hardware installation, software maintenance and other necessary activities that the internal software system requires. For easier review, I record all steps in a structured manner within the ticket system, in a predefined format. I consult with supervisors when necessary in case of any alarming situation or uncertainty.",
    langTitle: "Language Skills",
    en: "English – excellent knowledge in speech and writing; active use in communication and working with technical documentation.",
    it: "Italian – basic knowledge; understanding of everyday expressions. Currently in the phase of further improvement through self-study.",
    otherTitle: "Other",
    other1: "I am adaptable and open to teamwork; communicative, with a positive approach towards users.",
    other2: "I am flexible regarding working hours, with experience working in night shifts as well.",
    other3: "I also have experience working from home, with stable and reliable internet connection at all times.",
    other4: "I consider myself an engaged, motivated and communicative person, with a great desire for further professional improvement",
    birth: "Date of birth:",
    birthValue: "December 2, 2006",
    place: "Place of residence:",
    placeValue: "Banja Luka, Bosnia and Herzegovina",
    citizenship: "Citizenship:",
    citizenshipValue: "Bosnian and Croatian (dual)",
    email: "marijja06@gmail.com"
  }
};



document.addEventListener('DOMContentLoaded', () => {
  const langSwitch = document.getElementById('lang-switch');
  if (!langSwitch) return;

  let currentLang = (langSwitch.dataset.lang === 'en') ? 'en' : 'hr';

  function setLanguage(lang) {
    document.querySelectorAll('[data-translate-key]').forEach(el => {
      const key = el.getAttribute('data-translate-key');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    langSwitch.textContent = lang === 'hr' ? 'EN' : 'HR';
    currentLang = lang;
  }

  langSwitch.addEventListener('click', () => {
    setLanguage(currentLang === 'hr' ? 'en' : 'hr');
  });

  setLanguage(currentLang);
});