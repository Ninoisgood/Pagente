class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1E293B;
                    color: white;
                    padding: 2rem 0;
                    text-align: center;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }
                
                .social-link {
                    margin: 0 0.75rem;
                    color: white;
                    transition: color 0.3s ease;
                }
                
                .social-link:hover {
                    color: #3B82F6;
                }
                
                .copyright {
                    font-size: 0.875rem;
                    opacity: 0.8;
                }
                
                .footer-links {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }
                
                .footer-link {
                    margin: 0 1rem;
                    color: white;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: #3B82F6;
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="LinkedIn">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="GitHub">
                            <i data-feather="github"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="Twitter">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="Instagram">
                            <i data-feather="instagram"></i>
                        </a>
                    </div>
                    <div class="footer-links">
                        <a href="#about" class="footer-link">About</a>
                        <a href="#skills" class="footer-link">Skills</a>
                        <a href="#projects" class="footer-link">Projects</a>
                        <a href="#contact" class="footer-link">Contact</a>
                        <a href="#" class="footer-link">Privacy Policy</a>
                    </div>
                    <p class="copyright">© 2025 Chris Niño Pagente. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);