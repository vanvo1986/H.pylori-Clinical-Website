document.addEventListener('DOMContentLoaded', function() {
  // Example research data with Journal, Website, and Book sources
  const researchData = [
    {
      title: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection",
      year: 2017,
      authors: "Chey et al.",
      journal: "The American Journal of Gastroenterology",
      link: "https://journals.lww.com/ajg/Fulltext/2017/02000/ACG_Clinical_Guideline__Treatment_of_Helicobacter.12.aspx"
    },
    {
      title: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection",
      year: 2024,
      authors: "Chey et al.",
      journal: "Gastroenterology Essentials",
      link: "https://journals.lww.com/ajg/fulltext/2024/09000/acg_clinical_guideline__treatment_of_helicobacter.13.aspx?context=featuredarticles&collectionid=5"
    },
    {
      title: "Antibiotic Resistance and Therapeutic Efficacy of Helicobacter pylori Infection in Pediatric Patients—A Tertiary Center Experience",
      year: 2023,
      authors: "Galos et al.",
      journal: "MDPI",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9854557/pdf/antibiotics-12-00146.pdf"
    },
    {
      title: "Comparison of the management of Helicobacter pylori infection between the older and younger European populations",
      year: 2023,
      authors: "Jonitis et al.",
      journal: "Scientific Reports",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10567783/pdf/41598_2023_Article_43287.pdf"
    },
    {
      title: "Global prevalence of Helicobacter pylori antibiotic resistance among children in the world health organization regions between 2000 and 2023",
      year: 2024,
      authors: "Salahi-Niri et al.",
      journal: "BMC Medicine",
      link: "https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-024-03816-y#citeas"
    },
    {
      title: "Helicobacter pylori- CDC Yellow Book 2024",
      year: 2024,
      authors: "Bradley Connor",
      website: "CDC",
      link: "https://wwwnc.cdc.gov/travel/yellowbook/2024/infections-diseases/helicobacter-pylori#diagnosis"
    },
    {
      title: "Helicobacter pylori Infection in the Era of Antibiotic Resistance",
      year: 2016,
      authors: "Stollman, Neil",
      journal: "Gastroenterology & Hepatology",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4865773/"
    },
    {
      title: "Helicobacter pylori (H. pylori) infection",
      year: 2022,
      authors: "Pruthi et al.",
      website: "Mayo Clinic",
      link: "https://www.mayoclinic.org/diseases-conditions/h-pylori/symptoms-causes/syc-20356171"
    },
    {
      title: "Helicobacter pylori Infections",
      year: 2022,
      authors: "Atherton et al.",
      book: "Harrison's Principles of Internal Medicine, 21e",
      link: "https://accesspharmacy-mhmedical-com.www2.lib.ku.edu/content.aspx?sectionid=265422379&bookid=3095&Resultclick=2"
    },
    {
      title: "Helicobacter pylori Infection Treatment",
      year: 2023,
      authors: "Buensalido et al.",
      website: "Medscape",
      link: "https://emedicine.medscape.com/article/2172395-overview?_gl=1*1op1uvg*_gcl_au*NTc0Nzg5NDk4LjE3MzUzNTEwNDk.&form=fpf"
    },
    {
      title: "H. pylori Infection: ACG Updates Treatment Recommendations",
      year: 2018,
      authors: "Randel, AMber",
      journal: "American Family Physician",
      link: "https://www.aafp.org/pubs/afp/issues/2018/0115/p135.html"
    },
    {
      title: "Treatment of Helicobacter pylori Infection in Patients with Penicillin Allergy",
      year: 2023,
      authors: "Liu et al.",
      journal: "MDPI",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10135207/pdf/antibiotics-12-00737.pdf"
    }
  ];

  // Function to populate the research articles into the list
  function loadResearchData() {
    const researchList = document.getElementById('research-list');
    researchList.innerHTML = ''; // Clear any existing list items

    researchData.forEach(function(item) {
      const listItem = document.createElement('li');
      listItem.classList.add('research-item');
      
      // Determine the category and display accordingly (Journal, Website, or Book)
      let sourceHTML = '';
      if (item.journal) {
        sourceHTML = `<strong>Journal:</strong> <a href="${item.link}" target="_blank">${item.journal}</a>`;
      } else if (item.website) {
        sourceHTML = `<strong>Website:</strong> <a href="${item.link}" target="_blank">${item.website}</a>`;
      } else if (item.book) {
        sourceHTML = `<strong>Book:</strong> <a href="${item.link}" target="_blank">${item.book}</a>`;
      }

      // Populate the list item with the research details
      listItem.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>Authors: ${item.authors} | Published: ${item.year}</p>
        <p>${sourceHTML}</p>
        <hr>
      `;
      researchList.appendChild(listItem);
    });
  }

  // Search function to filter research articles
  function filterResearch() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredData = researchData.filter(function(item) {
      return item.title.toLowerCase().includes(searchTerm) || 
             item.authors.toLowerCase().includes(searchTerm) || 
             (item.journal && item.journal.toLowerCase().includes(searchTerm)) ||
             (item.website && item.website.toLowerCase().includes(searchTerm)) ||
             (item.book && item.book.toLowerCase().includes(searchTerm));
    });
    displayFilteredResearch(filteredData);
  }

  // Function to display filtered research
  function displayFilteredResearch(filteredData) {
    const researchList = document.getElementById('research-list');
    researchList.innerHTML = ''; // Clear existing list

    filteredData.forEach(function(item) {
      const listItem = document.createElement('li');
      listItem.classList.add('research-item');
      
      // Determine the category and display accordingly (Journal, Website, or Book)
      let sourceHTML = '';
      if (item.journal) {
        sourceHTML = `<strong>Journal:</strong> <a href="${item.link}" target="_blank">${item.journal}</a>`;
      } else if (item.website) {
        sourceHTML = `<strong>Website:</strong> <a href="${item.link}" target="_blank">${item.website}</a>`;
      } else if (item.book) {
        sourceHTML = `<strong>Book:</strong> <a href="${item.link}" target="_blank">${item.book}</a>`;
      }

      // Populate the list item with the research details
      listItem.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>Authors: ${item.authors} | Published: ${item.year}</p>
        <p>${sourceHTML}</p>
        <hr>
      `;
      researchList.appendChild(listItem);
    });
  }

  // Load all research data on page load
  loadResearchData();

  // Assign the filterResearch function to the search bar
  document.getElementById('search').addEventListener('input', filterResearch);
});
