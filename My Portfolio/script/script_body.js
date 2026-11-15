/* -------------------------------------------------------------
           1. DATA STRUCTURES (Skills & Projects)
           ------------------------------------------------------------- */
const skillsData = [
    // Frontend
    { name: 'XML', category: 'frontend', icon: 'fa-solid fa-code', color: 'text-orange-400' },
    { name: 'HTML 5', category: 'frontend', icon: 'fa-brands fa-html5', color: 'text-orange-500' },
    { name: 'CSS 3', category: 'frontend', icon: 'fa-brands fa-css3-alt', color: 'text-blue-500' },

    //Backend
    { name: 'PHP', category: 'backend', icon: 'fa-brands fa-php', color: 'text-indigo-400' },
    { name: 'Javascript', category: 'backend', icon: 'fa-brands fa-js', color: 'text-yellow-400' },
    { name: 'Java', category: 'backend', icon: 'fa-brands fa-java', color: 'text-red-500' },
    { name: 'Python & ML', category: 'backend', icon: 'fa-brands fa-python', color: 'text-amber-400' },
    { name: 'Express.js', category: 'backend', icon: 'fa-solid fa-server', color: 'text-slate-400' },
    { name: 'React.js', category: 'backend', icon: 'fa-brands fa-react', color: 'text-sky-400' },
    { name: 'Node.js', category: 'backend', icon: 'fa-brands fa-node-js', color: 'text-green-500' },

    // Database
    { name: 'MySQL', category: 'database', icon: 'fa-solid fa-database', color: 'text-blue-400' },
    { name: 'MongoDB', category: 'database', icon: 'fa-solid fa-database', color: 'text-green-400' },
    { name: 'SQLite', category: 'database', icon: 'fa-solid fa-database', color: 'text-cyan-500' },
    { name: 'Firebase', category: 'database', icon: 'fa-solid fa-fire', color: 'text-amber-500' },

    // Tools & Technologies
    { name: 'Wordpress', category: 'tools', icon: 'fa-brands fa-wordpress', color: 'text-blue-600' },
    { name: 'LLM', category: 'tools', icon: 'fa-solid fa-brain', color: 'text-purple-400' },
    { name: 'Adobe Illustrator', category: 'tools', icon: 'fa-solid fa-pen-nib', color: 'text-amber-600' },
    { name: 'MS Office', category: 'tools', icon: 'fa-solid fa-file-lines', color: 'text-red-400' },
    { name: 'Android Studio', category: 'tools', icon: 'fa-brands fa-android', color: 'text-green-400' },
    { name: 'Visual Studio Code', category: 'tools', icon: 'fa-solid fa-code', color: 'text-blue-500' },
    { name: 'PyCharm', category: 'tools', icon: 'fa-solid fa-laptop-code', color: 'text-emerald-400' },
    { name: 'Ollama', category: 'tools', icon: 'fa-solid fa-robot', color: 'text-neutral-300' },

    //DevOps
    { name: 'Git & GitHub', category: 'devops', icon: 'fa-brands fa-github', color: 'text-purple-400' },
    { name: 'Vercel / Netlify', category: 'devops', icon: 'fa-solid fa-cloud-arrow-up', color: 'text-cyan-400' }
];


        const projectsData = [
            {
                id: 'proj1',
                title: 'Real-Time Weather Forecast App',
                fullDesc: `It's a live weather telemetry application. The user searches for any global city to retrieve real-time weather metrics: current temperature, weather conditions (sunny, rainy, overcast) with dynamic icons, humidity, wind speed, atmospheric pressure, and a 5-day temperature forecast. Handle network loading spinners and invalid city errors gracefully.`,
                tags: ['JavaScript (ES6+)', 'TailwindCSS', 'HTML5', 'CSS3', 'OpenWeatherMap API'],
                image: 'assets/images/Weather app.webp',
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com/shadewing2024/Datheon_Full_Stack_Web_Development_Internship/tree/main/Real%20Time%20wheather%20App',
                features: [
                    'Dynamically change the background based on whether conditions',
                    'Current location weather detection',
                    '5-day forecast with temperature trends',
                    'Dynamic weather icons and condition descriptions',
                ]
            },
            {
                id: 'proj2',
                title: 'Smart Air Quality Prediction and Alert System',
                fullDesc: 'Smart Air Quality Prediction and Alert System is an Android-based application developed to monitor air pollution, predict Air Quality Index (AQI), and provide users with timely alerts about unhealthy air quality conditions. The application integrates a Machine Learning model with TensorFlow Lite to predict AQI using eight input features. It also uses Firebase to store AQI history and manage user alerts. The primary objective is to help users understand air pollution levels, monitor environmental conditions, and make informed decisions to reduce exposure to harmful air pollutants.',
                tags: ['Java', 'Python', 'Machine Learning', 'TF Lite', 'Firebase', 'SQLite', 'XML', 'Android'],
                image: 'assets/images/Smart Air Quality.webp',
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com',
                features: [
                    'User registration and authentication using Firebase Auth.',
                    'Admin and Citizen dashboard',
                    'AQI history with the graphical representation of AQI trends.',
                    'Offline data access',
                    'Automatic AQI prediction every 60 minutes using a pre-trained AI model.',
                    'Send Alerts to users when AQI exceeds safe levels.',
                    'AQI threshold and settings',
                    'Alerts monitoring and settings',
                    'User support system for reporting issues and activities',
                    'Pakistan timezone support (Asia/Karachi).'
                ]
            },
            {
                id: 'proj3',
                title: 'Dynamic Task Manager & Progress Tracker',
                fullDesc: 'TaskFlow is a task management application designed to help users organize daily activities, manage priorities, and track task completion through a simple and user-friendly interface. It allows users to create, edit, and delete tasks, categorize them into Work, Personal, and Study categories, assign due dates, and filter tasks by All, Active, and Completed.',
                tags: ['Node.js', 'TailwindCSS', 'Express.js', 'HTML 5', 'Mongoose', 'Rest API', 'MongoDB'],
                image: 'assets/images/task manager.webp',
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com/shadewing2024/Pynexia_Internship/tree/main/Week-1/To%20Do%20List',
                features: [
                    'Create, Read, Update and Delete tasks',
                    'Organize tasks into Work, Personal and Study categories.',
                    'Assign due dates to tasks.',
                    'Filter tasks by All, Active and Completed.',
                    'Save tasks using browser Local Storage'
                ]
            },
            {
                id: 'proj4',
                title: 'Employee Attendance System',
                fullDesc: 'An employee attendance management web application developed to manage employee attendance, track daily working hours, and maintain attendance records. The system includes authentication, office timing configuration, and automated attendance scheduling.',
                tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'REST API'],
                image: 'assets/images/employee attendance.webp',
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com/shadewing2024/Pynexia_Internship/tree/main/Week-2/Employee%20Attendance%20System',
                features: [
                    'JWT-based authentication.',
                    'Employee registration and login.',
                    'Password hashing using bcrypt.',
                    'Prevention of duplicate check-ins.',
                    'Check-out requires an existing check-in.',
                    'Daily attendance status',
                    'Attendance history (last 30 records).',
                    'Automatic absent attendance records through scheduler.',
                    'Office opening and closing time configuration.',
                    'Automatic absent attendance records through scheduler.',
                    'Pakistan timezone support (Asia/Karachi).'
                ]
            },
            {
                id: 'proj5',
                title: 'JWT Authentication & Login System',
                fullDesc: 'A secure user authentication backend developed using Node.js, Express.js, and MongoDB. The system provides user registration, login, JWT-based authentication, password hashing, and protected user profile access through RESTful APIs.',
                tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JSON Web Token (JWT)', 'bcrypt', 'dotenv', 'REST API'],
                image: 'assets/images/JWT.webp',
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com/shadewing2024/Pynexia_Internship/tree/main/Week-1/Login%20System%20Backend',
                features: [
                    'User registration and account creation',
                    'Secure user login.',
                    'Password hashing using bcrypt.',
                    'JWT token generation and verification.',
                    'Protected profile endpoint.',
                    'Authentication middleware.',
                    'Email verification functionality.',
                    'Input validation and error handling.',
                    'MongoDB database integration.',
                    'RESTful API architecture.'
                ]
            }
        ];

        /* -------------------------------------------------------------
           2. THEME TOGGLE (Persistent State via localStorage)
           ------------------------------------------------------------- */
        const themeToggleBtn = document.getElementById('themeToggle');
        const themeToggleMobileBtn = document.getElementById('themeToggleMobile');
        const themeIcon = document.getElementById('themeIcon');
        const themeIconMobile = document.getElementById('themeIconMobile');

        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.documentElement.classList.remove('dark');
                updateThemeIcons('light');
            } else {
                // Default to dark mode
                document.documentElement.classList.add('dark');
                updateThemeIcons('dark');
            }
        }

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                updateThemeIcons('light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcons('dark');
            }
        }

        function updateThemeIcons(mode) {
            if (mode === 'light') {
                themeIcon.className = 'fa-solid fa-sun text-amber-500 text-lg';
                if (themeIconMobile) themeIconMobile.className = 'fa-solid fa-sun text-amber-500';
            } else {
                themeIcon.className = 'fa-solid fa-moon text-cyan-400 text-lg';
                if (themeIconMobile) themeIconMobile.className = 'fa-solid fa-moon text-cyan-400';
            }
        }

        themeToggleBtn.addEventListener('click', toggleTheme);
        themeToggleMobileBtn.addEventListener('click', toggleTheme);

        /* -------------------------------------------------------------
           3. MOBILE HAMBURGER MENU
           ------------------------------------------------------------- */
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        /* -------------------------------------------------------------
           4. TYPEWRITER ANIMATION (Hero Title)
           ------------------------------------------------------------- */
        const phrases = ['Software Engineer', 'Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'];
        let phraseIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        const typewriterEl = document.getElementById('typewriter');

        function typeEffect() {
            const currentPhrase = phrases[phraseIdx];
            
            if (isDeleting) {
                typewriterEl.textContent = currentPhrase.substring(0, charIdx - 1);
                charIdx--;
            } else {
                typewriterEl.textContent = currentPhrase.substring(0, charIdx + 1);
                charIdx++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIdx === currentPhrase.length) {
                typeSpeed = 2000; // Pause at top
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        /* -------------------------------------------------------------
           5. SKILLS GRID RENDER & FILTER
           ------------------------------------------------------------- */
        function renderSkills(filter = 'all') {
            const container = document.getElementById('skillsGrid');
            container.innerHTML = '';

            const filtered = filter === 'all' 
                ? skillsData 
                : skillsData.filter(s => s.category === filter);

            filtered.forEach(skill => {
                const card = document.createElement('div');
                card.className = 'glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 group';
                card.innerHTML = `
                    <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"> 
                        <i class="${skill.icon} ${skill.color}"></i>
                    </div>
                    <span class="text-xs sm:text-sm font-semibold text-center text-slate-800 dark:text-slate-200">${skill.name}</span>
                `;
                container.appendChild(card);
            });
        }

        function filterSkills(category) {
            const buttons = document.querySelectorAll('.skill-filter-btn');
            buttons.forEach(btn => {
                if (btn.getAttribute('data-filter') === category) {
                    btn.className = 'skill-filter-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all text-gray-500 shadow-md shadow-cyan-500/20';
                } else {
                    btn.className = 'skill-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700';
                }
            });
            renderSkills(category);
        }

        /* -------------------------------------------------------------
           6. PROJECTS GRID RENDER & MODAL POPUP
           ------------------------------------------------------------- */
        function renderProjects() {
            const container = document.getElementById('projectsGrid');
            container.innerHTML = '';

            projectsData.forEach(project => {
                const card = document.createElement('div');
                card.className = 'glass-card rounded-3xl overflow-hidden group border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10';
                
                const tagsHTML = project.tags.map(t => 
                    `<span class="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${t}</span>`
                ).join(' ');

                card.innerHTML = `
                    <div>
                        <div class="relative overflow-hidden cursor-pointer" onclick="openProjectModal('${project.id}')">
                            <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" class="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-semibold text-xs">
                                <i class="fa-solid fa-expand"></i> View Details
                            </div>
                        </div>
                        <div class="p-6 space-y-3">
                            <div class="flex flex-wrap gap-1.5">${tagsHTML}</div>
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors cursor-pointer" onclick="openProjectModal('${project.id}')">${project.title}</h3>
                            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">${project.fullDesc}</p>
                        </div>
                    </div>
                    <div class="p-6 pt-0 flex items-center gap-3">
                        <button onclick="openProjectModal('${project.id}')" class="flex-1 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:scale-105 transform hover:text-white text-xs font-bold transition-all text-center">
                            Learn More
                        </button>
                        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:text-cyan-500 transition-colors" title="GitHub Source">
                            <i class="fa-brands fa-github text-base"></i>
                        </a>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function openProjectModal(id) {
            const project = projectsData.find(p => p.id === id);
            if (!project) return;

            const modalContent = document.getElementById('modalContent');
            const featuresList = project.features.map(f => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-cyan-500 mt-1"></i> <span>${f}</span></li>`).join('');
            const tagsHTML = project.tags.map(t => `<span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">${t}</span>`).join(' ');

            modalContent.innerHTML = `
                <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" class="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-md">
                
                <div class="space-y-4">
                    <div class="flex flex-wrap gap-2">${tagsHTML}</div>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${project.title}</h2>
                    <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${project.fullDesc}</p>
                </div>

                <div class="space-y-2">
                    <h4 class="font-bold text-sm text-slate-900 dark:text-white">Key Features:</h4>
                    <ul class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">${featuresList}</ul>
                </div>

                <div class="pt-4 flex flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800">
                    <a href="${project.liveUrl}" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs flex items-center gap-2 shadow-md">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                    </a>
                    <a href="${project.githubUrl}" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-2">
                        <i class="fa-brands fa-github"></i> Source Code
                    </a>
                </div>
            `;

            const modal = document.getElementById('projectModal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeProjectModal() {
            const modal = document.getElementById('projectModal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        /* -------------------------------------------------------------
           7. CONTACT FORM VALIDATION & FEEDBACK
           ------------------------------------------------------------- */
        function handleContactSubmit(e) {
            e.preventDefault();
            const feedback = document.getElementById('contactFeedback');
            const submitBtn = document.getElementById('submitBtn');

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i> Sending...';

            setTimeout(() => {
                feedback.className = "mt-4 p-4 rounded-xl text-xs sm:text-sm text-center bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20";
                feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. I will get back to you soon.';
                feedback.classList.remove('hidden');

                document.getElementById('contactForm').reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
            }, 1200);
        }

        /* -------------------------------------------------------------
           8. DEPLOYMENT HELPER MODAL & TABS
           ------------------------------------------------------------- */
        const deployGuides = {
            vercel: `
                <ol class="list-decimal list-inside space-y-2">
                    <li>Push your portfolio code to a <strong>GitHub repository</strong>.</li>
                    <li>Go to <a href="https://vercel.com" target="_blank" class="text-cyan-500 underline">Vercel.com</a> and sign in with GitHub.</li>
                    <li>Click <strong>"Add New" &gt; "Project"</strong> and select your portfolio repository.</li>
                    <li>Keep default settings (Framework Preset: <em>Other / Static HTML</em>) and click <strong>Deploy</strong>.</li>
                    <li>Your portfolio will be live in ~30 seconds with a free SSL domain! 🎉</li>
                </ol>
            `,
            github: `
                <ol class="list-decimal list-inside space-y-2">
                    <li>Create a GitHub repository named <code>your-username.github.io</code> or any custom name.</li>
                    <li>Push your <code>index.html</code> file to the <code>main</code> branch.</li>
                    <li>Go to Repo Settings &gt; <strong>Pages</strong> tab.</li>
                    <li>Under "Build and deployment", select Source: <strong>Deploy from a branch</strong>.</li>
                    <li>Branch: select <code>main</code> / <code>/(root)</code> and click <strong>Save</strong>.</li>
                </ol>
            `,
            netlify: `
                <ol class="list-decimal list-inside space-y-2">
                    <li>Sign in to <a href="https://netlify.com" target="_blank" class="text-cyan-500 underline">Netlify.com</a>.</li>
                    <li>Drag & drop your project folder containing <code>index.html</code> directly into the Netlify Drop Zone.</li>
                    <li>Alternatively, connect your GitHub account and import the repository for automated continuous deployment.</li>
                </ol>
            `
        };

        function openDeploymentModal() {
            document.getElementById('deploymentModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            switchDeployTab('vercel');
        }

        function closeDeploymentModal() {
            document.getElementById('deploymentModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function switchDeployTab(tab) {
            ['vercel', 'github', 'netlify'].forEach(t => {
                const tabBtn = document.getElementById(`tab-${t}`);
                if (t === tab) {
                    tabBtn.className = "pb-2 border-b-2 border-cyan-500 text-cyan-500 font-bold";
                } else {
                    tabBtn.className = "pb-2 border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold";
                }
            });
            document.getElementById('deployTabContent').innerHTML = deployGuides[tab];
        }

        /* -------------------------------------------------------------
           10. INITIALIZATION ON WINDOW LOAD
           ------------------------------------------------------------- */
        window.onload = function() {
            initTheme();
            typeEffect();
            renderSkills('all');
            renderProjects();
        };

        //===================================================================================================================
        //===================================================================================================================
        document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timelineContainer');
    const timelineProgress = document.getElementById('timelineProgress');
    const steps = document.querySelectorAll('[data-step]');

    function updateTimelineOnScroll() {
        if (!timelineContainer) return;

        const rect = timelineContainer.getBoundingClientRect();
        // Screen ke 65% hisse ko trigger point banaya hai taaki scroll karte hi smoothly fill ho
        const triggerPoint = window.innerHeight * 0.65;

        // Calculate line height percentage
        const scrolledDistance = triggerPoint - rect.top;
        const totalHeight = rect.height;
        let progressPercent = (scrolledDistance / totalHeight) * 100;

        // Clamp between 0% and 100%
        progressPercent = Math.max(0, Math.min(100, progressPercent));
        timelineProgress.style.height = `${progressPercent}%`;

        // Activate each big & small diamond as the progress line passes it
        steps.forEach((step) => {
            const stepRect = step.getBoundingClientRect();
            if (stepRect.top <= triggerPoint) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateTimelineOnScroll, { passive: true });
    updateTimelineOnScroll(); // Initial check on page load
});