// Screenplay Portfolio Central Document Array Matrix
const database = {
    writing: [
        { 
            // Replace the "w1" (Quantum) object inside your app.js database with this full script block:
{ 
    id: "w1", 
    title: "Quantum", 
    subtitle: "The Debut Feature Film", 
    type: "Screenplay", 
    info: "Action / Sci-Fi Romance", 
    pages: "37 Pages", 
    image: "images/quantum-poster.jpg",
    heroImage: "images/quantum-moodboard.jpg",
    desc: "A commercial screenplay layout tracing complex emotional formulas through dynamic technical operations.", 
    script: `FADE IN:

INT. BASEMENT LAB – NIGHT

A cramped underground lab hums with life.

Old COMPUTER MONITORS flicker with lines of code. Half-disassembled gadgets litter metal tables beside soldering irons, tangled wires, and empty energy drink cans.

Rain taps softly against a tiny basement window.

At the center of the chaos sits KABIR (24) — sharp eyes, messy hair, brilliance hidden beneath exhaustion.

Strapped to his wrist is a sleek metallic device glowing faint blue: THE TETHER.

A low, pulsing HUM fills the room.

Kabir studies a holographic interface projected from the device.

CLOSE ON:

Numbers spike violently.

Kabir grins.

                        KABIR
            Come on... don’t die on me now.

He taps a few commands.

The Tether suddenly emits a stronger pulse — WHOOOM.

The monitors flicker.

Kabir freezes.

Then—

The basement door CREAKS open.

RHEA (23) enters carefully, carrying two mugs of coffee. Confident, warm, effortlessly charming.

She watches him for a beat.

                        RHEA
            You know normal people sleep at 2
            A.M., right?

Kabir doesn’t look away from the device.

                        KABIR
            Normal people don’t bend physics
            for fun.

Rhea smirks.

She walks toward him, stepping over cables like she’s done this a hundred times.

                        RHEA
            And yet somehow you still can’t fix
            a table fan.

She hands him a mug.

Their fingers brush. A tiny pause.

Kabir finally looks up at her. The exhaustion disappears instantly.

                        KABIR
            That fan betrayed me first.

                        RHEA
            Mm-hm. That’s definitely how
            engineering works.

Kabir takes a sip, winces.

                        KABIR
            Why is this so strong?

                        RHEA
            Because the last time you worked
            three nights straight, you
            hallucinated your laptop talking to
            you.

Kabir points defensively.

                        KABIR
            It was talking.

Rhea laughs softly.`
}

        { 
            id: "w2", 
            title: "Velocity Lock", 
            subtitle: "Pulse System Project", 
            type: "Screenplay", 
            info: "Psychological Thriller", 
            pages: "95 Pages", 
            image: "images/velocity-poster.jpg",
            heroImage: "images/velocity-moodboard.jpg",
            desc: "A structural countdown tracking stress tolerances across sealed containment spaces.", 
            script: "SCENE START\n\nINT. RUNWAY HUB - CONTINUOUS\n\nPower linkages decouple in sequence.\n\n                        PRINCE\n            We have four computational blocks left.\n\nSCENE END" 
        }
    ],
    direction: [
        { 
            id: "d1", 
            title: "Quantum - Phase 1", 
            subtitle: "Director's Action Breakdown Document", 
            type: "Shooting Script", 
            info: "Production Strategy", 
            pages: "14 Sequence Setups", 
            image: "images/quantum-direction.jpg",
            heroImage: "images/direction-moodboard.jpg",
            desc: "Comprehensive visual planning system pairing physical action blocks with romantic script depth layers.", 
            script: "SEQUENCE 1 - SYSTEM ENGAGEMENT\n\nCamera Movement: Jib down through grid framework elements down to floor coordinate limits.\nLens Selection: 35mm wide optic for landscape immersion capture.\nDirector Note: Keep background color configurations muted until characters activate parameters." 
        }
    ],
    editing: [
        { 
            id: "e1", 
            title: "Timeline Core 4", 
            subtitle: "Technical Post-Production Script Structure", 
            type: "Lined Script", 
            info: "Editor Continuity Record", 
            pages: "8 Reference Pages", 
            image: "images/timeline-editing.jpg",
            heroImage: "images/editing-moodboard.jpg",
            desc: "Special post-production log data detailing audio cross-fade coordinates and sync tracking logic across structural narrative edits.", 
            script: "SCENE 14 - SPLIT TRANSITIONS\n\n- Cut on movement at Frame Index 142 during action sequences.\n- Audio Design: Modulate dark synthesizer background sweep across scene transitions.\n- Editor Priority: Protect focal point continuity parameters across visual adjustments." 
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    let currentPillar = "writing";

    // Application Navigation Links
    const navLinks = document.querySelectorAll(".nav-link");
    const pageViews = document.querySelectorAll(".page-view");
    const pillarButtons = document.querySelectorAll(".pillar-btn");
    const projectGrid = document.getElementById("project-grid");

    const pageHome = document.getElementById("page-home");
    const pageDetail = document.getElementById("page-detail");
    const detailContent = document.getElementById("detail-content");
    const backBtn = document.getElementById("back-to-portfolio");

    // Dynamic Navigation System Engine
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove("active"));
            pageViews.forEach(v => v.classList.remove("active"));

            link.classList.add("active");
            const target = link.getAttribute("data-target");
            document.getElementById(`page-${target}`).classList.add("active");
            
            // Auto-return to grid screen if user clicks Portfolio in navigation link
            if(target === "home") {
                pageDetail.classList.remove("active");
                pageHome.classList.add("active");
            }
        });
    });

    // Content Switcher Logic (Writing vs Direction vs Editing)
    pillarButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            pillarButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentPillar = btn.getAttribute("data-pillar");
            renderGrid();
        });
    });

    // Interface Grid Block Generator with Live Image Support
    function renderGrid() {
        projectGrid.innerHTML = "";
        const items = database[currentPillar] || [];

        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            
            // Render user image if path exists, fallback to minimalist text block if missing
            const posterContent = item.image 
                ? `<img src="${item.image}" alt="${item.title} Poster" class="poster-image-file" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'poster-title\'>${item.title}</div><div class=\'poster-type\'>${item.type}</div>';">`
                : `<div class="poster-title">${item.title}</div><div class="poster-type">${item.type}</div>`;

            card.innerHTML = `
                <div class="poster-frame">
                    ${posterContent}
                </div>
                <div class="meta-title">${item.title}</div>
                <div class="meta-info">${item.info}</div>
            `;
            card.addEventListener("click", () => loadProjectDetail(item));
            projectGrid.appendChild(card);
        });
    }

    // Detail Component Builder System with Dynamic Hero Backgrounds
    function loadProjectDetail(item) {
        pageHome.classList.remove("active");
        pageDetail.classList.add("active");

        // Prepare background hero path if available
        const heroBgStyle = item.heroImage ? `style="background-image: url('${item.heroImage}');"` : "";

        detailContent.innerHTML = `
            <div class="hero-header" ${heroBgStyle}>
                <div class="hero-text">
                    <h2>${item.title}</h2>
                    <p>${item.subtitle}</p>
                </div>
            </div>
            <div class="detail-specs">
                <div><strong>Format Documents:</strong> ${item.type}</div>
                <div><strong>Project Focus:</strong> ${item.info}</div>
                <div><strong>Total Scope:</strong> ${item.pages}</div>
            </div>
            <div class="description-block">
                <strong>Project Documentation Framework:</strong>
                <p>${item.desc}</p>
            </div>
            <div class="script-viewer">${item.script}</div>
        `;
    }

    backBtn.addEventListener("click", () => {
        pageDetail.classList.remove("active");
        pageHome.classList.add("active");
    });

    // Local Form Routing Module 
    const contactForm = document.getElementById("portfolio-contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const status = document.getElementById("form-status");
            status.style.color = "#6E695F";
            status.innerText = "Message processed successfully. Forwarding data parameters to ksathwik026@gmail.com...";
            contactForm.reset();
        });
    }

    // Initial Execution Directive
    renderGrid();
});
