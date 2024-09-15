import { createLogoSection } from "./section/createLogoSection.js";
import { createBannerSection } from "./section/bannerSection.js";
import { createContentSection } from "./section/contentSection.js";
import { createMetricsSection } from "./section/metricsSection.js";
import { createBenchmarksSection } from "./section/benchmarksSection.js";

export function createMain() {
    const main = document.createElement('main');
    main.className = 'main';

    const benchmarksSection = createBenchmarksSection()
    const metricsSection = createMetricsSection()
    const contentSection = createContentSection()
    const bannerSection = createBannerSection()
    const logoSection = createLogoSection()
    main.append(bannerSection, logoSection, contentSection, metricsSection, benchmarksSection);



    return main;
}






