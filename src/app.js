/**
 *  IMPORTANT → The styles from the css/styles.css
 * are already applied to the html, however you are expected to add more css
 * in order to satisfy all the requirements.
 *
 *  HINT (you need to change the start tag):
 *
 * Before:
 * 	<i class="icon-home"></i>
 *
 * After:
 * 	<i class="icon-home"></i> --> this is custom html
 *
 *
 *   (You will be adding a lot of html to this file)
 *
 *  TODO1: The render function is already coded in the HTML, you will find it
 *  after line 70. Your assignment is to complete the handleChange function
 *  and the render function so the website works as expected.
 *
 *  <ining>For now, let's just make sure that we can render good html
 *  when the page first loads.
 */
window.onload = function() {
  render(window.variables); //render the cards on start
};

window.variables = {
  includeCover: true,
  background:
    "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
  avatarURL:
    "https://storage.googleapis.com/breathecode-asset-images/3c15f2d5e8b14c8b5bc801cf99a02f1c88a450303a550a875e395b9ae099fa54.jpg",
  socialMediaPosition: "right",

  twitter: null,
  github: "alesanchezr",
  linkedin: null,
  instagram: null,

  name: null,
  lastName: null,
  role: null,
  country: null,
  city: null
};

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  // Cover image section - only show if includeCover is true
  let coverHTML = '';
  if (variables.includeCover && variables.background) {
    coverHTML = `<div class="cover"><img src="${variables.background}" /></div>`;
  }

  // Avatar image
  let avatarHTML = '';
  if (variables.avatarURL) {
    avatarHTML = `<img src="${variables.avatarURL}" class="photo" />`;
  }

  // Name and last name
  let nameHTML = '';
  if (variables.name || variables.lastName) {
    const fullName = `${variables.name || ''} ${variables.lastName || ''}`.trim();
    nameHTML = `<h1>${fullName}</h1>`;
  }

  // Role
  let roleHTML = '';
  if (variables.role) {
    roleHTML = `<h2>${variables.role}</h2>`;
  }

  // Location (city and country)
  let locationHTML = '';
  if (variables.city || variables.country) {
    let location = '';
    if (variables.city && variables.country) {
      location = `${variables.city}, ${variables.country}`;
    } else if (variables.city) {
      location = variables.city;
    } else if (variables.country) {
      location = variables.country;
    }
    locationHTML = `<h3>${location}</h3>`;
  }

  // Social media links
  let socialMediaClass = variables.socialMediaPosition === 'left' ? 'position-left' : 'position-right';
  let socialMediaHTML = '<ul class="' + socialMediaClass + '">';

  if (variables.twitter) {
    socialMediaHTML += `<li><a href="https://twitter.com/${variables.twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>`;
  }
  if (variables.github) {
    socialMediaHTML += `<li><a href="https://github.com/${variables.github}" target="_blank"><i class="fab fa-github"></i></a></li>`;
  }
  if (variables.linkedin) {
    socialMediaHTML += `<li><a href="https://linkedin.com/in/${variables.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>`;
  }
  if (variables.instagram) {
    socialMediaHTML += `<li><a href="https://instagram.com/${variables.instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>`;
  }

  socialMediaHTML += '</ul>';

  // Only show social media if at least one exists
  if (!variables.twitter && !variables.github && !variables.linkedin && !variables.instagram) {
    socialMediaHTML = '';
  }

  // Combine all HTML
  let finalHTML = `<div class="widget">
    ${coverHTML}
    ${avatarHTML}
    ${nameHTML}
    ${roleHTML}
    ${locationHTML}
    ${socialMediaHTML}
  </div>`;

  document.querySelector("#widget_content").innerHTML = finalHTML;
}

/**
 * Leave this codes as is, because this is the part the system will use to test
 * your code. Do not change this function or the moment it gets executed.
 */
document.querySelectorAll(".picker").forEach(function(elm) {
  elm.addEventListener("change", function(e) {
    const attribute = e.target.getAttribute("for");
    let values = {};
    values[attribute] =
      this.value == "" || this.value == "null"
        ? null
        : this.value == "true"
        ? true
        : this.value == "false"
        ? false
        : this.value;
    render(Object.assign(window.variables, values));
  });
});
