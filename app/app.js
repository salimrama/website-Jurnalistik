import { topbar } from './component/topbar.js';
import { pageHeading } from './component/pageHeading.js';
import { formCard } from './component/formCard.js';
import { asideCard } from './component/asideCard.js';

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = `
        <main>
            ${pageHeading}
            <div class="registration-layout">
                ${formCard}
                ${asideCard}
            </div>
        </main>
    `;

    document.body.insertAdjacentHTML('afterbegin', topbar + mainContent);
});