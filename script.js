document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const note = form.querySelector(".form-note");

    if (button) {
      button.textContent = "Inquiry Ready to Send";
    }

    if (note) {
      note.textContent =
        "Thanks for your interest. Connect this form to your email or form provider when you're ready to receive inquiries.";
    }
  });
});
