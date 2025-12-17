class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                
                ul {
                    display: flex;
                    justify-content: center;
                    padding: 1rem 0;
                    margin: 0;
                    list-style: none;
                }
                
                li {
                    margin: 0 1.5rem;
                }
                
                a {
                    color: #4B5563;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 0;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                a:hover {
                    color: #3B82F6;
                }
                
                a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #3B82F6;
                    transition: width 0.3s ease;
                }
                
                a:hover::after {
                    width: 100%;
                }
                
                @media (max-width: 640px) {
                    ul {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    li {
                        margin: 0.5rem 0;
                    }
                }
            </style>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);