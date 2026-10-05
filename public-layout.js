/* Shared public-site footer. Keep the support address in site.js configured before launch. */
(function () {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;
  footer.innerHTML = `<div class="footer-grid"><section><h2>Earnova</h2><p>Learn about affiliate marketing and discover promotional opportunities.</p><p class="notice">Results are not guaranteed. Participation does not promise income, sales, commissions, or withdrawals.</p></section><section><h3>Help</h3><div class="footer-links"><a href="faq.html">FAQ</a><a href="help.html">Help &amp; Support</a><a href="contact.html">Contact Us</a></div></section><section><h3>Legal</h3><div class="footer-links"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms &amp; Conditions</a><a href="affiliate-disclosure.html">Affiliate Disclosure</a><a href="withdrawal-policy.html">Withdrawal Policy</a></div></section></div><p class="footer-note">© 2026 Earnova. All rights reserved. <a href="about.html">About Earnova</a></p>`;
}());
