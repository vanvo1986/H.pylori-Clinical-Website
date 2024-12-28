document.addEventListener('DOMContentLoaded', function() {
  // Example research data (This can come from a JSON file or database)
  const researchData = [
    {
      title: "Helicobacter pylori Infection Treatment",
      year: 2023,
      authors: "Buensalido et al.",
      journal: "Medscape",
      link: "https://reference.medscape.com/?_gl=1*dzkgk2*_gcl_au*NTc0Nzg5NDk4LjE3MzUzNTEwNDk."
    },
    {
      title: "Helicobacter pylori",
      year: 2024,
      authors: "Bradley Connor",
      journal: "CDC",
      link: "https://wwwnc.cdc.gov/travel/yellowbook/2024/infections-diseases/helicobacter-pylori#diagnosis"
    },
    {
      title: "Helicobacter pylori (H. pylori) infection",
      year: 2022,
      authors: "Pruthi et al.",
      journal: "Mayo Clinic",
      link: "https://www.mayoclinic.org/diseases-conditions/h-pylori/symptoms-causes/syc-20356171"
    },
    {
      title: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection",
      year: 2024,
      authors: "Chey et al.",
      journal: "The American Journal of Gastroenterology ",
      link: "https://journals.lww.com/ajg/fulltext/2024/09000/acg_clinical_guideline__treatment_of_helicobacter.13.aspx?context=featuredarticles&collectionid=5"
    },
    {
      title: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection",
      year: 2017,
      authors: "Chey et al.",
      journal: "The American Journal of Gastroenterology ",
      link: "https://journals.lww.com/ajg/Fulltext/2017/02000/ACG_Clinical_Guideline__Treatment_of_Helicobacter.12.aspx"
    }
  ];

  // Function to populate the research articles into the list
  function loadResearchData() {
    const researchList = document.getElementById('research-list');
    researchList.innerHTML = ''; // Clear any existing list items

    researchData.forEach(function(item) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>Authors: ${item.authors} | Published: ${item.year}</p>
        <p>Journal: ${item.journal}</p>
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
             item.journal.toLowerCase().includes(searchTerm);
    });
    displayFilteredResearch(filteredData);
  }

  // Function to display filtered research
  function displayFilteredResearch(filteredData) {
    const researchList = document.getElementById('research-list');
    researchList.innerHTML = ''; // Clear existing list

    filteredData.forEach(function(item) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>Authors: ${item.authors} | Published: ${item.year}</p>
        <p>Journal: ${item.journal}</p>
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
